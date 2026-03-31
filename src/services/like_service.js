import LikeRepository from '../repository/like_repo.js';

import TweetRepository from '../repository/tweet_repository.js';


class LikeService{

    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository=new TweetRepository();
    }



    async toggleLike(modelId,modelType,userId){
           console.log(modelId,modelType,userId);
            let likeable;
            let isadded=false;
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

                console.log('exist->',exist);
                


                if(exist){
                    likeable.likes.pull(exist.id)
                    await likeable.save();
                    await this.likeRepository.delete(exist.id);
                    isadded=false;
                }
                else{
                    const newLike=await this.likeRepository.create({
                        user:userId,
                        onModel:modelType,
                        likeable:modelId
                    })

                    likeable.likes.push(newLike);
                    await likeable.save();

                    isadded=true;
                }

                
                return isadded;


            } 
            
            catch (error) {
                throw error;
            }
        }




}



export default LikeService;