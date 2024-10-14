class CreditSystem {
    constructor(initialCredits) {
        this.credits = initialCredits;
    }

    useCredit() {
        if (this.credits > 0) {
            this.credits--;
            console.log(`Credits remaining: ${this.credits}`);
            return true;
        } else {
            console.log("No more credits left.");
            return false;
        }
    }

    addCredits(amount) {
        this.credits += amount;
        console.log(`Credits added. Total: ${this.credits}`);
    }

    checkCredits() {
        return this.credits;
    }
}

module.exports = CreditSystem;
