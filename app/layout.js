import "./globals.css";

import Navbar from "./components/Navbar";
import { SavedBooksContextProvider } from "./context/SavedBooksContext";
import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const metadata = {
  title: "UpUnikSelf Exercise",
  description: "UpUnikSelf Exercise",
};

export default async function RootLayout({ children }) {
  const initialSaved = [];

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, "saved"));
    snapshot.forEach((doc) => {
      initialSaved.push({
        ...doc.data()
      });
    })
  }

  await fetchData();

  return (
    <html lang="en">
      <body>
      <SavedBooksContextProvider initialSaved={initialSaved}>
        <Navbar/>
        <main className="p-4">
          {children}
        </main>
      </SavedBooksContextProvider>
      </body>
    </html>
  );
}