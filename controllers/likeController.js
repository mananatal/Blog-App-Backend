const Like=require("../model/likeModel");
const Post=require("../model/postsModel")
const mongoose=require("mongoose");

exports.likePost=async (req,res)=>{
    try
    {
        const {post,user}=req.body;

        const like=new Like({
            post,user
        });

        const liked=await like.save();

        const updatedPost=  await Post.findByIdAndUpdate(post,{$push:{likes:liked._id}},{new:true}).populate("likes").exec(); 

        res.status(200).json({
            success:true,
            data:updatedPost,
            message:"Post liked Successfully"
        });

        
    }
    catch(error)
    {
        res.status(400).json({
            success:false,
            data:"Error while liking post",
            message:err.message
        })
    }
}

exports.unlikePost=async (req,res)=>{

    try
    {
        const {post,like}=req.body;

        const unliked=await Like.findOneAndDelete({_id:like,post:post});

        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:unliked._id}},{new:true});

        res.status(200).json({
            success:true,
            data:updatedPost,
            message:"Post unliked Successfully"
        });
    }
    catch(err)
    {
        res.status(400).json({
            success:false,
            data:"Error while unliking post",
            message:err.message
        }) 
    }
}