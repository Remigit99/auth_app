import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/route.js"
import { connectDb } from "./Db/connectDb.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use("/api/auth", authRoutes)


const PORT =  5000
// console.log(PORT)

connectDb()

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
})

