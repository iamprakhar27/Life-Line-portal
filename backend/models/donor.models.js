import mongoose from "mongoose"

const donorSchema = new mongoose.Schema(
    {
      id:{type:String,required:true,unique:true},
      password:{type:String,required:true},
      name:{type:String,required:true},
      phone:{type:String,required:true},
      email:{type:String,required:true},
      age:{type:String,required:true},
      gender:{type:String,required:true},
      bloodGroup:{type:String,required:true},
      city:{type:String,required:true}

    }
)
 

const donorModel = mongoose.model("Donor",donorSchema)
export default donorModel