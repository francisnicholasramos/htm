class Book {
  constructor(title, author, pages, readStatus) {
    this.id = crypto.randomUUID();
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

  listBook() {
    return this.library;
  }

  deleteBook(id) {
    this.library.splice(id, 1)
  }

  debugger() {
    console.log(`Arr log`, this.library)
  }

}

const myBook = new Book();
const myLibrary = new Library();

myLibrary.addBookToLibrary(new Book("Cracking The Coding Interview", "Gayle Laakmann McDowell", "350", "read"));

const form = () => {
  const bookSectionDisplay = document.querySelector(".books-section");

  const form = document.querySelector("form");
  
  myLibrary.listBook().forEach((book) => {

  form.addEventListener('submit', (e) => {
  e.preventDefault();

  // values of inputs
  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPages = document.querySelector("#pages").value;
  const bookStatus = document.querySelector("#status").value;


  // create dom elements
  const card = document.createElement("div");
  const exit = document.createElement("button");
  const cardImage = document.createElement("div");
  const image = document.createElement("img");

  const bookContent = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  let toggleBtn = document.createElement("button"); 
  
  // card container & exit button
  card.classList.add("card");
  exit.classList.add("exit");

  exit.onclick = () => {
    myLibrary.deleteBook();
    card.remove();
    console.log(`Check delete:`, myLibrary.debugger())
  }

  myLibrary.addBookToLibrary(new Book(bookTitle, bookAuthor, bookPages, bookStatus))

  cardImage.classList.add("image-card");
  bookContent.classList.add("book-content");
  title.classList.add("title");
  title.title = bookTitle;
  author.classList.add("author");
  pages.classList.add("pages");
  toggleBtn.classList.add("toggle")

  // append elements
  bookSectionDisplay.appendChild(card)
  bookSectionDisplay.appendChild(card);
  card.appendChild(exit);
  card.appendChild(cardImage);
  cardImage.appendChild(image);
  image.src =
    "https://i.pinimg.com/736x/49/a5/d6/49a5d68adff451db2d9caba7ae24ac8a.jpg";
  card.appendChild(bookContent);
  bookContent.appendChild(title);
  bookContent.appendChild(author);
  bookContent.appendChild(pages);
  bookContent.appendChild(toggleBtn);

  // card contents
  exit.innerHTML = "&#10006;";
  title.textContent = bookTitle;
  author.textContent = bookAuthor;
  pages.textContent = `${bookPages} pages`;
  toggleBtn.textContent = bookStatus;

  toggleBtn.addEventListener('click', () => {
    book.readStatus = book.readStatus === "read" ? "unread" : "read";

    toggleBtn.textContent = book.readStatus
    console.log(myLibrary.listBook())
  })


  myLibrary.debugger();
  form.reset()
   })
  })
}

form()


const displayBook = () => {
  const books = document.querySelector(".books-section");

  books.innerHTML = ""; // render the dom after making changes

  myLibrary.listBook().forEach((book) => {
    const card = document.createElement("div");
    const exit = document.createElement("button");
    const cardImage = document.createElement("div");
    const toggleBtn = document.createElement('button') // toggle button
    const image = document.createElement("img");

    const bookContent = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");

    card.classList.add("card");
    exit.classList.add("exit");
    cardImage.classList.add("image-card");
    bookContent.classList.add("book-content");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    toggleBtn.classList.add('toggle')

    exit.innerHTML = "&#10006;";
    exit.onclick = () => {
      myLibrary.deleteBook()
      displayBook();
    };
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM21oVe-TtjmXAEMEWaAVUKZDmg9CIu64IYw&s";
    title.textContent = book.title;
    title.title = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    toggleBtn.textContent = book.readStatus;

    books.appendChild(card);
    card.appendChild(exit);
    card.appendChild(cardImage);
    cardImage.appendChild(image);
    card.appendChild(bookContent);
    bookContent.appendChild(title);
    bookContent.appendChild(author);
    bookContent.appendChild(pages);
    bookContent.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
      book.readStatus = book.readStatus === "read" ? "unread" : "read";

      toggleBtn.textContent = book.readStatus
      console.log(myLibrary.listBook())
    })

  });
}

displayBook()
