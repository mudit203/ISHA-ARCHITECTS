import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/generate', async (req, res) => {
  const { code, command } = req.body;

  const prompt = `
You are a coding assistant.
Given this code:\n${code}\n
And the following user instruction: "${command}",
modify the code and return only the updated result.
`;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json({ updatedCode: text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).send('Error generating code with Gemini');
  }
});

app.listen(5000, () => {
  console.log('✅ Gemini backend running at http://localhost:5000');
});
