const express=require("express");
const router=express.Router();

const {createPost,getPosts}=require("../controllers/postController");
const {likePost,unlikePost}=require("../controllers/likeController");
const {commentPost}= require("../controllers/commentController");


router.post("/posts/create",createPost);
router.post("/posts/likes/like",likePost);
router.post("/posts/comment",commentPost);
router.get("/posts",getPosts);
router.post("/posts/likes/unlike",unlikePost);


module.exports=router;