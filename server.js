// Voeg deze regel toe om credits.js te importeren
const CreditSystem = require('./credits');  
let userCredits = new CreditSystem(5);  // Begin met 5 credits

// server.js

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const PORT = 5000;
const SECRET_KEY = 'geheim123'; // Gebruik een sterk geheim om JWT te ondertekenen
const usersFilePath = path.join(__dirname, 'users.json');

// Functie om gebruikersgegevens op te halen uit het bestand
function loadUsers() {
    if (fs.existsSync(usersFilePath)) {
        const data = fs.readFileSync(usersFilePath);
        return JSON.parse(data);
    }
    return {};
}

// Functie om gebruikersgegevens op te slaan in het bestand
function saveUsers(users) {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

// Endpoints

// Endpoint om een nieuwe gebruiker aan te maken
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    let users = loadUsers();

    if (users[username]) {
        return res.status(400).json({ message: 'Gebruiker bestaat al' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    users[username] = { password: hashedPassword, credits: 5 }; // Standaard 5 credits
    saveUsers(users);

    res.status(201).json({ message: 'Gebruiker aangemaakt' });
});

// Endpoint voor gebruikerslogin
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();

    const user = users[username];
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Ongeldige inloggegevens' });
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token, credits: user.credits });
});

// Endpoint om licentie te verifiëren
app.post('/api/verifieer-licentie', (req, res) => {
    const { licentiecode } = req.body;
    const users = loadUsers();

    if (users[licentiecode]) {
        res.json({ message: `Licentie geldig. Credits over: ${users[licentiecode].credits}` });
    } else {
        res.status(404).json({ message: 'Ongeldige licentiecode.' });
    }
});

// Endpoint om credits te controleren
app.get('/credits', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Token vereist' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const users = loadUsers();
        const user = users[decoded.username];

        if (!user) {
            return res.status(404).json({ message: 'Gebruiker niet gevonden' });
        }

        res.json({ credits: user.credits });
    } catch (err) {
        res.status(401).json({ message: 'Ongeldige token' });
    }
});

// Endpoint om een credit af te trekken
app.post('/use-credit', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Token vereist' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        let users = loadUsers();
        const user = users[decoded.username];

        if (!user) {
            return res.status(404).json({ message: 'Gebruiker niet gevonden' });
        }

        if (user.credits > 0) {
            user.credits -= 1;
            saveUsers(users);
            res.json({ message: 'Credit gebruikt', credits: user.credits });
        } else {
            res.status(400).json({ message: 'Geen credits meer beschikbaar' });
        }
    } catch (err) {
        res.status(401).json({ message: 'Ongeldige token' });
    }
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
