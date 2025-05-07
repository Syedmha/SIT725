const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to find square of a number
app.get('/square', (req, res) => {
  const num1 = parseFloat(req.query.num1);

  if (isNaN(num1)) {
    return res.status(400).json({ error: 'Please provide two valid numbers' });
  }

  const result = num1 * num1;
  res.json({ result });
});

//POST endpoint for other operations (e.g., subtract, multiply, divide)
app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Inputs must be numbers' });
  }

  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
