import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Connectdb from "../dbconeection.js";
import UserRouter from "../Routes/UserRouter.js"
 app.config()
 const port=5000
 app.use(cors)
 app.use(express(json))
 Connectdb() 

 app.use('/api/user',UserRouter)
 

 app.listen((port)=>{
    console.log(`connected database ${port}`);
 })



