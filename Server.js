const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing query params
app.use(express.json());

// Helper function to validate numeric inputs
function validateNumbers(req, res, next) {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: 'error',
            message: 'Both num1 and num2 must be valid numbers.'
        });
    }

    req.num1 = num1;
    req.num2 = num2;
    next();
}

// Addition endpoint
app.get('/add', validateNumbers, (req, res) => {
    const result = req.num1 + req.num2;
    res.json({ operation: 'addition', result });
});

// Subtraction endpoint
app.get('/subtract', validateNumbers, (req, res) => {
    const result = req.num1 - req.num2;
    res.json({ operation: 'subtraction', result });
});

// Multiplication endpoint
app.get('/multiply', validateNumbers, (req, res) => {
    const result = req.num1 * req.num2;
    res.json({ operation: 'multiplication', result });
});

// Division endpoint with error handling for division by zero
app.get('/divide', validateNumbers, (req, res) => {
    if (req.num2 === 0) {
        return res.status(400).json({
            status: 'error',
            message: 'Division by zero is not allowed.'
        });
    }
    const result = req.num1 / req.num2;
    res.json({ operation: 'division', result });
});

// Global error handling
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Endpoint not found. Please check your request.'
    });
});

// Start server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
