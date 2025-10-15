import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


// Database connection ma sadai nai async ra await use hunxa hai
const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected !! DB HOST : 
            ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}

export default connectDB 