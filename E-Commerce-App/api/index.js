const express = require("express")
const mongoose = require("mongoose")
const app = express()
const dontenv = require("dotenv")
dontenv.config()
app.use(express.json())
const userRouter = require("./src/routes/userRoute")
const authRouter = require("./src/routes/auth")
 const Crypto = require("crypto-js")
//EJZPOnEmKTLDCQVa
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_url)
.then(()=>console.log("db connection successfull"))
.catch((err)=>{
    console.log(err)
})


app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)



// app.get("/api/test", ()=>{
//     console.log("test is successful")
// })
app.listen(5000, ()=>{
    console.log("app is running on port 6000...")
})

