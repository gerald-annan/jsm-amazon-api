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
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const api_key = key;

    try {
        const productTerm = productId.replace("%", "+");
        console.log(productTerm);
        // const response = await request(`${returnScraperApiUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);
        const response = await request(`${returnScraperApiUrl(api_key)}&url=https://www.amazon.com/s?k=${productTerm}`)
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

// Get product reviews


app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));