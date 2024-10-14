// Gebruikersgegevens
let users = JSON.parse(localStorage.getItem('users')) || {
    'ABC123': { credits: 5 },
    'DEF456': { credits: 3 },
    'GHI789': { credits: 10 }
};

// Admin inloggegevens
const adminUsername = "peter@boxydesign.be";
const adminPassword = "@477Proximus";

// Admin login functie
function adminLogin() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    const message = document.getElementById('adminLoginMessage');

    if (username === adminUsername && password === adminPassword) {
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminContainer').style.display = 'block';
    } else {
        message.textContent = 'Ongeldige gebruikersnaam of wachtwoord.';
    }
}

// Functie om credits bij te werken
function updateCredits() {
    const licenseCode = document.getElementById('adminLicenseCode').value;
    const newCredits = parseInt(document.getElementById('newCredits').value);
    const message = document.getElementById('adminMessage');

    if (users[licenseCode]) {
        if (newCredits >= 0) {
            users[licenseCode].credits = newCredits;
            localStorage.setItem('users', JSON.stringify(users));
            message.textContent = `Credits voor licentie ${licenseCode} zijn bijgewerkt naar ${newCredits}.`;
        } else {
            message.textContent = 'Voer een geldig aantal credits in.';
        }
    } else {
        message.textContent = 'Ongeldige licentiecode.';
    }
}
