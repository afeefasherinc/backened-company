import express from "express"
import User from "../Model/UserModel"
i

export const Userregister=()=>{
    try{
        const{username,email,name,password}=req.body
        if(!username||!email||!name||!password){
            return res.json.status(401)('all fields are mandatory')
        }else{
            
            const newUser=new User({username,email,name,password})
            const savedUser=newUser.save()
            console.log('successfully inserted');
        }
    }catch{

        return res.json.status(201)('err occured')
    }
}
export const Userlogin=async()=>{
    try{
        const {username,password}=req.body
        if(!username||!password){
            return res.json.status(401)('all fields are mandatory')
        }else{
            const newlogin=await User.findById(id)
            const savedlogin=newlogin.save()
            console.log('successfully inserted');
        }
    }catch{

        return res.json.status(201)('err occured')
    }
}
    
