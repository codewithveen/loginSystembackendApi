const auth = require("../middleware/auth")
const router = require("express").Router();
const {postuser,getuser,putuser,deleteuser} = require("../controller/userController")  //controller path
const {login} = require("../controller/loginController")  //
//insert user
router.post("/insert", async (req,res) => {
  try {
        const result = await postuser(req.body)
        if (result.errors) {
            res.status(400).json({errors : true, message : result.message})
        }else{
            res.status(200).json({errors : false, data : result.data})
        }
  } catch (error) {
    res.status(400).json({errors : true, message : error.message})
  }
})

//get user

router.get("/get" , auth, async (req,res) => {
  try {
      const result = await getuser()
      if (result.errors) {
          res.status(400).json({errors : true, Message : result.Message})
      }else{
          res.status(200).json({errors : false, Data : result.Data})
      }
  } catch (error) {
      res.status(400).json({errors : true, message : error.message})  
  }
})

//update user
router.put("/update/:id" , async (req,res) => {
  try {
      const id = req.params.id
      const result = await putuser(id,req.body)
      if (result.errors) {
          res.status(400).json({errors : true, Message : result.Message})
      }else{
          res.status(200).json({errors : false, Data : result.Data})
      }
  } catch (error) {
      res.status(400).json({errors : true, Message : error.Message})
  }
})

//delete user
router.delete("/delete/:id" , async (req,res) => {
  try {
      const id = req.params.id
      const result = await deleteuser(id) 
      if (result.errors) {
          res.status(400).json({errors : true, Message : result.Message})
      }
  } catch (error) {
      res.status(400).json({errors : true, Message : error.Message})
  }
})
//login controller
router.post("/loginuser", async (req,res) => {
    try {
          const result = await login(req.body)
          if (result.errors) {
              res.status(400).json({errors : true, message : result.message})
          }else{
              res.status(200).json({errors:false,data:result.data})
          }
    } catch (error) {
      res.status(400).json({errors : true, message : error.message})
    }
  })
  
module.exports =router

