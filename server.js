const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser'); // Voeg body-parser toe
const app = express();
const PORT = process.env.PORT || 3000;

// Gebruik body-parser om JSON-gegevens te verwerken
app.use(bodyParser.json());

// Pad naar het credits.json-bestand
const creditsFilePath = path.join(__dirname, 'credits.json');

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
  fs.readFile(creditsFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Kon de gegevens niet ophalen.' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// API-route om credits bij te werken
app.post('/api/credits', (req, res) => {
  const { licenseCode, newCredits } = req.body;

  fs.readFile(creditsFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Kon de gegevens niet ophalen.' });
      return;
    }

    const users = JSON.parse(data);
    if (users[licenseCode]) {
      users[licenseCode].credits = newCredits;

      fs.writeFile
