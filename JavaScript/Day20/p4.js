class Bank {
  // property
  accountDetails = {
    1000: {
      accno: 1000,
      userName: "userOne",
      password: "password1",
      balance: 5000,
    },
    1001: {
      accno: 1001,
      userName: "userTwo",
      password: "password2",
      balance: 7000,
    },
    1002: {
      accno: 1002,
      userName: "userThree",
      password: "password3",
      balance: 8000,
    },
    1003: {
      accno: 1003,
      userName: "userFour",
      password: "password4",
      balance: 6000,
    },
    1004: {
      accno: 1004,
      userName: "userFive",
      password: "password5",
      balance: 9000,
    },
  };

  //   methods
  // Validate account no : (check account no is there)

  validate(acno) {
    if (acno in this.accountDetails) {
      console.log("Validated");
      return true;
    } else {
      console.log("Not Valid");
      return false;
    }
  }

  // authenticate account only for those with valid account no (acccno, username & password)
  authenticate(acno, usrname, pswd) {
    if (this.validate(acno)) {
      let account = this.accountDetails[acno];
      if (account.userName == usrname && account.password == pswd) {
        console.log("Authenticated");
        return true;
      } else {
        console.log("Invalid Credentials");
        return false;
      }
    }
  }

  // balance enquiry only for authenticated ones (accno, username & password)
  checkBalance(acno, usrname, pswd) {
    if (this.authenticate(acno, usrname, pswd)) {
      let account = this.accountDetails[acno];
      console.log(account.balance);
    }
  }
}

let b1 = new Bank();
//   b1.validate(1001)

//   b1.authenticate(1001,"userTwo","password2")
b1.checkBalance(1001, "userTwo", "password2");
