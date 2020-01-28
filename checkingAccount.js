/* jshint esversion: 6 */
/*global assert */
'use strict';

/**
 * This is a checking Account class . It extends Account class
 * this class inherits the Account class the uniques attribute of this
 * class is the overdraft Limit
 */
class CheckingAccount extends Account {


    /**
     * constructor to initialize the CheckingAccount class
     * @param number is the account number
     * @param overDraftLimit - is the overdraft that is allowed
     */
    constructor(number, overDraftLimit) {
        super(number);
        this._overDraftLimit = -1 * overDraftLimit;
    }

    /**
     * this function is overridden for the fact that overdraft is allowed
     * in this account type and therefore it implements its own of version of
     * withdraw.
     * @param amount
     */
    withdraw(amount) {
        let currentBalance = this.getBalance();

        if (currentBalance <= 0) {
            if ((currentBalance - amount) < this._overDraftLimit) {
                throw ("Over Draft Limit Exceeded !!");
            }

        }
        this._balance -= amount;

    }

    /**
     * formats checking account information
     * @returns {string}
     */

    endOfMonth() {
        let status = '';
        if (this.getBalance() < 0) {
            status = 'Warning, low balance';
        }
        return status + 'CheckingAccount ' + this.getNumber() + ': ' + this.getBalance() + ': Overdraft limit: ' + this._overDraftLimit;

    }

    /**
     * overridden toString
     * @returns {string}
     */

    toString() {
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance();
    }

}