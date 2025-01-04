import Link from "next/link";

export default function BookCard({ name, author, desc, rating, id }) {
  return (
    <Link href={`/books/${id}`}>
      <div className="bg-slate-800 w-80 h-48 rounded-lg p-2 overflow-x-hidden">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h2 className="text-xl">by {author}</h2>
        <p className="">{rating}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </Link>
  );
}