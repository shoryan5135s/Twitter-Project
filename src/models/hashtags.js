const mongoose=require('mongoose')
const Tweet=require('./tweet')

const hashtagsSchema=new mongoose.Schema({

    title:{//name of the hashtag
    type: String,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    trim: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
   




},{timestamps:true})



const Hashtag=mongoose.model('Hashtag',hashtagsSchema);


module.exports=Hashtag 