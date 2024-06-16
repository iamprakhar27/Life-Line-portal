import mongoose from "mongoose";

const receiverSchema = new mongoose.Schema(
    {
       name:{type:String,required:true},
       email:{type:String,required:true},
       id:{type:String,required:true},
       password:{type:String,required:true},
       phone:{type:String,required:true}
    }
)

const receiverModel = mongoose.model("Receiver",receiverSchema)
export default receiverModel