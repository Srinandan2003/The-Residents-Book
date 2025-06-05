import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.configDotenv();


const connectDB = async() =>{
    try {
        const DB = await mongoose.connect(process.env.MONGOBDURI)  
        console.log("✅ connected MongoDB successfully:",DB.connections[0].host);
    } catch (error) {
        console.log("❌Connection to DB failed",error.message);
    }
}

export default connectDB