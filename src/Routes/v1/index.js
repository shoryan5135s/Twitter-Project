import express from 'express';


import TweetController from '../../controller/tweet_controller.js'

import LikeController from '../../controller/like_controller.js';

const tweetcontroller=new TweetController();
const likeController=new LikeController();

const router =express.Router();


router.post('/tweets',tweetcontroller.createTweet);
router.post('/likes/toggle',likeController.toggleLike);



export default router;












