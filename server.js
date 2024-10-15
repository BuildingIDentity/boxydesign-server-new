const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// Voeg een route toe voor de root URL
app.get('/', (req, res) => {
    res.send('Welkom bij Boxydesign server!');
});

app.listen(PORT, () => {
    console.log(`Server draait op poort ${PORT}`);
});
