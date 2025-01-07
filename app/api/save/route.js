import { NextResponse } from 'next/server';
import { db } from '../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(req) {
  try {
    const book = await req.json();

    if (!(book.id && book.title && book.authors && book.description)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const bookDocRef = doc(db, "saved", book.id);
    await setDoc(bookDocRef, book);

    return NextResponse.json({ message: 'Book created successfully', book: book }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}