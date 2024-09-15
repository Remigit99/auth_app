import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/route.js"

const app = express()

app.get("/", (req, res) =>{
    res.send("Welcome Amina")
})

app.use("/api/auth", authRoutes)

app.use(express.json())

const PORT = process.env.PORT || 5000


app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
})

