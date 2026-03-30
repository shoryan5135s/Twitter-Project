import User from '../models/user.js';
import CrudRepository from './crud_repo.js';



class UserRepository extends CrudRepository{

    constructor(){
        super(User);
    }


    async create(data){

        try {
            const user=await User.create(data);
            return user;



        } catch (error) {
            throw error;
        }


    }


}




export default UserRepository;

