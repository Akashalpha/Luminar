class Library {
  // property
  bookDetails = {
    101: {
      bookId: 101,
      title: "JavaScript Basics",
      author: "John Doe",
      availableCopies: 3,
    },
    102: {
      bookId: 102,
      title: "Learn React",
      author: "Jane Smith",
      availableCopies: 5,
    },
    103: {
      bookId: 103,
      title: "Mastering Node.js",
      author: "David Wilson",
      availableCopies: 2,
    },
    104: {
      bookId: 104,
      title: "Angular for Beginners",
      author: "Sophia Lee",
      availableCopies: 4,
    },
  };

  // methods to implement:
  // 1. validateBook(bookId) → check if book exists

  validate(bookIdd) {
    if (bookIdd in this.bookDetails) {
      console.log("Available");
      return true;
    } else {
      console.log("Not Available");
      return false;
    }
  }

  // 2. borrowBook(bookId) → decrease availableCopies by 1 (if available)

  borrowBook(bookIdd) {
    if (this.validate(bookIdd)) {
      let book = this.bookDetails[bookIdd];

      if (book.availableCopies > 0) {
        book.availableCopies--;

        console.log("Book borrowed successfully");
        console.log("Available copies:", book.availableCopies);
      } else {
        console.log("Book is out of stock");
      }
    }
  }

  // 3. returnBook(bookId) → increase availableCopies by 1
  returnBook(bookIdd) {
    if (this.validate(bookIdd)) {
      let book = this.bookDetails[bookIdd];
      book.availableCopies++;
      console.log("Returned Book");
      console.log("Available copies:", book.availableCopies);
    }
  }

  // 4. checkAvailability(bookId) → display available copies
  checkAvailability(bookIdd) {
    if (this.validate(bookIdd)) {
      let book = this.bookDetails[bookIdd];
      console.log(book.availableCopies, "Copies");
    } else {
      console.log("Book is out of stock");
    }
  }
}
let b1 = new Library();

b1.validate(101);

b1.borrowBook(102);

b1.returnBook(103);

b1.checkAvailability(104);
