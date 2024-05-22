class Book {
    constructor(title, author) {
        // enforce abstract class
        if (new.target === Book) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        this.title = title;
        this.author = author;
    }

    display() {
        throw new Error("Must override method");
    }
}
// hackerrank solution
class MyBook extends Book {
    constructor(title, author, price) {
        super(title, author);
        this.price = price;
    }

    display() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }
}

class Solution {
    run() {
        let book = new MyBook("The Alchemist", "Paulo Coelho", 248);
        book.display();
    }
}