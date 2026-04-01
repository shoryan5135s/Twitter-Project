import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema({

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password:{
        type: String,
        required: true

    },

    name:{
        type: String,
        
        
    }










},{timestamps:true})



userSchema.pre('save',function(next){

    const user=this; // this refers to the user document being saved
    
    const SALT=bcrypt.genSaltSync(9);// what is salt-> a random string added to the password before hashing to make it more secure

    const encryptedPassword=bcrypt.hashSync(user.password,SALT);



    user.password=encryptedPassword;

})


userSchema.methods.comparePassword= function compare(password){
    return bcrypt.compareSync(password,this.password);
}


userSchema.methods.genJWT = function generate(){
        return jwt.sign({
            id: this._id,
            email: this.email,
            
        },
    
        'twitter_secret',
        {expiresIn:'1h'}
    )
}


const User=mongoose.model('User',userSchema);



export default User;