import express from 'express'
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
import {PORT} from './config/serverconfig.js'

import {TweetRepository,HashtagRepository,UserRepository,LikeRepository} from './repository/index.js'

import LikeService from './services/like_service.js';
import apiRoutes from './Routes/index.js'
import connect from './db/database.js';

app.use('/api',apiRoutes)
app.listen(PORT,async()=>{
    console.log("server started");
    await connect();
    console.log('Mongodb connected');
    
    const userRepo=new UserRepository();
    const tweetRepo=new TweetRepository();


    const tweet=await tweetRepo.getAll(0,10);

    const user=await userRepo.create({
        name:'Johne Doe',
        email:'abcdef@gmail.com',
        password:'password'
    })


    const likeService=new LikeService();

    await likeService.toggleLike(tweet[1].id,'Tweet',user.id);
    


    
    
    
})