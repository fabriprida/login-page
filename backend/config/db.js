import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI='mongodb+srv://pridafabrizio:QvKBBZU2hm2TGNxZ@cluster0.xlzt0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}