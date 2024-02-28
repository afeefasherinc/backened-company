import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username:{
        required:true,
        unique:true,
        minlength:2

    },
    name:{
        required:true,
        unique:true,
        
    },
    email:{
        required:true,
        unique:true,
    },
    password:{
        required:true,
        unique:true,
        minlength:2
    }


})
const User=mongoose.model("User",UserSchema);
export default User