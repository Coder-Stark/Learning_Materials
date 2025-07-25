// require('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import {app} from "./app.js";
dotenv.config();

const port = process.env.PORT || 8000 

connectDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is Running on PORT : ${port}`)
    })
})
.catch((err)=>{
    console.log("DB Connection Error : ", err);
})




/*
import mongoose from 'mongoose';
import {DB_NAME} from './constants';
import express from 'express';
const app = express();

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("err", (err)=>{
            console.log("Error : ", err);
            throw err;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is Running on PORT : ${process.env.PORT}`)
        })
    }catch(err){
        console.error("Error : ", err);
        throw err;
    }
})()
*/