/* jshint esversion: 6 */
/*global assert */

(function() {
    "use strict";


    const listOfAccounts =[];


    /**
     * Now lets create two saving accounts with interest rate 2%
     * @type {SavingsAccount}
     */
     const savingsAccount = new SavingsAccount(1,2);
    /**
     * Deposit 100$
     * @type {SavingsAccount}
     */
    savingsAccount.deposit(100);
    /**
     * calculate interest
     * @type {SavingsAccount}
     * we expect the total balance to be 100+100*2/100 = $102
     */
    savingsAccount.addInterest();
    /**
     * now lets us withdraw some money $40
     * the expected balance is $62
     */
    savingsAccount.withdraw(40);
    /**
     * Moch, Chai test for the Saving Account
     */
    describe("Saving Account Test", function() {
        context("Account number: 1, Initial deposit $100, Interest rate 2%, Interest added! and $40 withdrawed ", function() {

            it("The expected Balance is $62", function() {
                assert.equal(savingsAccount.getBalance(),62);
            });
        });

    });
    /**
     * now lets us create some CheckingAccounts.
     * Checking accounts with $120 overdraft limit
     * @type {SavingsAccount}
     */
    const checkingAccount = new CheckingAccount(1 , 120);
    /**
     * Put some money in the account
     * @type {SavingsAccount}
     */
    checkingAccount.deposit(50);
    /**
     * lets now withdraw $110, the expected balance is -$60
     * @type {SavingsAccount}
     */
    checkingAccount.withdraw(110);
    /**
     * lets now check the account to see how much money it has in mocha test
     * we expect -$60
     * @type {SavingsAccount}
     */
    describe("Checking Account Test", function() {
        context("Account number: 1, Initial deposit $50, Overdraft Limit $120, withdrawn $110, expected to remain is -$60", function() {

            it("The expected Balance is $-60", function() {
                assert.equal(checkingAccount.getBalance(),-60);
            });
        });

    });
    /**
     * Now lets create a Bank object and insert some accounts
     *
     */
    const bank = new Bank();

    bank.addSavingsAccount(9);
    /**
     * now lets us create a simple account
     * we expect the account to be added into
     * an array in the bank object
     *
     */
    bank.addAccount();
    /**
     * lets now create a saving account
     * with interest rate 3%
     *
     */
    bank.addSavingsAccount(3);
    /**
     * lets now create checking account with overdraft limit
     * $120
     */
    bank.addCheckingAccount(120);
    /**
     * lets now see all information about the different types of accounts
     * in the bank in the Mocha test
     */

    describe("Bank Class Test", function() {
        context("Account with acct No =1 \n" +
            "Saving Account with acct No = 2 and interest rate 3%\n" +
            "Checking Account with acct No = 3 and overdraft limit 120", function() {

            it("", function() {
                assert.equal(checkingAccount.getBalance(),-60);
            });
        });

    });










}());