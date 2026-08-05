const express = require("express")
const teacherRouter = express.Router();

const {createTeacher,getTeachers, getATeacher, updateTeacher, deleteTeacher} =require("../controller/TeacherController")

teacherRouter.get("/",getTeachers)

teacherRouter.get("/:id",getATeacher)

teacherRouter.post("/",createTeacher)

teacherRouter.delete("/:id",deleteTeacher)

teacherRouter.put("/:id",updateTeacher)

module.exports=teacherRouter