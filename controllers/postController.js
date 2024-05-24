const Post=require("../model/postsModel");
const mongoose=require("mongoose");

exports.createPost=async (req,res)=>{

    try{
        const {title,body}=req.body;

        const newPost=new Post({
            title,body
        })

        const createdPost=await newPost.save();

        res.status(200).json({
            success:true,
            data:createdPost,
            message:"Post Created Successfully"
        })
    }
    catch(err){
            res.status(400).json({
                success:false,
                data:"Error while Creating post",
                message:err.message
            })
    }
}


exports.getPosts=async (req,res)=>{

    try
    {
        const posts=await Post.find().populate("likes").populate("comments").exec();

        res.status(200).json({
            success:true,
            data:posts,
            message:"Post fetched Successfully"
        })

    }
    catch(err)
    {
        res.status(400).json({
            success:false,
            data:"Error while fetching post",
            message:err.message
        })
    }
}