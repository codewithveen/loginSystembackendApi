const jwt = require("jsonwebtoken")  
// const router = require("express").Router()
// module.exports=router     
const auth = async (req,res,next)=>{
try {
    const token = req.header("auth")
    const varifyUser = await jwt.verify(token,process.env.SECRATE)
    if(!varifyUser){
        res.status(400).json("invalid token")
    }
    next()
    
} catch (error) {
    res.status(400).json({message:error.message})
    
}
}
module.exports=auth