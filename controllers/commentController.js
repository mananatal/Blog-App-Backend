const Comment=require("../model/commentModel");
const Post=require("../model/postsModel")
const mongoose=require("mongoose");

exports.commentPost=async (req,res)=>{
    try
    {
        const {post,user,comment}=req.body;

        const com=new Comment({
            post,user,comment
        });

        const commented=await com.save();

        const updatedPost=  await Post.findByIdAndUpdate(post,{$push:{comments:commented._id}},{new:true}).populate("comments").exec(); 

        res.status(200).json({
            success:true,
            data:updatedPost,
            message:"Post Commented Successfully"
        });

        
    }
    catch(error)
    {
        res.status(400).json({
            success:false,
            data:"Error while Comenting on post",
            message:err.message
        })
    }
}