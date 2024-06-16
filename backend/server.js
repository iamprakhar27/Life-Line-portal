import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import common_route from "./routes/common_routes.js";
import admin_routes from "./routes/admin_routes.js";
import connectdb from "./database/db.js";
import donor_routes from "./routes/donor_routes.js";
import receiver_routes from "./routes/receiver_routes.js";


const serverApp = express()

dotenv.config()
serverApp.use(cors())

serverApp.use(express.json())   
serverApp.use(express.urlencoded())
serverApp.use(express.static("public"))

serverApp.use("/",common_route)
serverApp.use("/admin", admin_routes)
serverApp.use("/donor",donor_routes)
serverApp.use("/receiver",receiver_routes)

connectdb()


// const PORT = 4000

const PORT = process.env.PORT || 4000

serverApp.listen(PORT,()=>{
    console.log(`server is live on http://localhost:${PORT}`);
})