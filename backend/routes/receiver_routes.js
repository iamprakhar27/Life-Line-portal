import express from "express";
import {receiver, login,profile, edit_profile,compose,allmessages,allblooddonor} from "../controllers/receiver_controler.js";



const receiver_routes = express.Router()
receiver_routes.get('/', receiver)
receiver_routes.post("/login",login)
receiver_routes.get("/profile",profile)
receiver_routes.post("/edit_profile",edit_profile)
receiver_routes.post("/compose",compose)
receiver_routes.get("/allblooddonor",allblooddonor)
receiver_routes.get("/allmessages",allmessages)

export default receiver_routes