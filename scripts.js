let library = [];

addBookToLibrary(
  "Cracking The Coding Interview",
  "Gayle Laakmann McDowell",
  "350",
  "read"
);

const bookSectionDisplay = document.querySelector(".books-section");
const form = document.querySelector("form");

function Book(title, author, pages, readStatus) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  const newAddedBook = new Book(title, author, pages, readStatus);
  library.push(newAddedBook);
  console.log("Add:", library);
  return newAddedBook;
}

console.log(`Array count:`, library);

function deleteBook(id) {
  library = library.filter((item) => item.id !== id);
  console.log("Delete:", library);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPages = document.querySelector("#pages").value;
  const bookStatus = document.querySelector("#status").value;
  const form = document.querySelector("form");

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
  exit.classList.add("exit");

  const book = addBookToLibrary(bookTitle, bookAuthor, bookPages, bookStatus);
  exit.dataset.bookId = book.id;

  exit.onclick = () => {
    deleteBook(book.id);
    card.remove(); // removes the card from the DOM
  };

  cardImage.classList.add("image-card");
  bookContent.classList.add("book-content");
  title.classList.add("title");
  title.title = bookTitle;
  author.classList.add("author");
  pages.classList.add("pages");

  bookSectionDisplay.appendChild(card);
  card.appendChild(exit);
  card.appendChild(cardImage);
  cardImage.appendChild(image);
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM21oVe-TtjmXAEMEWaAVUKZDmg9CIu64IYw&s";
  card.appendChild(bookContent);
  bookContent.appendChild(title);
  bookContent.appendChild(author);
  bookContent.appendChild(pages);
  bookContent.appendChild(readStatus);

  exit.innerHTML = "&#10006;";
  title.textContent = bookTitle;
  author.textContent = bookAuthor;
  pages.textContent = `${bookPages} pages`;
  readStatus.textContent = bookStatus;

  form.reset();
});

function displayBook() {
  const books = document.querySelector(".books-section");

  books.innerHTML = "";

  library.forEach((book) => {
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
    exit.classList.add("exit");
    cardImage.classList.add("image-card");
    bookContent.classList.add("book-content");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");

    exit.innerHTML = "&#10006;";
    exit.onclick = () => {
      deleteBook(book.id);
      displayBook();
    };
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM21oVe-TtjmXAEMEWaAVUKZDmg9CIu64IYw&s";
    title.textContent = book.title;
    title.title = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    readStatus.textContent = book.readStatus;

    books.appendChild(card);
    card.appendChild(exit);
    card.appendChild(cardImage);
    cardImage.appendChild(image);
    card.appendChild(bookContent);
    bookContent.appendChild(title);
    bookContent.appendChild(author);
    bookContent.appendChild(pages);
    bookContent.appendChild(readStatus);
  });
}

displayBook();
