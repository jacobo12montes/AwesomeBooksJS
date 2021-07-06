class Books {
  constructor(){
    this.html = [];
    this.myStorage = window.localStorage;
    this.bookArray = Object.entries(this.myStorage);
  }

  addBooks() {
    this.bookName = document.getElementById('name-book').value;
    this.bookAuthor = document.getElementById('author-book').value;
    localStorage.setItem(this.bookName, this.bookAuthor);
    this.createHtml();
  }

  createHtml() {
    this.bookArray.forEach(([key, value]) => {
      this.html.push(`<div class='book'><p class='book-title'>${key}</p><p class='book-author'>${value}</p><button class='remove'>Remove</button><br><br></div>`);
    });
    document.getElementById('book-list').innerHTML = this.html.join(' ');
  }

  getEl() {
    for (let i = 0; i < document.getElementsByClassName('remove').length; i += 1) {
      this.bookTitle = document.getElementsByClassName('remove')[i].parentElement;
      document.getElementsByClassName('remove')[i].addEventListener('click', () => { this.removeBooks(this.bookTitle); });
    }
    return this.bookTitle;
  }

  removeBooks() {
    this.title = this.getEl().firstChild.innerText;
    Object.fromEntries(this.bookArray);
    localStorage.removeItem(this.title);
    this.bookArray = Object.entries(this.myStorage);
    this.getEl().remove();
  }


}

const book = new Books();
book.addBooks();
book.removeBooks();
console.log(book.bookArray);





