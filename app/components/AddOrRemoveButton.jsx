"use client";

import { useSavedBooksContext } from "../context/SavedBooksContext";

import { IoMdAdd } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

export default function AddOrRemovebutton({ book }) {
  const { saved, setSaved } = useSavedBooksContext();

  const saveBook = async () => {
    try {
      const response = await fetch(`/api/save`, {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(book),
      });

      const data = await response.json();

      if (response.ok) {
        setSaved([...saved, data.book]);
      } else {
        // todo
      }
    } catch (error) {
      // todo
    }
  }

  const removeBook = async () => {
    try {
      const response = await fetch(`/api/remove`, {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(book),
      });

      const data = await response.json();

      if (response.ok) {
        setSaved(saved.filter(b => b.id !== book.id));
      } else {
        // todo
      }
    } catch (error) {
      // todo
    }
  }

  function renderAddOrRemove() {
    if (!saved.some(savedBook => savedBook.id == book.id)) {
      return (
        <button className="text-2xl flex items-center border-2 border-foreground 
        p-3 pr-2 gap-0.5 rounded-full bg-green-600 transition ease-out 
        hover:scale-105 hover:brightness-125 duration-150" onClick={saveBook}>
          Save
          <IoMdAdd />
        </button>
      );
    }

    return (
      <button className="text-2xl flex items-center border-2 border-foreground 
        p-3 pr-2 gap-0.5 rounded-full bg-red-700 transition ease-out 
        hover:scale-105 hover:brightness-125 duration-150" onClick={removeBook}>
        Remove
        <IoMdTrash />
      </button>
    );
  }

  return renderAddOrRemove();
}