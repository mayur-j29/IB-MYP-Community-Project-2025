require('dotenv').config();
console.log("Loaded API key:", process.env.OPENAI_API_KEY);

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
    const userInput = req.body.message;
    const apiKey = process.env.OPENAI_API_KEY;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userInput }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            // API error (bad request, key issues, etc.)
            console.error('OpenAI API error:', data);
            return res.status(response.status).json({ error: data.error.message || 'OpenAI API error' });
        }

        res.json(data.choices[0].message.content);

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: error.message || "Unknown server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
