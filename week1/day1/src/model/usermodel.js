const mongoose =require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


let studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            unique:true,
            required:[true,"email is required bro"],
            lowercase:true,
            trim:true
        }
    })
const Student = mongoose.model("Student",studentSchema)
module.exports = Student