const express = require('express');
const request = require('request-promise');

const PORT = process.env.PORT || 5000;
const app = express();  
const key = "39ada2fa714a20c88ba24995f71a89c5";

app.use(express.json());

const returnScraperApiUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

// Welcome route
app.get('/', async (req, res) => {
    res.send('Welcome Julian!');
});

// Get product details


app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));