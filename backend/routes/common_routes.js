import  express  from "express";
import {home,addfeedback,addcontact,Donor,Receiver,allevents,allusers,showstory} from '../controllers/common_controller.js'

const common_route = express.Router()
common_route.get("/",home)
common_route.post("/addfeedback",addfeedback)
common_route.post("/addcontact",addcontact)
common_route.post("/Donor",Donor)
common_route.post("/Receiver",Receiver)
common_route.get("/allevents",allevents)
// common_route.get("/donorcategory",donorcategory)
common_route.get("/allusers",allusers)
common_route.get("/showstory",showstory)


export default common_route