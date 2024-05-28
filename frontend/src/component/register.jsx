import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Define the navigate function

    const addemp = () => {
        axios.post("http://localhost:3001/saveemp", {
            name: name,
            password: password
        }, {
            timeout: 10000 // Timeout set to 10 seconds (adjust as needed)
        })
        .then(() => {
            console.log("Inserted successfully");
        });
    };

    const submitHandler = () => {
        if (name === "leela" && password === "1563") {
            alert("Login successful");
            // Redirect to home page
            navigate('/home');
        } else {
            alert("Login failed");
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="card text-black mb-3" style={{backgroundColor: "pink", maxWidth: "18rem",marginTop: "50px"}}>
                    <div className="card-header" style={{fontSize: "20"}}>WELCOME!!!</div>
                    <div className="card-body">
                        <h5 className="card-title">LogIn</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                        <form onSubmit={addemp}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control"/>
                            </div>
                            <div>
                                <button type="submit" onClick={submitHandler}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
