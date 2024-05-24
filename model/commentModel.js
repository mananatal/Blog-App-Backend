const mongoose=require("mongoose");

const commentModel= mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("Comment",commentModel);