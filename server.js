const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();
const PORT = process.env.PORT || 3000;

// Gebruik body-parser om JSON-gegevens te verwerken
app.use(bodyParser.json());

// Configureer lowdb
const adapter = new FileSync('credits.json');
const db = low(adapter);

// Stel de standaardwaarden in als credits.json leeg is
db.defaults({ users: {} }).write();

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

// API-route om credits op te halen
app.get('/api/credits', (req, res) => {
  const users = db.get('users').value();
  res.json(users);
});

// API-route om credits bij te werken
app.post('/api/credits', (req, res) => {
  const { licenseCode, newCredits } = req.body;

  if (db.has(`users.${licenseCode}`).value()) {
    db.set(`users.${licenseCode}.credits`, newCredits).write();
    res.json({ success: true, message: 'Credits bijgewerkt.' });
  } else {
    res.status(400).json({ message: 'Ongeldige licentiecode.' });
  }
});

// Start de server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
