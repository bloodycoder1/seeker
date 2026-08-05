const express = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.port
const errorHandling = require("./src/utils/errorHandling")

const studentRouter = require("./src/route/StudentRouter")
const teacherRouter = require("./src/route/TeacherRouter")

app.use((req,res,next)=>{
    console.log("We are Logging the request");
    next();
})
app.use("/api",(req,res, next)=>
{
    console.log(req.method);
    res.send("Hi There We are Now Good To GO")    
    next();
})
app.use("/api/student",studentRouter)
app.use("api/teacher",teacherRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log("We are at the http://localhost:"+port+"/api");
    
})