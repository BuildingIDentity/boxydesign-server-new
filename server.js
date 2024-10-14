// server.js
const express = require('express');
const app = express();

// Heroku wijst een poort toe via de omgevingsvariabele "PORT"
// Als deze niet beschikbaar is (zoals lokaal), gebruiken we poort 5000
const PORT = process.env.PORT || 5000;

// Basis route voor een testbericht
app.get('/', (req, res) => {
  res.send('Welkom bij Boxydesign Server!');
});

// Luisteren naar de opgegeven poort
app.listen(PORT, () => {
  console.log(`Server draait op poort ${PORT}`);
});
