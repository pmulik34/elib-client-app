"use client";

import { useState, useEffect } from "react";
import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";

export default function Home() {
  const [books, setBooks] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://freetestapi.com/api/v1/books`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const booksData = await response.json();
      setBooks(booksData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <Banner />
          <BookList books={books} />
        </>
      )}
    </>
  );
}
