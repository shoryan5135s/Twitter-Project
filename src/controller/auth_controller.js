import UserService from "../services/user_service.js";


class UserController{

 constructor(){
    this.userService=new UserService();



 }

     create=async (req,res)=>{

        try {
            
            const response=await this.userService.signup(req.body);
            

            return  res.status(201).json({
                message:'Successfully craeted a user',
                data:response,
                err:{},
                success:true


            })



            
        } 
        
        catch (error) {
            
            console.log(error);

            return   res.status(500).json({
                message:"Something went wrong while creating the user",
                success:false,
                data:{},
                err:error




            })
            



        }





     }    




     login = async(req,res)=>{

        try {
            console.log(req.body);
            
            const response=await this.userService.login(req.body);

           
            

           
              return  res.status(200).json({
                    message:'Successfully logged in the user',
                    data:response,
                    err:{},
                    success:true
                })
            

            
        } catch (error) {
            console.log(error);

           return res.status(500).json({
                message:'Something went wrong while logging in the user',
                success:false,
                data:{},
                err:error



            })
            
        }



     }



}



export default UserController