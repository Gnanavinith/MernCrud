import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    // Fetch users when the component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    // Function to fetch all users
    const fetchUsers = () => {
        axios.get("http://localhost:3000")
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    };

    // Function to delete a user
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/deleteUser/${id}`)
            .then(() => {
                // Re-fetch users after successful deletion
                fetchUsers();
            })
            .catch(err => console.error("Error:", err));
    };

    return (
        <div className="container mt-4">
            <div>
                <Link to={"/createUser"} className='btn btn-success'>Add +</Link>
            </div>
            <br />
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/updateUser/${user._id}`} className="btn btn-primary mr-2">Update</Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(user._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
