const mongoose=require('mongoose')
const {MONGODB_URI,APP_NAME}=require('../config/serverconfig')


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



module.exports=connnect;