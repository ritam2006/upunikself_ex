import { NextResponse } from 'next/server';

const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function GET(req, { params }) {
  const { id } = await params;
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

  try {
    const response = await fetch(`${GOOGLE_BOOKS_API_URL}/${id}?key=${apiKey}`);
    const bookData = await response.json();

    if (bookData.error) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }

    const book = {
      id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors?.join(', ') || 'Unknown Author',
      description: bookData.volumeInfo.description || 'No description available.',
      averageRating: bookData.volumeInfo.averageRating || 'No rating available.',
      imageLinks: bookData.volumeInfo.imageLinks?.thumbnail || null,
    };

    return NextResponse.json({ book });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data from Google Books API' }, { status: 500 });
  }
}
