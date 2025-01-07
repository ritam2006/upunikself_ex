"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const SavedBooksContext = createContext();

export function SavedBooksContextProvider({ children, initialSaved }) {
  const [saved, setSaved] = useState([...initialSaved]);

  return (
    <SavedBooksContext.Provider value={{ saved, setSaved }}>
      {children}
    </SavedBooksContext.Provider>
  );
}

export function useSavedBooksContext() {
  return useContext(SavedBooksContext);
}