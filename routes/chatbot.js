const express=require('express');
const router=express.Router();
const chatbotController=require('../controllers/chatbotControllers');

router.post('/',chatbotController.getRecommendation);
module.exports=router;