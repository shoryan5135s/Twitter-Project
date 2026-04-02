import express from 'express';


import TweetController from '../../controller/tweet_controller.js'

import LikeController from '../../controller/like_controller.js';

import CommentController from '../../controller/comment_controller.js';

import UserController from '../../controller/auth_controller.js';

import { authenticate } from '../../middleware/authenticate.js';
import { upload } from '../../config/file_upload_s3_config.js';

const tweetcontroller=new TweetController();
const likeController=new LikeController();
const commentController=new CommentController();
const userController=new UserController();
const router =express.Router();


router.post('/tweets',upload.single('image'),tweetcontroller.createTweet);
router.post('/likes/toggle',likeController.toggleLike);

router.post('/comment',commentController.createComment);

router.post('/signup',userController.create);

router.post('/login',userController.login);


export default router;












