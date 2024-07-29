import React from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              {/* Add other relevant fields as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default BookList;
