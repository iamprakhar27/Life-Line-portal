import donorModel from '../models/donor.models.js'
import messageModel from '../models/message.model.js'
import storyModel from '../models/story.model.js'
import appointmentModel from '../models/appointmnet.model.js'
import blooddonationModel from '../models/blooddonation.model.js'

export const donor = (request,response)=>{
    response.send("this is Donor page ")
}


export const login = async (request, response) => {
    try {
        let account_Info = request.body
        console.log(account_Info);
        const { id, password } = account_Info

        const donor_data = await donorModel.findOne({id:id})
        console.log(donor_data);

        if (donor_data != null) 
        {
            if (donor_data.password == password)
             {
                // response.send('admin found')
                response.send({code:200,message:"donorhome",token:donor_data.id})
            }
            else
             {
                response.send({ code: 404, message: 'password err' })
            }

        }

        else{
            response.send("Invalid credential")
        }

    }
    catch (err) {
        console.log('err' + err);
    }
}

//profile
export const profile = async (request,response)=>{
    try{
        const uid = request.query.id //fetching data from react
        console.log(`data received from react is ${uid}`);
        const user_data = await donorModel.findOne({id:uid})
        console.log(user_data);
        response.send(user_data)
    }
        catch(err){
            console.log("err" +err);
        }
   
    }

//editprofile
export const editprofile = async(request,response) => {
    try{
        const user_data = request.body
        const{id,email,name,phone,city,age} = user_data
        const updateDoc = {
            $set: {
                name:name,
                email:email,
                phone:phone,
                city:city,
                age:age
                
            }
        }
        const filter_condition = {id:id}
        const status = await donorModel.updateOne(filter_condition,updateDoc)
        console.log(status);
        response.send(status)
    }
    catch(error){
        console.log("error loading " + error);
    }
}

//compose a message
export const compose = async (request,response) => {
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

//sharestory
export const yourstory = async (request,response) =>{
    const storyObject =  request.body
    const{donorid,title,content} = storyObject
    try{
        const storydoc = new storyModel({
            donorid:donorid,
            title:title,
            content:content
           
        })
        await storydoc.save()
        response.send("Thank you for sharing your story!")
    }
    catch(error)
    {
        console.log("error loading" +  error);
    }
}

//show appointments in donors home
export const showappointment = async(request,response) =>{
    try{
        const appointmentData = await appointmentModel.find()
        if(appointmentData != null){

            response.send(appointmentData)
        }
        else{
            response.send("appointments")
        }

    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}

//blood donation registration from appointments
export const donorbloodregister =  async(request,response) =>{
    const donationObject = request.body
    const{senderid,name,phone,email,age,blood} = donationObject
    try{
        const donationdoc = new blooddonationModel({
            senderid:senderid,
            name:name,
            phone:phone,
            email:email,
            age:age,
            blood:blood
        })
        await donationdoc.save()
        response.send("your Appointment has been Booked!")

    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}

//get data in the blood donation registration form
export const registerblooddonation = async(request,response) => {
    try{
        const uid = request.query.id
        console.log(`data received from react is ${uid}`);
        const donor_data = await donorModel.findOne({id:uid})
        console.log(donor_data);
        response.send(donor_data)
    }
    catch(error)
    {
        console.log("error loading data" + error);
    }
}