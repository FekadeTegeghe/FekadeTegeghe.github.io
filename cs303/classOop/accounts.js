"use strict";
class Account {
  constructor(accountId, balance) {
    this.accountId = accountId;
    this.balance = balance;
  }

  computeUpdatedBalance() {
    return this.balance;
  }
}

class CheckingAccount extends Account {
  constructor(accountId, balance, monthlyFee) {
    super(accountId, balance);
    this.monthlyFee = monthlyFee;
  }
  computeUpdatedBalance() {
    return this.balance - this.monthlyFee;
  }
}

class SavingAccount extends Account {
  constructor(accountId, balance, interestRate) {
    super(accountId, balance);
    this.interestRate = interestRate;
  }

  computeUpdatedBalance() {
    return this.balance * (1 + this.interestRate);
  }
}

class Employee {
  constructor(name, accounts = []) {
    this.name = name;
    this.accounts = accounts;
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  computeUpdatedSum() {
    return this.accounts.reduce(
      (sum, balance) => sum + balance.computeUpdatedBalance(),
      0
    );
  }
  average() {
    return this.accounts.reduce(
      (sum, item, index, array) =>
        sum + item.computeUpdatedBalance() / array.length,
      0
    );
  }
}

const emp = new Employee("Tina");

emp.addAccount(new CheckingAccount(1001, 5000.0, 25));

emp.addAccount(new CheckingAccount(1002, 2000.0, 25));

emp.addAccount(new SavingAccount(8001, 30000.0, 0.02));
emp.addAccount(new SavingAccount(8002, 50000.0, 0.04));
console.log(emp.computeUpdatedSum());
console.log(emp.average());
