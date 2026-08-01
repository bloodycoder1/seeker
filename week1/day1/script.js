const express = require("express")
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config()
const port = process.env.PORT 
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
const studentRoute = require("./src/routes/studentRouter")
app.use((req,res,next)=>{
    console.log("Hye there we got a user Request");
    next()
})
app.use("/student",studentRoute)
app.use((req,res)=>{
    res.send("WE got the 404 error")
})

app.listen(port , ()=>{
    console.log("http://localhost:"+port);
    
})