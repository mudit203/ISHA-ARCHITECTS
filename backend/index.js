import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/generate', async (req, res) => {
  const { code, command } = req.body;

  const prompt = `
You are an AI developer assistant.
Here is the current code:
${code}

The user said: "${command}"
Update the code accordingly and return only updated code.
`;

  try {
    const result = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    res.json({ updatedCode: result.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});
