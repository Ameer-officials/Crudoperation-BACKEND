import mongoose from "mongoose";

 export const connectToMongo = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/crudDB").then(

        console.log("connection to mongo sucessfully")
    ).catch(err =>{
        console.log(err);
    })
     
}