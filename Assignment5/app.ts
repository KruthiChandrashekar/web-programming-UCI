import { Book, BookManager } from './book';

// Create an instance of BookManager
const bookManager = new BookManager();

// Adding books
const book1: Book = {
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  pages: 300,
};

const book2: Book = {
  title: '1984',
  author: 'George Orwell',
  pages: 250,
};

bookManager.addBook(book1);
bookManager.addBook(book2);

// Displaying all books
const allBooks = bookManager.getAllBooks();
console.log('All Books:', allBooks);
