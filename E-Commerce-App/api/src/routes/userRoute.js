const router = require("express").Router()
const {verifyTokens, verifyTokenAndAuthorizatiion} = require("../middleware/verifytoken")


router.get("/userget")

router.post("/userpost")


// UPDATE
router.put("/:id",verifyTokenAndAuthorizatiion, (req, res)=>{
    if( req.body === req.params.id || req.user.isAdmin){

    }
})

module.exports= router