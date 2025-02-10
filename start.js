const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server is running at https://xyron-monaco.onrender.com`);
});
