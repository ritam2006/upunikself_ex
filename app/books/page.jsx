"use client";

import { useState } from "react";

import BookCard from "../components/BookCard";
import { IoSearchSharp } from "react-icons/io5";

export default function Books() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const getBooks = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/books?q=${query}`);
    const data = await response.json();
    
    if (data) {
      setBooks(data);
    } else {
      console.error('No books found', data);
    }
  };
  
  return (
    <main>
      <h1 className="text-4xl text-center mb-4">Find a New Book to Read...</h1>
      <form className="flex gap-4 mb-8" onSubmit={getBooks}>
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
          className="flex-1 p-2 bg-slate-800 rounded-lg border-2 border-foreground"
        />
        <button className="text-4xl p-2 bg-blue-600 rounded-lg border-2 border-foreground">
          <IoSearchSharp />
        </button>
      </form>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] justify-items-center gap-y-8 gap-x-4">
        {books.map((book) => (
         <div key={book.id}>
            <BookCard 
              book={book}
            />
         </div>
        ))}
      </div>
    </main>
  );
}