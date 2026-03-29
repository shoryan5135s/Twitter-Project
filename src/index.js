import express from 'express'
const app=express();
import {PORT} from './config/serverconfig.js'

import HashtagRepository from './repository/hashtag_repo.js';


import TweetService from './services/tweet_service.js'

import connect from './db/database.js';


app.listen(PORT,async()=>{
    console.log("server started");
    await connect();
    console.log('Mongodb connected');
    const repo=new TweetService();

    const tweet=repo.createTweet({
        content:'I am #EXCITED and going to have #fun #newjob #cpding'
    })

    // await repo.bulkcreate([
    //     {title:'javascript'},
    //     {title:'trending'},
    //     {title:'nodejs'},
    //     {title:'reactjs'},
    // ])

    
    
    
})