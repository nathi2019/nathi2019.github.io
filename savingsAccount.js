'use strict'


class SavingsAccount extends Account {
    /**  This constructor creates new saving account for the class SavingAccount
     *
     * @param number is the Account number (Saving account number )
     * @param interest  is the interest rate in percent  (%)
     */
    constructor(number, interest) {
        super(number);
        this._interest = interest;

    }

    /**
     * This getter returns the current interest rate of the Saving Account
     * @returns {interest} in percent
     */


    getInterest() {
        return this._interest;
    }

    /**
     * this is a setter of the interest
     * @param value
     */

    setInterest(value) {
        this._interest = value;
    }

    /**
     * this function calculates the interest of the saving account and
     * then deposits it
     */
    addInterest() {
        this.deposit(this._interest * this.getBalance() / 100);
    }

    /**
     * formats account information and
     * returns to the caller
     * @returns {string}
     */
    endOfMonth() {

        return 'Interest added SavingsAccount: ' + this.getNumber() + ' ' + this.getInterest() +
            ': balance: ' + this.getBalance() + ' Interest: ' + this._interest * this.getBalance() / 100;

    }


    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Saving Account " + this.getNumber() + ": balance " + this.getBalance();
    }
}