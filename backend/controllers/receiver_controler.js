import donorModel from "../models/donor.models.js";
import messageModel from "../models/message.model.js";
import receiverModel from "../models/receiver.model.js";

export const receiver = (request, response) => {
    response.send("this is receiver page ")
}

export const login = async (request, response) => {
    try {
        let account_Info = request.body
        console.log(account_Info);
        const { id, pass } = account_Info
        const receiver_data = await receiverModel.findOne({ id: id })
        console.log(receiver_data);

        if (receiver_data != null) {
            if (receiver_data.password == pass) {
                // response.send('admin found')
                response.send({ code: 200, message: "receiverhome", token: receiver_data.id })
            }
            else {
                response.send({ code: 404, message: 'password err' })
            }
        }
        else {
            response.send("Invalid credential")
        }

    }
    catch (err) {
        console.log('err' + err);
    }

}

//profile
export const profile = async (request, response) => {
    try {
        const uid = request.query.id //fetching data from react
        console.log(`data received from react is ${uid}`);
        const user_data = await receiverModel.findOne({ id: uid })
        console.log(user_data);
        response.send(user_data)

    }
    catch (error) {
        console.log("error loading " + error);
    }
}

//editprofile
export const edit_profile = async (request, response) => {
    try {
        const user_data = request.body
        const { id, email, name, phone } = user_data
        const updateDoc = {
            $set: {
                name: name,
                email: email,
                phone: phone
            }
        }
        const filter_condition = { id: id }
        const status = await receiverModel.updateOne(filter_condition, updateDoc)
        console.log(status);
        response.send(status)
    }
    catch (error) {
        console.log("error loading" + error);
    }
}


//compose a message
export const compose = async (request, response) => {
    const composeObject = request.body
    const { senderid, id, subject, message } = composeObject
    try {
        const composeDoc = new messageModel({
            senderid: senderid,
            id: id,
            subject: subject,
            message: message
        })
        await composeDoc.save()
        response.send("message sent")

    }
    catch (error) {
        console.log("error loading" + error);
    }
}

//message inbox
export const allmessages = async (request, response) => {
    try {
        // const userdata = request.body;
        const senderid = request.query.senderid
        console.log(senderid);
        const messagedata = await messageModel.find({ senderid: senderid })
        if (messagedata != null) {
            response.send(messagedata)
        }
        else {
            response.send("no messages")
        }

    }
    catch (error) {
        console.log("error loading" + error);
    }
}

//searchblooddonors
export const allblooddonor = async (request, response) => {
    let donordata = {}
    try {
        const { bloodGroup, city } = request.query
        console.log(bloodGroup, city);
        if (bloodGroup) {
            donordata = await donorModel.find({ bloodGroup: bloodGroup })
        }
        else if (city) {
            const cityquery = new RegExp(city, 'i')
            donordata = await donorModel.find({ city: city })
        }
        else {
            donordata = await donorModel.find().limit(10)
        }
        response.send({ message: "success", donor_data: donordata })
    }
    catch (error) {
        console.log("error loading" + error);
    }
}