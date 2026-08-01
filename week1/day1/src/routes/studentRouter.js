const express = require("express");
const userRoute = express.Router();
const Student = require("./../model/usermodel");

// Get all students
userRoute.get("/", async (req, res) => {
    try {
        const data = await Student.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Insert student
userRoute.post("/", async (req, res) => {
    try {
        console.log("Trying to insert data...");

        const student = await Student.create(req.body);

        res.status(201).json({
            message: "Student inserted successfully",
            data: student
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Update student
userRoute.patch("/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            message: "Student updated successfully",
            data: student
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Delete student
userRoute.delete("/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);

        res.json({
            message: "Student deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Get one student
userRoute.get("/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        res.json(student);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = userRoute;