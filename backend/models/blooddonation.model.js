import mongoose  from "mongoose";

const blooddonationSchema = new mongoose.Schema(
    {
        senderid:{type:String,required:true},
        name:{type:String,requried:true},
        email:{type:String,requried:true},
        phone:{type:String,requried:true},
        age:{type:String,requried:true},
        blood:{type:String,requried:true},
        unit:{type:String,default:null},
        date:{type:String,default:null}

    }
)

const blooddonationModel =  mongoose.model("donation",blooddonationSchema)
export default blooddonationModel