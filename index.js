const express=require("express");
const dotenv=require("dotenv");
const axios =require('axios');

dotenv.config();
const app=express();

app.use(express.json());


app.listen(3000,()=>{
    console.log("server running on port 3000");
})