// Define an interface for a book
export interface Book {
  title: string;
  author: string;
  pages: number;
}

// Book class implementing the Book interface
export class BookManager {
  books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  getAllBooks(): Book[] {
    return this.books;
  }
}
