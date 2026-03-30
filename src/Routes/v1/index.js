import express from 'express';


import TweetController from '../../controller/tweet_controller.js'


const tweetcontroller=new TweetController();

const router =express.Router();


router.post('/tweets',tweetcontroller.createTweet);
 



export default router;












