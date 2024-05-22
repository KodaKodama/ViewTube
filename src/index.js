import dotenv from 'dotenv';
// require('dotenv').config({path: './env'});
import {app} from './app.js'
import connectDB from './db/index.js';
dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`app is running on: ${process.env.PORT}`);
    })
})
.catch((err)=> {
    console.log("Mongo db connection failed", err);
})
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
