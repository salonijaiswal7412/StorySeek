const express=require('express');
const router=express.Router();
const chatbotController=require('../controllers/chatbotControllers');

router.post('/chat',chatbotController.getRecommendation);
module.exports=router;