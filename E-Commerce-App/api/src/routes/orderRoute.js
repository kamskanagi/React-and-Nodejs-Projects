const router = require("express").Router()

router.get("/userget", (req, res)=>{
   //console.log( " get successful")
   res.send(" get is sucessful")
})

router.post("/userpost", (req, res)=>{
    const username = req.body.username
    res.send(username)
})

module.exports= router