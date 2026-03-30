import LikeRepository from '../repository/like_repo.js';

import TweetRepository from '../repository/tweet_repository.js';


class LikeService{

    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository=new TweetRepository();
    }



    async toggleLike(modelId,modelType,userId){
            let likeable;
            let isremoved;

        try {
                
                if(modelType=='Tweet'){

                    likeable=await this.tweetRepository.get(modelId)
                    
                    likeable=await likeable.populate('likes');

                   

                }

                else if(modelType=='Comment'){

                    


                }
                else{


                    throw new Error('Unknown model type');  

                }

                const exist=await this.likeRepository.findByLikeableId({
                    user:userId,
                    onModel:modelType,
                    likeable:modelId

                })


                if(exist){
                    likeable.likes.pull(exist.id)
                    await likeable.save();
                    await exist.remove();
                    isremoved=true;
                }
                else{
                    const newLike=await this.likeRepository.create({
                        user:userId,
                        onModel:modelType,
                        likeable:modelId
                    })

                    likeable.likes.push(newLike.id);
                    await likeable.save();

                    isremoved=false;
                }

                
                return isremoved;


            } 
            
            catch (error) {
                throw error;
            }
        }




}



export default LikeService;