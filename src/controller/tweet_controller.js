import TweetService from "../services/tweet_service.js";


class TweetController{

    constructor(){
        this.tweetService=new TweetService();
    }


     createTweet=async(req,res)=>{

        try {

            const response=await this.tweetService.createTweet(req.body);
            return res.status(201).json({

                data:response,
                err:{},
                message:'Successfully created a tweet',
                success:true                    



            })
        


        }

        catch(error){

                return res.status(500).json({
                    data:{},
                    err:error,
                    message:'Something went wrong in creating a tweet',
                    success:false
                })


        }




    }





}

export default TweetController;