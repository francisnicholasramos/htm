// REFACTOR

class Book {
  constructor(id, title, author, pages, readStatus) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}

class Library {
  constructor() {
    this.library = []
  }  

  addBookToLibrary(book) {
    this.library.push(book) 
  }

  deleteBook(id) {
    this.library = this.library.filter((book) => book.id !== id)
  }

  debugger() {
    console.log(`Arr log`, this.library)
  }

}

const debug = new Library();

const dummyBook1 = new Book(
  1,
  "Cracking The Coding Interview",
  "Gayle Laakmann McDowell",
  "350",
  "read"
);


const dummyBook2 = new Book(
  2,
  "Coding Interview",
  "Gayle Laakmann McDowell",
  "350",
  "read"
);  

const myLibrary = new Library();

//debugger
debug.deleteBook(1)
debug.addBookToLibrary(dummyBook1)
debug.addBookToLibrary(dummyBook2)
debug.debugger();

const form = () => {
  const bookSectionDisplay = document.querySelector(".books-section");

  const card = document.createElement("div");
  const exit = document.createElement("button");
  const cardImage = document.createElement("div");
  const image = document.createElement("img");

  const bookContent = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readStatus = document.createElement("p"); 
  
  card.classList.add("card");

  bookSectionDisplay.appendChild(card)
}

form()

