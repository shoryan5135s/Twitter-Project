import CommentService from "../services/comment_service.js";



class CommentController{

    
    constructor(){
        this.commentService=new CommentService();
    }

    createComment=async(req,res)=>{

        try {

            const response=await this.commentService.createComment(req.query.modelId,req.query.modelType,req.body.userId,req.body.content);


            return res.status(200).json({
                message:'Request Processed Successfully',
                data:response,
                success:true,
                error:{}

            })


            
        } catch (error) {
            
            console.log(error);
            return res.status(500).json({

                data:{},
                err:error.message,
                message:'Internal Server Error',
                success:false



            })
            


        }




    }


}


export default CommentController;