"use client";

import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="sticky top-0 flex justify-center gap-2 p-2 bg-blue-600 
      text-2xl border-b-2 border-foreground z-50">
      <button onClick={() => router.push("/home")}>Home</button>
      <button onClick={() => router.push("/books")}>Books</button>
    </div>
  );
}