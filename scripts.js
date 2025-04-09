const library = [];

const books = document.querySelector(".books-section");
const form = document.querySelector("form");

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPages = document.querySelector("#pages").value;

  //if (bookTitle === "" && bookAuthor === "") {
  //  return;
  //}

  const card = document.createElement("div");
  const exit = document.createElement("div");
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
  title.title = bookTitle;
  author.classList.add("author");
  pages.classList.add("pages");

  books.appendChild(card);
  card.appendChild(exit);
  card.appendChild(cardImage);
  cardImage.appendChild(image);
  image.src =
    "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg?w=300";
  card.appendChild(bookContent);
  bookContent.appendChild(title);
  bookContent.appendChild(author);
  bookContent.appendChild(pages);

  exit.textContent = "x";
  title.textContent = bookTitle;
  author.textContent = bookAuthor;
  pages.textContent = `${bookPages} pages`;
  addBookToLibrary(bookTitle, bookAuthor, bookPages);
  addBookToLibrary("Title", "Author", "123", "not read");
});

//TODO:
//
// 1. refactor rendering content using map
// 2. scrape an image copy image address for card image
