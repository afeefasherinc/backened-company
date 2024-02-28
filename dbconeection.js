import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const connect=()=>{
    try{
        const Connectdb=new mongoose.connect(connect.env.CONNECTION_STRING)
        console.log('db connected',db);
    }catch(err){
        console.log('err occured');
    }
}
export default Connectdb