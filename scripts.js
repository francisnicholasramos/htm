let library = [];

addBookToLibrary(
  "Cracking The Coding Interview",
  "Gayle Laakmann McDowell",
  "320"
);

const books = document.querySelector(".books-section");
const form = document.querySelector("form");

const removeBtn = document.querySelector(".exit");

console.log(`Array of books:`, library);

function Book(title, author, pages, readStatus) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = "not read";
}

function addBookToLibrary(title, author, pages, readStatus) {
  library.push(new Book(title, author, pages, readStatus));
}

function deleteArr(index) {
  library = library.filter((item) => item.id !== index);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPages = document.querySelector("#pages").value;
  const form = document.querySelector("form");

  //if (bookTitle === "" && bookAuthor === "") {
  //  return;
  //}

  const card = document.createElement("div");
  const exit = document.createElement("button");
  const cardImage = document.createElement("div");
  const image = document.createElement("img");

  const bookContent = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");

  card.classList.add("card");
  exit.classList.add("exit");
  exit.onclick = () => {
    deleteArr(book.id);
    displayBook();
  };
  cardImage.classList.add("image-card");
  bookContent.classList.add("book-content");
  title.classList.add("title");
  title.title = bookTitle;
  author.classList.add("author");
  pages.classList.add("pages");

  books.appendChild(card);
  card.appendChild(exit);
  card.appendChild(cardImage);
  cardImage.appendChild(image);
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM21oVe-TtjmXAEMEWaAVUKZDmg9CIu64IYw&s";
  // "https://cdn.kobo.com/book-images/f68de379-e763-441c-8159-a949ea575237/1200/1200/False/the-subtle-art-of-not-giving-a-f-ck.jpg"
  card.appendChild(bookContent);
  bookContent.appendChild(title);
  bookContent.appendChild(author);
  bookContent.appendChild(pages);

  exit.textContent = "x";
  title.textContent = bookTitle;
  author.textContent = bookAuthor;
  pages.textContent = `${bookPages} pages`;
  addBookToLibrary(bookTitle, bookAuthor, bookPages);
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

    card.classList.add("card");
    exit.classList.add("exit");
    cardImage.classList.add("image-card");
    bookContent.classList.add("book-content");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");

    exit.textContent = "x";
    exit.onclick = () => {
      deleteArr(book.id);
      displayBook();
    };
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM21oVe-TtjmXAEMEWaAVUKZDmg9CIu64IYw&s";
    title.textContent = book.title;
    title.title = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;

    books.appendChild(card);
    card.appendChild(exit);
    card.appendChild(cardImage);
    cardImage.appendChild(image);
    card.appendChild(bookContent);
    bookContent.appendChild(title);
    bookContent.appendChild(author);
    bookContent.appendChild(pages);
  });
}

displayBook();

//TODO:
//
// 1. refactor rendering content using map
// 2. scrape an image copy image address for card image
