const jwt = require("jsonwebtoken")

const verifytoken = (req,res, next) =>{
    const authheader = req.headers.token
    if(authheader){
        jwt.verify( token, process.env.JWT_SECRET, (err, user)=>{
            if(err){
                res.status(403).json("token is not valid!")
            }
            req.user = user
            next()
        })
    }else{
        return res.status(401).json(" you are not authenticated!")
    }
}

const verifyTokenAndAuthorizatiion = (req, res, next)=>{
    verifytoken(req, res,()=>{
        if( req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not allow to do that")
        }

    })

}

module.exports = {verifytoken, verifyTokenAndAuthorizatiion}