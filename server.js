const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const CreditSystem = require('./credits');

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

// API-route om credits voor een specifieke gebruiker op te halen
app.get('/api/credits/:userId', async (req, res) => {
  const userId = req.params.userId;
  const creditSystem = new CreditSystem(userId);

  try {
    const credits = await creditSystem.checkCredits();
    res.json({ userId: userId, credits: credits });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching credits', error: error.message });
  }
});

// API-route om credits toe te voegen
app.post('/api/credits/:userId/add', async (req, res) => {
  const userId = req.params.userId;
  const amount = req.body.amount;

  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ message: 'Invalid credit amount' });
  }

  const creditSystem = new CreditSystem(userId);

  try {
    await creditSystem.addCredits(amount);
    res.json({ message: `Added ${amount} credits to user ${userId}.` });
  } catch (error) {
    res.status(500).json({ message: 'Error adding credits', error: error.message });
  }
});

// API-route om een credit te gebruiken
app.post('/api/credits/:userId/use', async (req, res) => {
  const userId = req.params.userId
