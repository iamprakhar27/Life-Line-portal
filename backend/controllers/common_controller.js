import contactModel from "../models/contact.models.js"
import FeedbackModel from "../models/feedback.models.js"
import donorModel from "../models/donor.models.js"
import receiverModel from "../models/receiver.model.js"
import campdetailModel from "../models/campdetail.model.js"
import storyModel from "../models/story.model.js"



export const home = (request,response) =>{
response.send("<h1>this is home response given by server</h1>")
}


// feedback form from receiver
export const addfeedback = async(request,response) => {
    const feedbackobject = request.body
    // console.log(feedbackobject);
    const{name,email,remarks,rating} = feedbackobject

    try{
        const Feedbackdoc = new FeedbackModel(
            {
                name:name, email:email, remarks:remarks, rating:rating
            }
        )

        await Feedbackdoc.save()
        response.send("thank you for  your feedback!!!")
    }
    catch(error){
        console.log("error loading" + error);
    }
}

// contact us form 
export const addcontact = async (request,response) => {
    const contactobject = request.body
    // console.log(contactobject);
    const {name,email,tel,query} = contactobject
    try{
        const contactdoc = new contactModel(
            {
                name:name,email:email,tel:tel,query:query
            }
        )
        await contactdoc.save()
        response.send("we will response sooner!!")
    }

    catch(error)
    {
        console.log("error loading data" + error);
    }
}

//blood donor registration
export const Donor = async (request, response) => {
    const donorObject = request.body
    const { id, password, name, email, phone, gender, age, bloodGroup, city } = donorObject
    try {
        const donorDoc = new donorModel({
            id: id,
            password: password,
            name: name,
            email: email,
            phone: phone,
            gender: gender,
            age: age,
            bloodGroup: bloodGroup,
            city: city
        })
        await donorDoc.save()
        response.send("You have been Registered!")
    }
    catch (err) {
        console.log('err' + err);
    }
}

//blood receiver registration
export const Receiver = async (request, response) => {
    const receiverObject = request.body
    const { id, password, name, email, phone } = receiverObject
    try {
        const receiverDoc = new receiverModel({
            id: id,
            password: password,
            name: name,
            email: email,
            phone: phone
        })
        await receiverDoc.save()
        response.send("You have been Registered!")
    }
    catch (err) {
        console.log('err' + err);
    }
}

//upcoming events/camps
export const allevents = async (request,response) => {
    try{
        const eventsData = await campdetailModel.find()
        if(eventsData != null){
            response.send(eventsData)
        }
        else
        {
            response.send("Soon there will be camps !")
        }
    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}

//show story on home 
export const showstory = async (request,response) => {
    try{
        const storyData = await storyModel.find()
        if(storyData != null){
            response.send(storyData)
        }
        else
        {
            response.send("stories by donors")
        }
    }
    catch(error)
    {
        console.log("error loading" + error);
    }
}

//searchdonor
export const allusers = async(request,response) => {
    let donordata = {}
    try{
        const {bloodGroup,city} = request.query
        console.log(bloodGroup,city);
        if(bloodGroup){
            const regex = new RegExp(bloodGroup,'i')
            donordata = await donorModel.find({bloodGroup:{$regex:regex}})
        }
        else if(city){
            const regex1 =  new RegExp(city, 'i')
            donordata = await donorModel.find({city:{$regex:regex1}})

        }
        else{
            donordata = await donorModel.find().limit(10)
        }
        response.send({message:"success",donor_data:donordata})

    }
    catch(error)
    {
        console.log("error loading " + error);
    }
}