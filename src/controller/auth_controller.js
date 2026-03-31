import UserService from "../services/user_service.js";


class UserController{

 constructor(){
    this.userService=new UserService();



 }

     create=async (req,res)=>{

        try {
            console.log(req.body);
            
            const response=await this.userService.signup(req.body);
            console.log(response);
            

            res.status(201).json({
                message:'Successfully craeted a user',
                data:response,
                err:{},
                success:true


            })



            
        } 
        
        catch (error) {
            
            console.log(error);

            res.status(500).json({
                message:"Something went wrong while creating the user",
                success:false,
                data:{},
                err:error




            })
            



        }





     }    



}



export default UserController