import LikeService from '../services/like_service.js';

class LikeController{


    constructor(){

        this.likeService=new LikeService();
    }


    toggleLike=async(req,res)=>{
        try {
            

            const response=await this.likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);

            console.log(response);
            
            
            return res.status(200).json({
                message:'Request Processed Successfully',
                data:response,
                success:true,
                error:{}




            })


        } 
        
        
        catch (error) {
            
                console.log(error);

                return res.status(500).json({
                    message:'Internal Server Error',
                    err:error.message,
                    data:{},
                    success:false

                })
                

        }
    
    
    
    }







}



export default LikeController