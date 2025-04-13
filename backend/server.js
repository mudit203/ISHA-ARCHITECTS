const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

app.post("/generate", async (req, res) => {
  const { code, command } = req.body;

  const prompt = `
You are an AI developer assistant.
Here is the current code:
${code}

The user said: "${command}"
Update the code accordingly and return only updated code.
`;

  try {
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ updatedCode: result.data.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
  }
});

app.listen(5000, () => console.log("🧠 AI server running on http://localhost:5000"));
