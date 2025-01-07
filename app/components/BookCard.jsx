import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="bg-slate-800 w-80 h-48 rounded-lg p-2 overflow-x-hidden
        transition ease-in-out hover:scale-110 hover:bg-blue-600 duration-200">
        <h1 className="font-bold text-2xl">{book.title}</h1>
        <h2 className="text-xl">by {book.authors}</h2>
        <div className="w-full h-0.5 bg-white my-2"></div>
        <div dangerouslySetInnerHTML={{ __html: book.description }} />
      </div>
    </Link>
  );
}