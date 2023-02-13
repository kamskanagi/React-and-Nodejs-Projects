const express = require("express")
const mongoose = require("mongoose")
const app = express()
//const cors = require("cors");
const dotenv = require('dotenv')
const cors = require("cors")
//dontenv.config()
app.use(express.json())
const stripeRouter = require("./src/routes/stripeRoute")
const cartRouter = require("./src/routes/cartRoute")
const orderRouter = require("./src/routes/orderRoute")
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

app.use(cors())
app.use("/api/carts", cartRouter)
app.use("/api/orders", orderRouter)
app.use("/api/products", productRouter)
app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/checkout", stripeRouter)

// app.get("/api/test", ()=>{
//     console.log("test is successful")
// })
app.listen(3000, () => {
    console.log("app is running on port 3000...")
})

