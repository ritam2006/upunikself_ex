import Link from 'next/link';

export default function Navbar() {

  return (
    <div className="sticky top-0 flex justify-center gap-2 p-2 bg-blue-600 text-2xl">
      <Link href="/home">Home</Link>
      <Link href="/search">Search</Link>
      <a href=""></a>
    </div>
  );
}