import mongoose from 'mongoose'
import { MONGODB_URI, APP_NAME } from '../config/serverconfig.js';


const connnect=async()=>{

    try {
        const response=await mongoose.connect(MONGODB_URI,{
            dbName:APP_NAME
        })
        console.log('Database connected successfully');
        return response
    } catch (error) {
        console.log(error);
        throw error; // 
        
        
    }


}


export default connnect;
