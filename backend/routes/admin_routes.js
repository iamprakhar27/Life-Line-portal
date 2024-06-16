import express from "express";
import { admin,login,campdetail,allfeedbacks,allcontacts,veiwdonor,veiwreceiver,donationappointments, compose,allmessages,updatedbloodregistration,registeredblooddonors,searchfordonation} from "../controllers/admin_controller.js";

const admin_routes = express.Router()
admin_routes.get("/",admin)
admin_routes.post("/login",login)
admin_routes.post("/campdetail",campdetail)
admin_routes.get("/allfeedbacks",allfeedbacks)
admin_routes.get("/allcontacts",allcontacts)
admin_routes.get("/veiwdonor",veiwdonor)
admin_routes.get("/veiwreceiver",veiwreceiver)
admin_routes.post("/donationappointments",donationappointments)
admin_routes.post("/compose",compose)
admin_routes.get("/allmessages",allmessages)
admin_routes.get("/registeredblooddonors",registeredblooddonors)
admin_routes.post("/updatedbloodregistration",updatedbloodregistration)
admin_routes.get("/searchfordonation",searchfordonation)

export default admin_routes

