let errorHandling=(error, req,res,next)=>{
    if(error)
    {console.log(error.message);}
    console.log("We are at the Error Handling");
}
module.exports = errorHandling