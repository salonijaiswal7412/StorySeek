const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();
const api= "AIzaSyDmGb_l7tmWqoF8LiU5jLfODo9-MJz6RgQ";
const genAI = new GoogleGenerativeAI(api);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

exports.getRecommendation = async (req, res) => {
  const { message } = req.body;

  try {
    const prompt = `Based on the following input, recommend some books: ${message}`;
    const result = await model.generateContent(prompt);

    console.log('Full API Response:', result);

    if (result && result.response && typeof result.response.text === 'function') {
      try {
        // Attempt to get the text from the function
        const recommendations = await result.response.text(); // Await if the function is asynchronous
        res.json({ recommendations });
      } catch (textError) {
        console.error('Error calling text function:', textError.message);
        res.status(500).json({ message: 'Error extracting recommendations', error: textError.message });
      }
    } else {
      res.status(500).json({ message: 'Unexpected response structure' });
    }
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({ message: 'Error fetching recommendations', error: error.message });
  }
};
