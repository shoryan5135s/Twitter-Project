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


    async login(data){

        try {
            
            const response=await this.userRepository.findByEmail(data.email);

            console.log(response);
            

            if(!response){
                throw new Error('User not found');
            }

            const isPasswordValid=await response.comparePassword(data.password);

            console.log(isPasswordValid);
            

            if(!isPasswordValid){
                throw new Error('Invalid password');
            }

            const token=response.genJWT();

            console.log(token);
            

            return token;




        } catch (error) {
            throw error;
        }




    }



}



export default UserService;