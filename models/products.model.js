import mongoose from "mongoose";
import 'dotenv/config';

const connectDb = async ()=>{
    try {
       await  mongoose.connect(process.env.MONGODB_URI);
        console.log("Successfully connected to Db");
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;

