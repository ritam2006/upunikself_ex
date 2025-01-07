import { NextResponse } from 'next/server';
import { db } from '../../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';

export async function POST(req) {
  try {
    const book = await req.json();
    
    const bookRef = doc(db, "saved", book.id);
    await deleteDoc(bookRef);

    return NextResponse.json({ message: 'Book removed successfully', book: book }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}