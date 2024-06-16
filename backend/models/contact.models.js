import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        tel:{type:String,required:true},
        query:{type:String,required:true}


    }
)

const contactModel = mongoose.model("Contact",contactSchema)
export default contactModel