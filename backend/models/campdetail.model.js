import mongoose from "mongoose";

const campdetailSchema = new mongoose.Schema(
    {
        event_name:{type:String,required:true},
        event_venue:{type:String,required:true},
        event_date:{type:String,required:true},
        event_description:{type:String,required:true}
    }
)

const campdetailModel = mongoose.model("CampDetail",campdetailSchema)
export default campdetailModel