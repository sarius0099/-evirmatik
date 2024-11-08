const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/translate', async (req, res) => {
    const { text, targetLanguage } = req.body;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: "gpt-4",
                messages: [
                    { role: "system", content: "You are a translation assistant." },
                    { role: "user", content: `Translate the following text to ${targetLanguage}: ${text}` }
                ],
                max_tokens: 100
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const translatedText = response.data.choices[0].message.content;
        res.json({ translatedText });
    } catch (error) {
        console.error("Translation error:", error);
        res.status(500).json({ error: "Translation failed." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
