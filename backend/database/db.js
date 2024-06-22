import mongoose from "mongoose";

const dburl ="your mongodb database cluster"

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
