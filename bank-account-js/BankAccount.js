class BankAccount
{
  constructor(balance)
  {
    this.balance = balance;
    this.transaction = [];
  }
  store_transaction(transaction)
  {
    this.transaction = transaction;
  }
  add_transaction()
  {
    let sum = 0;
    for(let trans in this.transaction)
    {
      sum+= this.transaction[trans];
    }
    return sum;
  }
  calculate_balance()
  {
    return this.balance + this.add_transaction();
  }
}

let initialBalance = 1000
let bills = [-45, -99.95, -34.43]

let person = new BankAccount(initialBalance);
person.store_transaction(bills);
console.log(person.calculate_balance());
