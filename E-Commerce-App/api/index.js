const express = require("express")
const mongoose = require("mongoose")
const app = express()
//const cors = require("cors");
const dotenv = require('dotenv')
//dontenv.config()
app.use(express.json())
const userRouter = require("./src/routes/userRoute")
const productRouter = require("./src/routes/productRoute")
const authRouter = require("./src/routes/auth")
const Crypto = require("crypto-js")
//EJZPOnEmKTLDCQVa
mongoose.set("strictQuery", false);

dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("db connection successfull"))
    .catch((err) => {
        console.log(err)
    })

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)

// app.get("/api/test", ()=>{
//     console.log("test is successful")
// })
app.listen(3000, () => {
    console.log("app is running on port 3000...")
})

