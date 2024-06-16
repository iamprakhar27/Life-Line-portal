import mongoose from "mongoose"

const messageSchema = new mongoose.Schema(
    {
        senderid:{type:String,required:true},
        id:{type:String,required:true},
        subject:{type:String,required:true},
        message:{type:String,required:true}
    }
)

const messageModel = mongoose.model("Message",messageSchema)
export default messageModel