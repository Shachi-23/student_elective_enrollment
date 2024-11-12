const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sample',
    password: 'Shachi2374'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
});
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password'
    }
});

// Step 1: Request to reset password
router.post('/forgot-password', (req, res) => {
    const { email } = req.body;

    // Generate a 4-digit code
    const resetCode = Math.floor(1000 + Math.random() * 9000);

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            const user = results[0];

            // Save the reset code to the database (or temporary storage)
            db.query('UPDATE users SET reset_code = ? WHERE id = ?', [resetCode, user.id], (err) => {
                if (err) throw err;
                const transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'your_email@gmail.com',  // Your email
                        pass: 'your_generated_app_password'  // Generated app password or email password
                    }
                });

                // Send email with the 4-digit code
                const mailOptions = {
                    from: 'your_email@gmail.com',
                    to: email,
                    subject: 'Password Reset Code',
                    text: `Your password reset code is: ${resetCode}`
                };

                transporter.sendMail(mailOptions, (err) => {
                    if (err) {
                        console.error('Nodemailer Error:', err);  // Log the error details
                        return res.status(500).send('Error sending password reset code');  // Send error response
                    }
            
                    // Send success response if email is sent
                    res.send('Reset code sent to email');
                });
            });
        } else {
            res.status(400).send('Email not found');
        }
    });
});

// Step 2: Verify the 4-digit code
router.post('/verify-reset-code', (req, res) => {
    const { email, resetCode } = req.body;

    // Check if the code matches
    db.query('SELECT * FROM users WHERE email = ? AND reset_code = ?', [email, resetCode], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            // Code is correct, allow password reset
            res.send('Code verified, proceed to reset password');
        } else {
            res.status(400).send('Invalid code');
        }
    });
});

// Step 3: Reset the password
router.post('/reset-password', async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password in the database
        db.query('UPDATE users SET password = ?, reset_code = NULL WHERE email = ?', [hashedPassword, email], (err) => {
            if (err) throw err;
            res.send('Password updated successfully');
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});


// Signup Route
router.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email], (err) => {
            if (err) throw err;
            res.status(201).send('User registered');
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Login Route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            const user = results[0];
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(400).send('Invalid credentials');
            }
        } else {
            res.status(400).send('User not found');
        }
    });
});

// Forgot Password Route
router.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            const user = results[0];
            const resetToken = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'your_email@gmail.com',
                    pass: 'your_email_password'
                }
            });
            const mailOptions = {
                from: 'your_email@gmail.com',
                to: email,
                subject: 'Password Reset',
                text: `Click the link to reset your password: http://localhost:3000/reset-password/${resetToken}`
            };
            transporter.sendMail(mailOptions, (err) => {
                if (err) throw err;
                res.send('Password reset link sent');
            });
        } else {
            res.status(400).send('Email not found');
        }
    });
});

// Reset Password Route
router.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        db.query('UPDATE users SET password = ?, resetToken = NULL WHERE id = ?', [hashedPassword, decoded.id], (err) => {
            if (err) throw err;
            res.send('Password updated');
        });
    } catch (err) {
        res.status(400).send('Invalid or expired token');
    }
});

module.exports = router;
