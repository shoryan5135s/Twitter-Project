const mongoose=require('mongoose')
const Tweet=require('./tweet')

const hashtagsSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    tweetCount:{
        type:Number,
        required:true,
        default:0


    },

    tweets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'

    }]




},{timestamps:true})



const Hashtag=mongoose.model('Hashtag',hashtagsSchema);


module.exports=Hashtag