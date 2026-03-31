import Like from '../models/like.js';
import CrudRepository from './crud_repo.js';



class LikeRepository extends CrudRepository{

    constructor(){
        super(Like);
    }

    async findByLikeableId(data){

        try {
            const like=await Like.findOne(data);
            return like;


        } catch (error) {
            throw error;
        }


    }

    async delete(id){

        try {
           const response= await Like.findByIdAndDelete(id);

           return response
        } catch (error) {
            throw error;
        }   
    }

}




export default LikeRepository;

