const express=require('express');
const connect=require('./db/database.js')
const app=express();
const {PORT}=require('./config/serverconfig.js')

const HashtagRepository=require('./repository/hashtag_repo.js')


const TweetService=require('./services/tweet_service.js')


app.listen(PORT,async()=>{
    console.log("server started");
    await connect();
    console.log('Mongodb connected');
    const repo=new TweetService();

    const tweet=repo.createTweet({
        content:'I am #excited and going to have #fun #newjob #cpding'
    })

    // await repo.bulkcreate([
    //     {title:'javascript'},
    //     {title:'trending'},
    //     {title:'nodejs'},
    //     {title:'reactjs'},
    // ])

    
    
    
})