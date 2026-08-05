const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Username is Mandatory"]
    },

    phoneNumber: {
        type: String,
        required: [true, "Phone Number is Mandatory"]
    },

    subject: {
        type: String,
        required: [true, "Subject is Mandatory"]
    },

    experience: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const TeacherModel = mongoose.model("Teacher", teacherSchema);

module.exports = TeacherModel;