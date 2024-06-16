import express from 'express'
import { donor,login,profile,editprofile,compose,yourstory,showappointment,donorbloodregister,allmessages,registerblooddonation} from '../controllers/donor_controller.js'


const donor_routes = express.Router()
donor_routes.get("/",donor)
donor_routes.post("/login",login)
donor_routes.get("/profile",profile)
donor_routes.post("/editprofile",editprofile)
donor_routes.post("/compose",compose)
donor_routes.post("/yourstory",yourstory)
donor_routes.get("/showappointment",showappointment)
donor_routes.get("/allmessages",allmessages)
donor_routes.post("/donorbloodregister",donorbloodregister)
donor_routes.get("/registerblooddonation",registerblooddonation)


export default donor_routes