import TweetService from "../services/tweet_service.js";





class TweetController{

    constructor(){
        this.tweetService=new TweetService();
    }


     createTweet=async(req,res)=>{
            console.log(req.file);
            
        try {

            const data={
                ...req.body,
                image:req.file? req.file.location:''
            }
           
            console.log("data",data);
            
            const response=await this.tweetService.createTweet(data);

            console.log(response);
            
            return res.status(201).json({

                data:response,
                err:{},
                message:'Successfully created a tweet',
                success:true                    



            })
        


        }

        catch(error){
                console.log(error);
                
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