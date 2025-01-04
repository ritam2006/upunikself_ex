"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BookPage() {
  const params = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`/api/book/${params.id}`);
      const data = await response.json();

      if (data) {
        setBook(data.book);
      } else {
        console.error('No books found', data);
      }
    }
    fetchBook();
  }, []);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {book.title}
    </div>
  );
}