import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminUI1() {
    const navigate = useNavigate();

    const handleUpdateElectiveClick = () => {
        navigate('/update-elective'); 
    };

    const handleAccessStudentDataClick = () => {
        navigate('/access-student-data'); 
    };

    return (
        <div style={{ justifyContent: "center" }}>
            <button
                style={{ padding: "1%", margin: "10px", top: "50%", left: "50%" }}
                onClick={handleUpdateElectiveClick}
            >
                Update Elective
            </button><br />
            <button
                style={{ padding: "1%", margin: "10px" }}
                onClick={handleAccessStudentDataClick}
            >
                Access student data
            </button>
        </div>
    );

}

export default AdminUI1;
