import mongoose from "mongoose";

const dburl ="mongodb+srv://prakhargupta:prakhargupta@cluster0.49xlw76.mongodb.net/lifeline_db"

const connectdb = async () =>{
    try
    {
         const connectionobject = await mongoose.connect(`${dburl}`)
         console.log("connection established with db");
    }
    catch(error)
    {
        console.log("error while connecting with db" + error);
    }
}

export default connectdb