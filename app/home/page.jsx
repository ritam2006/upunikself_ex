import BookCard from "../components/BookCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl text-center mb-4">Your Books</h1>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] justify-items-center gap-y-8 gap-x-4">
      <BookCard name="book1" author="rizztam" desc="lorem ipsum" rating="5.0" id="2401284" />
      <BookCard name="book1" author="rizztam" desc="lorem ipsum" rating="5.0" id="2401284" />
      <BookCard name="book1" author="rizztam" desc="lorem ipsum" rating="5.0" id="2401284" />
      <BookCard name="book1" author="rizztam" desc="lorem ipsum" rating="5.0" id="2401284" />
      <BookCard name="book1" author="rizztam" desc="lorem ipsum" rating="5.0" id="2401284" />
      <BookCard name="book1" author="rizztam" desc="lorem ipsum" rating="5.0" id="2401284" />
      <BookCard name="book1" author="rizztam" desc="lorem ipsum" rating="5.0" id="2401284" />
      <BookCard name="book1" author="rizztam" desc="lorem ipsum" rating="5.0" id="2401284" />
      </div>
    </main>
  );
}