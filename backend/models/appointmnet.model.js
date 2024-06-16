import mongoose  from "mongoose";

const appointmentSchema = new mongoose.Schema(
    {
        date:{type:String,requried:true},
        message:{type:String,required:true},
        venue:{type:String,required:true}
        
    }
)

const appointmentModel = mongoose.model("appointment",appointmentSchema)
export default appointmentModel