import dotenv from 'dotenv';
// require('dotenv').config({path: './env'});
import express from 'express'
import connectDB from './db/index.js';
const app = express();
dotenv.config({
    path:'./.env'
})

connectDB();
/*
(async ()=> (){
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("error");
            throw error;
        })
        app.listen(process.env.PORT, ()=> {
            console.log('app is listening on port)
        })
    }catch(err){
        console.log("errer", err);
        throw err;
    }
})()
*/