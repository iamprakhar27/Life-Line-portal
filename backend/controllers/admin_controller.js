import adminModel from "../models/admin.model.js"
import campdetailModel from "../models/campdetail.model.js"
import FeedbackModel from "../models/feedback.models.js"
import contactModel from "../models/contact.models.js"
import donorModel from "../models/donor.models.js"
import receiverModel from "../models/receiver.model.js"
import appointmentModel from "../models/appointmnet.model.js"
import messageModel from "../models/message.model.js";
import blooddonationModel from "../models/blooddonation.model.js"
import { request } from "express"

export const admin =(request,response) => {
    response.send("<h1>this is response by admin</h1>")
}

//for admin login
export const login = async (request,response) =>{
    try{
        let account_info =  request.body
        console.log(account_info);
        const{id,pass} = account_info

        const admin_data = await adminModel.findOne({admin_id:id})
        console.log(admin_data);

        if(admin_data != null)
        {
            if(admin_data.admin_pass == pass)
            {
                // response.send("admin found")
                response.send({code:200,message:"adminhome",token:admin_data.admin_id})
            }
            else
            {
                response.send({code:404,message:"password error"})
            }
        }
        else
        {
            response.send("Invalid credentails")
        }

    }
    catch(error)
    {
        console.log(error);
    }
}

// campdetail
export const campdetail = async (request,response) => {
    const campdetailobject = request.body
    const{event_name,event_venue,event_date,event_description} = campdetailobject
    try{
        const campdetaildoc = new campdetailModel(
            {
                event_name:event_name,event_venue:event_venue,event_date:event_date,event_description:event_description
            }
        )
        await campdetaildoc.save()
        response.send("your camp have been registered !!")

    }
    catch(error)
    {
        console.log("error loading data" + error);
    }
}

// all feedbacks
export const allfeedbacks = async (request,response ) => {
    try{
           const feedbackData = await FeedbackModel.find()
           if(feedbackData != null){
           response.send(feedbackData)
           }
        else{
        response.send("no feedback yet")
        }
    }
    catch(error)
    {
      console.log("error loading data" +error);
    }
}

//all contacts
export const allcontacts = async (request,response) => {
    try{
        const contactData = await contactModel.find()
        if(contactData != null){
            response.send(contactData)
        }
        else
        {
            response.send("no contacts yet")
        }
    }
    catch(error)
    {
        console.log("error loading data" + error);
    }
}

//alldonors
export const veiwdonor = async (request,response) => {
    try{
        const donordata = await donorModel.find()
        if(donordata != null){
            response.send(donordata)
        }
        else{
            response.send("no donors found")
        }

    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}

//allreceiver
export const veiwreceiver = async(request,response) => {
    try{
        const receiverdata = await receiverModel.find()
        if(receiverdata != null){
            response.send(receiverdata)
        }
        else{
            response.send("no receivers found")
        }

    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}


//apointments bookings
export const donationappointments = async(request,response) => {
    const appointmentObject =  request.body
    const{date,message,venue} = appointmentObject
    try{
        const appointmentdoc =  new appointmentModel({
            date:date,
            message:message,
            venue:venue
        })
        await appointmentdoc.save()
        response.send("appointments have been shared!")

    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}

//compose a message
export const compose = async(request,response) => {
    const composeObject = request.body
    const{senderid,id,subject,message} = composeObject
    try{
        const composeDoc = new messageModel({
            senderid:senderid,
            id:id,
            subject:subject,
            message:message
        })
        await composeDoc.save()
        response.send("message sent")

    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}

//inbox
export const allmessages = async (request,response) => {
    try{
        // const userdata = request.body;
        const senderid = request.query.senderid
        console.log(senderid);
        const messagedata = await messageModel.find({senderid:senderid})
        if(messagedata != null){
            response.send(messagedata)
        }
        else{
            response.send("no messages")
        }

    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}


//regsitered blood donation donors data
export const registeredblooddonors = async (request,response) => {
    try{
        const registereddata = await blooddonationModel.find()
        if(registereddata != null)
        {
            response.send(registereddata)
        }
        else{
            response.send("not registered yet!")
        }
    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}

//update the data of registered appointments
export const updatedbloodregistration = async (request,response) => {
    try{
        const donordata =  request.body
        const {id,unit,date} = donordata
        const updatedoc = {
            $set: {
               unit:unit,
               date:date
            }
        }
        console.log(updatedoc);
        const filter_condition = {_id:id}
        const status = await blooddonationModel.updateOne(filter_condition,updatedoc)
        console.log(status);
        response.send(status)
    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}

//search eligible donors for the blood donation registered through appointments
export const searchfordonation =  async (request,response) => {
    let donordata = {}
    try{
        const { phone} = request.query
        console.log(phone);
        if(phone) {
            donordata = await blooddonationModel.find({phone:phone})
        }
        else{
            donordata = await blooddonationModel.find()
        }
        response.send({message:"donor found", donor_data: donordata})
    }
    catch(error)
    {
        console.log("error loading data" + error);
    }
}
