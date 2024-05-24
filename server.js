const express=require("express");
const app=express();

require("dotenv").config();

const Port=process.env.PORT || 3000;

app.use(express.json());

app.listen(Port,()=>{
    console.log("Server started at",Port);
});

const {dbConnect}=require("./config/dbConnect");
dbConnect();

const blogs=require("./routes/route");
app.use("/api/v1",blogs);

app.get("/",(req,res)=>{
    res.send("This is homepage ")
})