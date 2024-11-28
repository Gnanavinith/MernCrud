import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const CreateUsers = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3000/createUser", { name, email, age })
            .then(result => {
                console.log(result);
                navigate("/")
            })
            .catch(err => console.error("Error:", err));
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center text-success font-weight-bold">Add The Users</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                    
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Your Name"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="text"
                        name="age"
                        className="form-control"
                       
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter Your Age"
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CreateUsers;
