import CommentRepository from "../repository/comment_repo.js";

import { TweetRepository } from "../repository/index.js";

class CommentService{
    constructor(){
        this.commentRepository=new CommentRepository();
        this.tweetRepository=new TweetRepository();
    }

    async createComment(modelId,modelType,userId,content){
        
        if(modelType=='Tweet'){

            var commentable=await this.tweetRepository.get(modelId);

 

        }
        else if(modelType=='Comment'){

            var commentable=await this.commentRepository.get(modelId);


        }

        else{
            throw new Error('Unknown model type');
        }

       const comment =await this.commentRepository.create({
            content:content,
            userId:userId,
            commentable: modelId,
            onModel: modelType,
            comment:[]


       });


       commentable.comments.push(comment)
       await commentable.save();

       return comment;




    }


}


export default CommentService;