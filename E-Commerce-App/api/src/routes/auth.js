const { requiredPaths } = require("../models/User")
const User = require("../models/User")
//const User = requiredPaths
const CryptoJS = require("crypto-js")
const router = require("express").Router()
const jwt = require("jsonwebtoken") // to give tokem to users

router.post("/register", async (req, res)=>{
    const newuser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SECRET).toString(),
    })

    try{
        const saveUser = await newuser.save()
        //console.log(saveUser)
        const {password, ...others}= saveUser._doc
        res.status(200).json({others})
    }catch(err){
         res.status(500).json(err)
        //console.log(err)
    }
    
})



router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({
            username:req.body.username,
          })
        !user && res.status(401).json("wrong credentials username")
       
        const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SECRET).toString(CryptoJS.enc.Utf8)
        //console.log(hashedPassword)
        hashedPassword !== req.body.password && res.status(401).json("wrong credentials password")

          const accesstoken = jwt.sign({
            id: user.id,
            isAdmin: user.isAdmin
            }, process.env.JWT_SECRET,
            {expiresIn:"3d"})

        const {password, ...others}= user._doc
        res.status(200).json({...others, accesstoken })
       // res.send(others)
    }catch(err){
         res.status(500).json(err)
    }
    
})

module.exports= router