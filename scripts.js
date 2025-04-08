const myLibrary = [];

const $title = document.querySelector('#title');
const $author = document.querySelector('#author');
const $pages = document.querySelector('#pages');
const $status = document.querySelector('#status');
const $form = document.querySelector('form').addEventListener('submit', () => {
  addBookToLibrary()
})

function Book(title, author, pages, readStatus) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.readStatus = readStatus);
}


function addBookToLibrary() {
  const newBook = new Book($title.value, $author.value, $pages.value, $status.value)

  myLibrary.push(newBook);
}

console.log(myLibrary)


