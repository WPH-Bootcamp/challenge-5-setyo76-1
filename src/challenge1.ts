// 1. Define the type for a Book
type Book = {
  title: string;
  author: string;
  year: number;
};

// 2. Create an array to store book records
const books: Book[] = [];

// 3. Implement function to add a new book
function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${year})`);
}

// 4. Implementing the listBooks function
function listBooks(): void {
  console.log('All Books:');
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// 5. Implementing the searchBook function
function searchBook(title?: string): void {
  // Cek jika parameter title tidak diberikan (undefined)
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }

// Searching for books whose titles contain the keyword (Case Sensitive as per test request)
  const filteredBooks = books.filter((book) => book.title.includes(title));

  if (filteredBooks.length > 0) {
    console.log(`Search Results for "${title}":`);
    filteredBooks.forEach((book) => {
      console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
  } else {
    console.log(`No books found with title containing "${title}".`);
  }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };

