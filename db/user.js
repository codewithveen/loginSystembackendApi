const mongoose = require("mongoose")
const user = mongoose.Schema({
    firstnm:{type:String,required:true},
    lastnm:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    
})
module.exports = mongoose.model("userdb",user)