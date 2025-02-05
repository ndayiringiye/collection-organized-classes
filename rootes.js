import classeRouter from "./routes/classe.route.js"
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
 const app = express();
 

 dotenv.config();
 app.use(express.json());
 app.use("/api/classes", classeRouter)
 
 const PORT = process.env.PORT || 4000;


 app.listen(PORT ,async () =>{
    await connectDb();
    console.log(`server is run on port  ${PORT}`);
 })

