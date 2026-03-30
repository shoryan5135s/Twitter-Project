import Like from '../models/like.js';
import CrudRepository from './crud_repo.js';



class LikeRepository extends CrudRepository{

    constructor(){
        super(Like);
    }

    async findByLikeableId(data){

        try {
            const like=await Like.findOne(data);


        } catch (error) {
            throw error;
        }


    }
}




export default LikeRepository;

