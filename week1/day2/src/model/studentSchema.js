const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Username is Mandatory"]
    },

    rollNo: {
        type: Number,
        unique: true,
        required: [true, "Roll Number is Mandatory"]
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: [true, "Teacher is Mandatory"]
    }

}, {
    timestamps: true
});

const StudentModel = mongoose.model("Student", studentSchema);

module.exports = StudentModel;