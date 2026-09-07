const accounts = [
  {
    acno: 1000,
    actype: "saving",
    balance: 45000,
    transaction: [
      { to: 1001, amount: 5000, msg: "ebill", mode: "gpay" },
      { to: 1002, amount: 2000, msg: "emi", mode: "neft" },
      { to: 1003, amount: 1000, msg: "recharge", mode: "phonePe" },
    ],
  },
  {
    acno: 1001,
    actype: "current",
    balance: 30000,
    transaction: [
      { to: 1000, amount: 4000, msg: "rent", mode: "upi" },
      { to: 1004, amount: 3500, msg: "shopping", mode: "net banking" },
    ],
  },
  {
    acno: 1002,
    actype: "saving",
    balance: 55000,
    transaction: [
      { to: 1003, amount: 5000, msg: "loan", mode: "rtgs" },
      { to: 1005, amount: 1500, msg: "grocery", mode: "upi" },
    ],
  },
  {
    acno: 1003,
    actype: "saving",
    balance: 20000,
    transaction: [
      { to: 1002, amount: 2500, msg: "internet bill", mode: "neft" },
      { to: 1004, amount: 3200, msg: "electricity", mode: "gpay" },
    ],
  },
  {
    acno: 1004,
    actype: "current",
    balance: 60000,
    transaction: [
      { to: 1005, amount: 7000, msg: "car loan", mode: "phonePe" },
      { to: 1001, amount: 2200, msg: "fuel", mode: "upi" },
    ],
  },
];

// total number of accounts
console.log(accounts.length)

console.log("--------------------------------");


// print account number whose actype is savings

let savingsAccount = accounts.filter((eachAcc)=>eachAcc.actype==="saving").map((eachAcc)=>eachAcc.acno)
console.log(savingsAccount)
console.log("--------------------------------");


// print the balance of account number 1000

let balanceOfAcc1000 = accounts.find((eachAcc)=>eachAcc.acno==1000).balance
console.log(balanceOfAcc1000)
console.log("--------------------------------");


// print all phonePay transaction

let allTransactions = accounts.map((eachAcc)=>eachAcc.transaction)
// console.log(allTransactions)
let flattenedTransaction = allTransactions.flat(Infinity)
// console.log(flattenedTransaction)
let phonePe = flattenedTransaction.filter((eachTransaction)=>eachTransaction.mode=="phonePe")
console.log(phonePe)
console.log("--------------------------------");


// print all transactions > 3000

let gt3000 = flattenedTransaction.filter((eachTransaction)=>eachTransaction.amount>3000)
console.log(gt3000)
console.log("--------------------------------");


// print credit transaction of account 1002(CREDITED TO)

let creditTo1002 = flattenedTransaction.filter((eachTransaction)=>eachTransaction.to==1002)
console.log(creditTo1002)
console.log("--------------------------");


// print total credited amount to 1002

let totalCreditTo1002 = creditTo1002.reduce((acc,curr)=>acc+curr.amount,0)
console.log(totalCreditTo1002)
console.log("-----------------------");


// print debit transaction of 1002
let debit1002 = accounts.find((eachAcc)=>eachAcc.acno==1002).transaction
console.log(debit1002)
console.log("--------------------------------");


// transaction history of 1002 // history = debit,credit

let transactionHistory =[...debit1002,...creditTo1002]
console.log(transactionHistory)
console.log("-----------------------");


// current balance of 1002 (balace +credit amount)
let balance1002 = accounts.find((eachAcc)=>eachAcc.acno==1002).balance
console.log(balance1002 + totalCreditTo1002)
console.log('--------------------')


// Account with highest balance
let accHighBal = accounts.reduce((acc,curr)=>acc.balance>curr.balance?acc:curr)
console.log(accHighBal)