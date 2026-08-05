const express = require("express")
const {createStudent,updateUser, getStudents,deleteStudent, getAStudent} = require("../controller/StudentController")
const studentRouter = express.Router()
studentRouter.get("/",getStudents)
studentRouter.get("/:id",getAStudent)
studentRouter.post("/",createStudent)
studentRouter.put("/:id",updateUser)
studentRouter.delete("/:id",deleteStudent)

module.exports=studentRouter