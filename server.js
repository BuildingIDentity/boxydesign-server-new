const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Route voor de hoofdpagina
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route voor credits
app.get('/credits', (req, res) => {
  res.sendFile(path.join(__dirname, 'views_credits.html'));
});

// Route voor quorum
app.get('/quorum', (req, res) => {
  res.sendFile(path.join(__dirname, 'views_quorum.html'));
});

// Route voor stemmen
app.get('/stemmen', (req, res) => {
  res.sendFile(path.join(__dirname, 'views_stemmen.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
