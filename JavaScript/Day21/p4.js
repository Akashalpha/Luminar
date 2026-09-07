// Task:
// Create a Bank Account Management System using JavaScript classes.
// Students should:
// Create a BankAccount class.
// Keep the following properties private:
// accountNumber
// balance
// pin
// Provide public methods such as:
// deposit(amount)
// withdraw(amount, pin)
// checkBalance(pin)
// The actual balance should not be directly accessible or modifiable from outside the class.
// Validate:
// Deposit amount must be positive.
// Withdrawal amount must not exceed the balance.
// PIN must be correct.
// Create atleast two bank accounts and demonstrate the methods.

class BankAccount{
    #accountNumber
    #balance
    #pin 
    constructor(accNum , balance , pin){
        this.#accountNumber = accNum
        this.#balance = balance
        this.#pin = pin
    }
    deposit(amount){
        if(amount>0){
            console.log(amount, "is deposited")
            this.#balance+=amount
        }else{
            console.log("Ivalid Input")
        }
        

    }
    withdraw(amount,pin){
        if(pin==this.#pin&&amount<=this.#balance){
            console.log("Amount withdrawn successfully")
            this.#balance-=amount
        }else{
            console.log("Wrong Pin or Amount exceeded")
        }
  
    }
    checkBalance(pin){
          if(pin==this.#pin){
            console.log("Balance is ",this.#balance)
        }else{
            console.log("Wrong Pin")
        }
    }
}
let b1 = new BankAccount(1234567,2000,2143)
let b2 = new BankAccount(9876543,1500,5587)

b2.withdraw(1000,5587)
//  b2.deposit(1500)
