const bcrypt = require("bcrypt")            //npm i bcrypt package install
const userschema = require("../db/user")
//post user controller
exports.postuser = async (user) => {            //Statement Fuction
    try {
        const emailExits = await userschema.findOne({email:user.email}) //duplicate email find
        if(emailExits){
        return {errors:true,message:"email already exist"}
        }
        let salt = await bcrypt.genSalt(10)             //password encrypted
        const encryptedPassword = await bcrypt.hash(user.password,salt)
        const postuser = await  new userschema({firstnm:user.firstnm,lastnm:user.lastnm,email:user.email,password:encryptedPassword})
        const data = await postuser.save()
        return { errors:false,data : data}
    } catch (error) {
       return {errors:true,message:error.message} 
    }
} 

//get user controller

exports.getuser = async ( ) => {          //Statement Fuction
    try {
        const data = await userschema.find()
        return { errors:false,Data : data}
    } catch (error) {
        return {errors:true,Message:error.Message} 
    }
}

//put user controller
exports.putuser =  async (id,user) => {           //Statement Fuction
    try {
        const data = await userSchema.findByIdAndUpdate(id,user,{new:true})
        return { errors:false,Data : data}
    } catch (error) {
        return {errors:true,message:error.message} 
    }
}
//delete user controller
exports.userdelete =  async (id) => {           //Statement Fuction
    try {
         await user.findByIdAndDelete(id)
        return { errors:false,data : "Data Deleted Sucessfully....!"}
    } catch (error) {
        return {errors:true,message:error.message} 
    }
}