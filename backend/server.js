import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/user.route.js"
import productRouter from "./routes/product.route.js"
import cartRouter from "./routes/cart.route.js"

//App Config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

//api endpoints

app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(port,()=> {
    console.log(`Server started on port : ${port}`);
    
})