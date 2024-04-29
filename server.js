const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // 'public' is the directory where your HTML files are located

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html')); // Serve your HTML file on the root route
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
