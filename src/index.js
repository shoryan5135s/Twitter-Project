const express=require('express');
const connect=require('./db/database.js')
const app=express();
const {PORT}=require('./config/serverconfig.js')

const tweetRepo=require('./repository/tweet_repository.js')
const Comment=require('./models/comment.js')

const startServer = async () => {
  try {
    await connect(); 
    console.log("Database connected");

    app.listen(PORT, async () => {
      console.log(`Server is running at ${PORT}`);

      const tweet=new tweetRepo();
    //   const response=await tweet.create({
    //     content:'This is my first tweet',
    //     UserEmail:'shoryan@gmail.com'
    //   })
    //   const comment=await Comment.create({
    //     content:'This is my first comment',
    
    //     })

    // console.log(response);
    // response.comment.push(comment)

    // console.log(response);
    
    
    // response.save(); 
    // console.log(response);
    
    // const response=await tweet.getWithComment('69bd95353f37f3584c4dfea0')
    // console.log(response);
    


    // const response=await tweet.getAll(2,5) // gives the teets from 2 to 5
    // console.log(response);
    


     });

  } catch (error) {
    console.log("Error:", error);
  }
};

startServer();