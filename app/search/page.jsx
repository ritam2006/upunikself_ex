"use client";

import { useState } from "react";

import BookCard from "../components/BookCard";
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (event) => {
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
      <h1 className="text-4xl text-center mb-4">Explore</h1>
      <form className="flex gap-2 mb-8" onSubmit={searchBooks}>
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Explore books..."
          className="flex-1 p-2 bg-slate-800"
        />
        <button className="text-4xl p-2 bg-blue-600"><IoSearchSharp /></button>
      </form>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] justify-items-center gap-y-8 gap-x-4">
        {books.map((book) => (
         <div key={book.id}>
            <BookCard 
              name={book.title}
              author={book.authors || 'Unknown Author'}
              desc={book.description || 'No description available.'}
              rating={book.averageRating || 'No rating available.'}
              id={book.id} 
            />
         </div>
        ))}
      </div>
    </main>
  );
}