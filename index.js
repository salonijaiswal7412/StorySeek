const express=require("express");
const dotenv=require("dotenv");
const path=require('path');

dotenv.config();
const app=express();

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/chat', require('./routes/chatbot'));

app.listen(3000,()=>{
    console.log("server running on port 3000");
})