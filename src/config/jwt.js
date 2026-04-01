import Jwt from 'passport-jwt';
import User from '../models/user.js';

const JwtStrategy = Jwt.Strategy; 
const ExtractJwt = Jwt.ExtractJwt;


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter_secret'

}


export const passportAuth = (passport)=>{

            console.log("inside stratergy");


    passport.use(new JwtStrategy(opts,async (jwt_payload,done)=>{

        console.log("inside stratergy");
        

        const user=await User.findById(jwt_payload.id);

        if(!user){
            done(null,false);
        }
        else{
            done(null,user);
        }



    }))
}