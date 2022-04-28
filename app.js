require ("dotenv/config")
const express = require("express")
const mongoose = require("mongoose")
const user = require("./router/userroute")  //router path

const app = express()


app.use(express.json())

app.get("/",async ()=>{
    res.send("hi")
})

app.use("/user",user) //("whichever value",above 3rd line value)

app.listen(process.env.PORT || 4040)

// Db Connection
mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true}, (req,res) => {
    console.log("dbconnect");
})
