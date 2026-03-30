import mongoose from 'mongoose'

const likeSchema= new mongoose.Schema({

   onModel:{

    type: String,
    required:true,
    enum:['Tweet','Comment']




   },

   // agr onmodel tweet hua to id tweet wali hogi agr onmodel comment hua to id comment wali hogi like ki
   likeable:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    refPath:'onModel'


   },

   user:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true


   }




},{timestamps:true})



const Like=mongoose.model('Like',likeSchema);


export default Like;