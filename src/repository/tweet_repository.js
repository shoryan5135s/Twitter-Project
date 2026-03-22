const Tweet=require('../models/tweet.js');


class TweetRepository{

    


    async create({content,email}){

        try {
            
            const response=await Tweet.create({
                content:content,
                email:email
            })

            return response
        } catch (error) {
            console.log(error);
            throw error;
            
        }

    }

    async get(tweetId){
        try {
            
            const response=await Tweet.findById(tweetId);
            return response


        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }




    async getWithComment(tweetId){
         try {
            
            const response=await Tweet.findById(tweetId).populate('comment');
            return response


        } catch (error) {
            console.log(error);
            throw error;
            
        }

    }



    async update(tweetId,data){

        try {
            
            const response=await Tweet.findByIdAndUpdate(tweetId,data,{new:true});
            return response;


        } catch (error) {
            throw error;
        }


    }

    async destroy(tweetId){
        try {
            const response=await Tweet.findByIdAndDelete(tweetId)

            return response;
        } catch (error) {
            throw error
        }
    }



    async getAll(offset,limit){

        try {
            const response=await Tweet.find().skip(offset).limit(limit)  //-> use for pagination



            return response;
        } catch (error) {
            throw error;
        }


    }




}



module.exports=TweetRepository