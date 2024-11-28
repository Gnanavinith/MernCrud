const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserModel = require("./model/users");

const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Crud");

app.get("/", (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

// Corrected endpoint for getting a user by ID
app.get("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById(id)  // Directly pass id, not { id }
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
   const id = req.params.id;
   UserModel.findByIdAndUpdate(id, req.body, { new: true })
       .then(user => res.json(user))
       .catch(err => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
   const id = req.params.id;
   UserModel.findByIdAndDelete(id)
       .then(() => res.json({ message: "User deleted successfully" }))
       .catch(err => res.json(err));
});



const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running");
});
