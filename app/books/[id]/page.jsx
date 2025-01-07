import Image from "next/image";

import AddOrRemovebutton from "@/app/components/AddOrRemoveButton";

// const URL = "http://localhost:3000";
const URL = "upunikself-hij4z1bw4-shinymustard22s-projects.vercel.app";

async function getBook(id) {
  try {
    const response = await fetch(URL + `/api/book/${id}`, { cache: 'no-store' });
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Book Not Found');
      } 
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.book;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
}

export default async function BookPage({ params }) {
  const { id } = await params;
  const book = await getBook(id);

  return (
    <div className="gap-8 bg-slate-800 p-4 m-auto mt-4 w-fit rounded">
      <div className="flex gap-10">
        <div className="flex flex-col items-center gap-8 flex-none">
          <Image 
            src={book.imageLinks}
            alt={book.title + " Cover"}
            width={200}
            height={0}
            priority={true}
          />
          <div className="mb-4"><AddOrRemovebutton book={book}/></div>
        </div>
        <div className="w-[32em]">
          <h1 className="font-bold text-2xl">{book.title}</h1>
          <h2 className="text-xl">by {book.authors}</h2>
          <p>Rating: {book.averageRating}</p>
          <div className="w-full h-0.5 bg-white my-4"></div>
          <div dangerouslySetInnerHTML={{ __html: book.description }} />
        </div>
      </div>
    </div>
  );
}