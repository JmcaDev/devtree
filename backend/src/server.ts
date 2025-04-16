import express from "express"
import "dotenv/config"
import router from "./router"
import { connectDB } from "./config/db"
const app = express()

//Read form data
app.use(express.json())

connectDB()

//Routing
app.use("/api", router)

export default app