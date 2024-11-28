import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserUpdate = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/updateUser/${id}`)
            .then(result => {
                const user = result.data;
                setName(user.name);
                setEmail(user.email);
                setAge(user.age);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/updateUser/${id}`, { name, email, age })
            .then(() => navigate("/"))
            .catch(err => console.error("Error:", err));
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center text-success font-weight-bold">Update The User</h1>
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Your Name"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="text"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter Your Age"
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Confirm Update</button>
            </form>
        </div>
    );
};

export default UserUpdate;
