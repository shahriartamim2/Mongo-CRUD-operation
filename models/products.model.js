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

const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});

const Product = mongoose.model('Product',productSchema)














export  {connectDb, Product};



