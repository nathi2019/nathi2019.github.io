/* jshint esversion: 6 */
/*global assert */
'use strict';

/**
 * this is class Bank it contains
 *  addAccount()
 *  addSavingsAccount(interest)
 *  addCheckingAccount(overdraft)
 *  closeAccount(number)
 *  endOfMonth() and
 *  accountReport() methods. and it stores all information in a bankAccounts array.
 *  it also has account number tracker nextNumber
 */
class Bank {
    /**
     * constructor for the Bank class
     * when a new bank object is created, it contains no account and hence nextNumber is 0.
     */
    constructor() {
        this.bankAccounts = [] ;
        this.nextNumber = 0;
    }

    /**
     * this method adds a new Account() and pushes it onto the bankAccounts array
     */

    addAccount(){
        this.bankAccounts.push( new Account(++this.nextNumber));

    }

    /**
     * this methods creates new saving account with a given interest rate
     * @param interest (interest rate in %)
     * pushes the newly crated object into the array
     */
    addSavingsAccount(interest){
        this.bankAccounts.push(new SavingsAccount(++this.nextNumber,interest))

    }

    /**
     * this functon creates new checking account with specified overdraft limit
     * @param overdraft - amount below zero a customer is allowed wo withdraw
     * pushes the newly created checking account into the array too
     */
    addCheckingAccount(overdraft){
        this.bankAccounts.push(new CheckingAccount(++this.nextNumber,overdraft));

    }

    /**
     * this method closes a given account.
     * account to be closed is specified with an account number
     * @param number   is an account number
     */
    closeAccount(number){
        for(let i=0; i<this.bankAccounts.length; i++){
            if(this.bankAccounts[i].getNumber()===number){
                this.bankAccounts.splice(i,1);
                break;
            }
        }
    }

    /**
     * this method runs endOfMonth() method on each bank object
     * it displays the status of each account
     */

    endOfMonth(){
        for (let i=0; i< this.bankAccounts.length; i++){
            console.log(this.bankAccounts[i].endOfMonth());
        }
    }

    /**
     * this method prepares and then return
     *
     * information like account number, balance.
     * it then returns to the information. in multiple lines. Each line contains information
     * of one account
     */

    accountReport(){
        let report =[];
        for(let i=0; i<this.bankAccounts.length; i++){
            report.push('Account Number: '+this.bankAccounts[i].getNumber()+', Balance is: '+this.bankAccounts[i].getBalance()+'\n');
        }
        return report;
    }


}