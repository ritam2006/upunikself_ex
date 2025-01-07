import { NextResponse } from 'next/server';

const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter "q" is required' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

  try {
    const response = await fetch(`${GOOGLE_BOOKS_API_URL}?q=${query}&key=${apiKey}&maxResults=12`);
    const data = await response.json();

    const books = data.items?.map((book) => ({
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors?.join(', ') || 'Unknown Author',
      description: book.volumeInfo.description || 'No description available.',
      averageRating: book.volumeInfo.averageRating || 'No rating available.',
      imageLinks: book.volumeInfo.imageLinks?.thumbnail || null,
    })) || [];

    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data from Google Books API' }, { status: 500 });
  }
}
