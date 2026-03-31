import UserRepository from '../repository/user_repository.js'

class UserService{

    constructor(){
        this.userRepository=new UserRepository();
    }


    async signup(data){

        try  {
            
           const response=await this.userRepository.create(data);

           return response;


        } catch (error) {
            
            throw error;


        }




    }



}



export default UserService;