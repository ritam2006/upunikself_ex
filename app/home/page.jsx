"use client";

import { useSavedBooksContext } from "../context/SavedBooksContext";
import BookCard from "../components/BookCard";

export default function Home() {
  const { saved } = useSavedBooksContext();

  function renderSavedBooks() {
    if (saved.length === 0) {
      return (
        <div className="text-xl">
          You have no saved books...
          <br></br>
          Try searching for some!
        </div>
      );
    }

    const bookComponents = [];
    saved.forEach((book, index) => {
      bookComponents.push(<BookCard key={index} book={book} />);
    });

    return (
      <>{bookComponents.map((component) => component)}</>
    );
  }

  return (
    <div>
      <h1 className="text-4xl text-center mb-4">Your Books</h1>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] justify-items-center gap-y-8 gap-x-4">
        {renderSavedBooks()}
      </div>
    </div>
  );
}