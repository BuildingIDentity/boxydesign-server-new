curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
@477Proximus
sudo apt-get update
wsl --unregister Ubuntu
wsl --install
@477Proximus
peter@boxydesign.be
@477Proximus
?
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt update
peter
sudo apt install -y nodejs npm
sudo apt update
sudo apt install -y nodejs npm
node -v
npm -v
cd /mnt/c/Boxydesign-server
node server.js
ls
node ./server.js
file server.js
ls -la server.js
rm -r server.js
ls -la
node server.js
file server.js
nano server.js
node server.js
nano server.js
ls -la
node server.js
ls
sudo apt update
sudo apt install -y nodejs npm
sudo apt install -y python3
mkdir Boxydesign-server
cd Boxydesign-server
nano server.js
node server.js
sudo apt install tmux
tmux new -s mijnserver
wsl
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
mkdir my-server
cd my-server
nano server.js
node server.js
cd /mnt/c/Boxydesign-server
node server.js
ls
file server.js
rm -r server.js
nano server.js
file server.js
node server.js
nano start_server.sh
chmod +x start_server.sh
./start_server.sh
cd /mnt/c/Boxydesign-server
node server.js
cd /mnt/c/Boxydesign-server
node server.js
cd /mnt/c/Boxydesign-server
npm install -g pm2
pm2 start server.js
sudo npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup
cd /mnt/c/Boxydesign-server
npm init -y
npm install express jsonwebtoken bcryptjs
nano server.js
npm install express jsonwebtoken bcryptjs
node server.js
pm2 list
pm2 start server.js
cd /mnt/c/Boxydesign-server
pm2 start server.js
cd /mnt/c/Boxydesign-server
mkdir /mnt/c/Boxydesign-server
cd /mnt/c/Boxydesign-server
touch server.js
nano server.js
pm2 restart server.js
node server.js
cd /mnt/c/Boxydesign-server
nano server.js
node server.js
nano server.js
pm2 restart server.js
nano server.js
node server.js
cd /mnt/c/Boxydesign-server
ls
node server.js
cd /mnt/c/Boxydesign-server
ls
node server.js
npm install -g pm2
pm2 start server.js --name "boxydesign-server"
npm install -g pm2
cd /mnt/c/Boxydesign-server/
pm2 start server.js --name "boxydesign-server"
pm2 startup
sudo env PATH=$PATH:/home/gebruikersnaam/.nvm/versions/node/v18.x/bin pm2 startup systemd -u gebruikersnaam --hp /home/gebruikersnaam
whoami
sudo env PATH=$PATH:/home/curl/.nvm/versions/node/v18.x/bin pm2 startup systemd -u curl --hp /home/curl
cd /home/curl/.nvm/versions/node/
/mnt/c/Boxydesign-server
cd /mnt/c/Boxydesign-server
node server.js
cd /mnt/c/Boxydesign-server
node server.js
sudo pm2 startup
node server.js
pm2 list
sudo pm2 startup
pm2 save
pm2 start server.js --name "boxydesign-server"
pm2 unstartup
cd /mnt/c/Boxydesign-server
pm2 start server.js --name "boxydesign-server"
pm2 save
sudo pm2 startup
pm2 list
pm2 delete 0
cd /mnt/c/Boxydesign-server
pm2 start server.js --name "boxydesign-server"
pm2 save
rm -rf ~/.pm2
export PM2_HOME="/mnt/c/Boxydesign-server/pm2"
cd /mnt/c/Boxydesign-server
pm2 start server.js --name "boxydesign-server"
node server.js
boxydesign
C:\Boxydesign-server
c
cl
heroku login
git init
git add .
git commit -m "Initial commit voor Boxydesign AV tool"
heroku login
sudo snap install heroku --classic
git init
git add .
git commit -m "Initial commit voor Boxydesign AV tool"
heroku login
heroku create boxydesign-av-tool
git remote add heroku https://git.heroku.com/boxydesign-av-tool.git
git push heroku master
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
mmgit config --global user.email "peter@boxydesign.be"
git config --global user.name "BoxyDesign"
git commit -m "Initial commit voor Boxydesign AV tool"
git push heroku master
node 
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
function loadUsers() {     if (fs.existsSync(usersFilePath)) {
}
// Functie om gebruikersgegevens op te slaan in het bestand
function saveUsers(users) {
}
// Endpoints
// Endpoint om een nieuwe gebruiker aan te maken
app.post('/register', (req, res) => {
});
// Endpoint voor gebruikerslogin
app.post('/login', (req, res) => {
});
// Endpoint om licentie te verifiëren
app.post('/api/verifieer-licentie', (req, res) => {
});
// Endpoint om credits te controleren
app.get('/credits', (req, res) => {
});
// Endpoint om een credit af te trekken
app.post('/use-credit', (req, res) => {
});
// Server starten
app.listen(PORT, () => {
});
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
function loadUsers() {     if (fs.existsSync(usersFilePath)) {
}
// Functie om gebruikersgegevens op te slaan in het bestand
function saveUsers(users) {
}
// Endpoints
// Endpoint om een nieuwe gebruiker aan te maken
app.post('/register', (req, res) => {
});
// Endpoint voor gebruikerslogin
app.post('/login', (req, res) => {
});
// Endpoint om licentie te verifiëren
app.post('/api/verifieer-licentie', (req, res) => {
});
// Endpoint om credits te controleren
app.get('/credits', (req, res) => {
});
// Endpoint om een credit af te trekken
app.post('/use-credit', (req, res) => {
});
// Server starten
app.listen(PORT, () => {
});
server
boxydesign server
c
c:
serveo
jserver
wsl
local host
pm2 logs
pm2 -v
pm2 kill
pm2 start server.js
pm2 logs
cd C:/Boxydesign-server
npm install
cd C
cd /path/to/Boxydesign-server
rm -r credits
cd /path/to/Boxydesign-server
cd /mnt/c/Boxydesign-server
rm -r credits
cd /mnt/c/Boxydesign-server
nano credits.js
npm install
cd C:/Boxydesign-server
ls
rm -r credits
nano credits.js
node server.js
cd /mnt/c/Boxydesign-server
heroku git:remote -a boxydesign-ct12a03ca429
git remote -v
heroku  https://git.heroku.com/boxydesign-ct12a03ca429.git (fetch)
heroku  https://git.heroku.com/boxydesign-ct12a03ca429.git (push)
sudo snap install heroku --classic
cd /mnt/c/Boxydesign-server
git init
heroku git:remote -a boxydesign-ct12a03ca429
git remote -v
git add .
git commit -m "Initial Heroku deployment"
git push heroku master
git init
heroku git:remote -a boxydesign
git add .
git commit -m "Initial Heroku deployment"
git push heroku master
git status
git init
git remote -v
heroku git:remote -a boxydesign
sudo snap install heroku --classic
curl https://cli-assets.heroku.com/install.sh | sh
heroku --version
heroku login
heroku git:remote -a boxydesign
git push heroku master
https://boxydesign-ct12a03ca429.herokuapp.com/
heroku logs --tail
git add server.js
git commit -m "Updated port configuration for Heroku deployment"
git push heroku master
git remote -v
git remote remove heroku
heroku git:remote -a boxydesign
git add server.js
git commit -m "Updated port configuration for Heroku deployment"
git push heroku master
git add server.js
git commit -m "Updated port configuration for Heroku deployment"
git push heroku master
heroku logs --tail
git add server.js
git commit -m "Updated port configuration for Heroku deployment"
git push heroku master
git pull heroku master
heroku logs --tail
git add package.json
git commit -m "Updated package.json with start script for Heroku"
git push heroku master
git add package.json
git commit -m "Updated package.json with start script for Heroku"
git push heroku master
git pull heroku master
git push heroku master --force
heroku buildpacks:set heroku/nodejs
heroku buildpacks
heroku buildpacks:remove heroku/nodejs
heroku buildpacks:set heroku/nodejs
git push heroku master
git add .
git commit -m "Package.json naar root verplaatst"
git add .
git commit -m "Package.json naar root verplaatst"
git add .
git commit -m "Package.json naar root verplaatst"
git push heroku master
git pull
git push heroku master
git pull heroku master
git add .
git commit -m "Conflicts resolved"
git push heroku master
git init
git add .
git commit -m "Initial commit"
pms restart server.js
pm2 restart server.js
pm2 logs
heroku logs --tail
git add .
git commit -m "Update start script in package.json"
git push heroku master
git add .
git commit -m "Update start script in package.json"
git push heroku master
git pull heroku master
git pull heroku master --rebase
rm package-lock.json
npm install
git add package-lock.json
git rebase --continue
git commit -m "Opgeloste conflicten en wijzigingen"
git push heroku master
git pull heroku master
git pull heroku master --rebase
git add .
git commit -m "Voeg wijzigingen toe voor rebase"
git pull heroku master --rebase
git status
git rebase --continue
git push heroku master --force
git rebase --continue
git push heroku master --force
cd boxydesign-server-new
mkdir admin
nano admin/admin.html
nano server.js
