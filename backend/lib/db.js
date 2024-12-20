import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()

export const ConnectDB= async()=>{
   try{
    const conn= await mongoose.connect(process.env.MONGO_URL)
    console.log(`DB Connected ! ${conn.connection.host} `)
   }
   catch(err){
    console.log("DB CONNECTION Error",err);
    process.exit(1)
   }
}
