import express from 'express';


import TweetController from '../../controller/tweet_controller.js'

import LikeController from '../../controller/like_controller.js';

import CommentController from '../../controller/comment_controller.js';

import UserController from '../../controller/auth_controller.js';

const tweetcontroller=new TweetController();
const likeController=new LikeController();
const commentController=new CommentController();
const userController=new UserController();
const router =express.Router();


router.post('/tweets',tweetcontroller.createTweet);
router.post('/likes/toggle',likeController.toggleLike);

router.post('/comment',commentController.createComment);

router.post('/signup',userController.create);



export default router;












