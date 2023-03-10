import mongoose from "mongoose";

const memberSchmea = new mongoose.Schema({
    email:{
        type : String,
        unique : true
    
},
    password : {
        type : String,
    },
    id : {
        type : String,
        unique : true 
    }

})

export const Member = mongoose.model("Member" , memberSchmea)