
export class BankAccount {
    constructor(balance) {
        this._balance = balance;
        this._active = false;
    }

    get balance () {
        if (this._active === false) {
            throw new ValueError(`This account is closed!`);
        }
        return this._balance;
    }


    open() {
        if (this._active === true) {
            throw new ValueError(`This account is already open!`);
        } else {
            this._balance = 0;
            this._active = true;
        }
    }

    close() {
        if (this._active === false) {
            throw new ValueError(`This account was already closed`);
        }
        this._active = false;
    }

    deposit(value) {
        if (this._active === false) {
            throw new ValueError(`This account is closed`);
        }

        if (value < 0 ) {
            throw new ValueError(`You need to deposit a positive number amount`);
        } else {
            return this._balance += value;
        }
    }

    withdraw(value) {
        if (this._active === false) {
            throw new ValueError(`This Account is closed!`);
        }

        if (value < 0) {
            throw new ValueError(`You can not withdraw a negative amount!`);
        }

        if (value > this._balance) {
            throw new ValueError(`You do not have enough money in the account`);
        } else {
            return this._balance -= value;
        }
    }

}

export class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}

const account = new BankAccount();

