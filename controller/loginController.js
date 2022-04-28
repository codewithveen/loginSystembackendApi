const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")        //jwt=json web token
const userschema = require("../db/user")
exports.login = async (user) => {
    try {
        const users = await userschema.findOne({email:user.email})
        if (!users) {

            return { errors: true, message: "email or password invalid" }
        }
        const passwordexist = await bcrypt.compare(user.password, users.password)
        if(!passwordexist){
            return { errors: true, message: "email or password invalid" }
        }
        const token = await jwt.sign({_id:users._id},process.env.SECRATE)
        return { errors: false, data:{token:token,user:users} }

    } catch (error) {
        return { errors: true, message: error.message }

    }
}