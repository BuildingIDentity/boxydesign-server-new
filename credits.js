const axios = require('axios');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = "BuildingIDentity/boxydesign-server-new"; // Pas aan naar jouw repo-naam
const FILE_PATH = "main/credits.json"; // Pad naar jouw credits.json bestand

class CreditSystem {
    constructor(userId) {
        this.userId = userId;
        this.credits = 0;
    }

    // Haal credits op uit GitHub
    async fetchCredits() {
        try {
            const url = `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`;
            const response = await axios.get(url, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3.raw'
                }
            });
            const data = JSON.parse(response.data);
            this.credits = data[this.userId]?.credits || 0;
            return this.credits;
        } catch (error) {
            console.error('Error fetching credits:', error.response ? error.response.status : error.message);
            return null;
        }
    }

    // Gebruik een credit en update GitHub
    async useCredit() {
        await this.fetchCredits();
        if (this.credits > 0) {
            this.credits--;
            console.log(`Credits remaining: ${this.credits}`);
            await this.updateCredits();
            return true;
        } else {
            console.log("No more credits left.");
            return false;
        }
    }

    // Voeg credits toe en update GitHub
    async addCredits(amount) {
        await this.fetchCredits();
        this.credits += amount;
        console.log(`Credits added. Total: ${this.credits}`);
        await this.updateCredits();
    }

    // Controleer huidige aantal credits
    async checkCredits() {
        await this.fetchCredits();
        return this.credits;
    }

    // Update de credits in GitHub
    async updateCredits() {
        try {
            const url = `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`;
            const currentData = await axios.get(url, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`
                }
            });
            const sha = currentData.data.sha;
            const data = JSON.parse(Buffer.from(currentData.data.content, 'base64').toString());
            data[this.userId] = { credits: this.credits };

            const payload = {
                message: 'Update credits',
                content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'),
                sha: sha
            };

            await axios.put(url, payload, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Credits successfully updated.');
        } catch (error) {
            console.error('Error updating credits:', error.response ? error.response.status : error.message);
        }
    }
}

module.exports = CreditSystem;
