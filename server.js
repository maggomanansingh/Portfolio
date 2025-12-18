const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Explicitly serve index.html for root path (express.static does this, but being explicit is fine)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
