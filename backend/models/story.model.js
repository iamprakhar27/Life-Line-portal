import mongoose  from "mongoose";

const storySchema = new mongoose.Schema(
    {
        donorid:{type:String,requried:true},
        title:{type:String,required:true},
        content:{type:String,required:true}
        
    }
)

const storyModel = mongoose.model("Story",storySchema)
export default storyModel