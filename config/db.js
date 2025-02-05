import mongoose from "mongoose";



export const connectDb = async () =>{
   try {
       await mongoose.connect(process.env.CONNECTION_DB);
       console.log(`database connected `)
   } catch (error) {
    console.log(`error :${error.message}`);
   }
} 