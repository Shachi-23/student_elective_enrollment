import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [adminID, setadminID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make a request to the backend for login
      const response = await axios.post('http://localhost:3000/login', {
        id: adminID,
        password: password,
        role: 'admin'  // You can change this if login is for different roles
      });
      alert(response.data.message);
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('adminID', adminID); 
      // Redirect to dashboard or home page after successful login
      navigate('/adminUI1');
    } catch (error) {
      alert('Login failed: ' + error.response?.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="adminID" className="form-label">ADMIN ID:</label>
          <input
            type="text"
            className="form-control"
            id="adminID"
            value={adminID}
            onChange={(e) => setadminID(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">
        Are you new?{" "}
        <button onClick={() => navigate('/Signup')} className="btn btn-link">
          Sign up
        </button>
      </p>
    </div>
  );
}

export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function LoginPage() {
//   const [adminID, setAdminID] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/login', {
//         id: adminID,
//         password: password,
//         role: 'admin'
//       });
//       alert(response.data.message);
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('adminID', adminID);
//       navigate('/adminUI1');
//     } catch (error) {
//       alert('Login failed: ' + error.response?.data.message);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-cyan-400 via-sky-500 to-pink-400/50 p-4">
//       <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
//         <div className="p-6 space-y-6">
//           <div className="flex flex-col items-center space-y-3">
//             <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//             </div>
//             <h2 className="text-2xl font-medium text-gray-700">LOG IN</h2>
//           </div>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div className="space-y-2">
//               <div className="relative">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//                 <input
//                   type="text"
//                   placeholder="SRN"
//                   className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                   value={adminID}
//                   onChange={(e) => setAdminID(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <div className="relative">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
//             >
//               Login
//             </button>
//             <div className="text-center text-sm text-gray-600">
//               {"Don't have an account? "}
//               <button
//                 onClick={() => navigate('/Signup')}
//                 className="text-cyan-500 hover:text-cyan-600 font-semibold"
//                 type="button"
//               >
//                 SIGN UP
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
