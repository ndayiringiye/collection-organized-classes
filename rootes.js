import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
 const app = express();

 dotenv.config();
 app.use(express.json());
 
 const PORT = process.env.PORT || 4000;


 app.listen(PORT ,async () =>{
    await connectDb();
    console.log(`server is run on port  ${PORT}`);
 })

