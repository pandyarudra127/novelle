import axios from 'axios'
import Book from '../models/Book'

const GOOGLE_BOOKS_BASE = 'https://www.googleapis.com/books/v1'

interface GoogleBookVolume {
  id: string
  volumeInfo: {
    title: string
    subtitle?: string
    authors?: string[]
    publisher?: string
    publishedDate?: string
    description?: string
    pageCount?: number
    categories?: string[]
    averageRating?: number
    ratingsCount?: number
    imageLinks?: {
      thumbnail?: string
      smallThumbnail?: string
      extraLarge?: string
    }
    language?: string
    industryIdentifiers?: { type: string; identifier: string }[]
    seriesInfo?: { bookDisplayInfo?: { seriesName?: string } }
  }
}

function mapGoogleBook(volume: GoogleBookVolume) {
  const info = volume.volumeInfo
  const isbn10 = info.industryIdentifiers?.find((i) => i.type === 'ISBN_10')?.identifier
  const isbn13 = info.industryIdentifiers?.find((i) => i.type === 'ISBN_13')?.identifier

  return {
    title: info.title,
    subtitle: info.subtitle,
    authors: info.authors?.map((name) => ({ name })) || [{ name: 'Unknown' }],
    publisher: info.publisher,
    publicationDate: info.publishedDate ? new Date(info.publishedDate) : undefined,
    description: info.description,
    pageCount: info.pageCount,
    coverImage: info.imageLinks?.thumbnail?.replace('http:', 'https:')
      || info.imageLinks?.smallThumbnail?.replace('http:', 'https:'),
    genres: info.categories || [],
    language: info.language || 'en',
    isbn10,
    isbn13,
    averageRating: info.averageRating || 0,
    ratingsCount: info.ratingsCount || 0,
    sourceId: volume.id,
    source: 'google_books' as const,
    series: info.seriesInfo?.bookDisplayInfo?.seriesName
      ? { name: info.seriesInfo.bookDisplayInfo.seriesName }
      : undefined,
  }
}

export async function searchBooks(
  query: string,
  options: {
    maxResults?: number
    startIndex?: number
    langRestrict?: string
    orderBy?: 'relevance' | 'newest'
  } = {},
) {
  const { maxResults = 20, startIndex = 0, langRestrict, orderBy = 'relevance' } = options
  const params: Record<string, string | number> = {
    q: query,
    maxResults,
    startIndex,
    orderBy,
  }
  if (langRestrict) params.langRestrict = langRestrict

  try {
    const res = await axios.get(`${GOOGLE_BOOKS_BASE}/volumes`, { params })
    const books = (res.data.items || []).map(mapGoogleBook)

    const bookDocs = await Promise.all(
      books.map(async (b: ReturnType<typeof mapGoogleBook>) => {
        if (b.sourceId) {
          const existing = await Book.findOne({ sourceId: b.sourceId })
          if (existing) return { ...existing.toObject(), id: existing._id }
        }
        return b
      }),
    )

    return {
      books: bookDocs,
      totalItems: res.data.totalItems || 0,
    }
  } catch (error) {
    console.error('Google Books API error:', error)
    // Fallback: search local database
    const localResults = await Book.find(
      { $text: { $search: query } },
      { score: { $meta: 'textScore' } },
    )
      .sort({ score: { $meta: 'textScore' } })
      .limit(maxResults)

    return {
      books: localResults.map((b) => ({ ...b.toObject(), id: b._id })),
      totalItems: localResults.length,
    }
  }
}

export async function getBookById(sourceId: string) {
  const existing = await Book.findOne({ sourceId })
  if (existing) return { ...existing.toObject(), id: existing._id }

  try {
    const res = await axios.get(`${GOOGLE_BOOKS_BASE}/volumes/${sourceId}`)
    const book = mapGoogleBook(res.data)
    return book
  } catch {
    return null
  }
}

export async function getBookByIsbn(isbn: string) {
  const existing = await Book.findOne({ $or: [{ isbn10: isbn }, { isbn13: isbn }] })
  if (existing) return { ...existing.toObject(), id: existing._id }

  try {
    const res = await axios.get(`${GOOGLE_BOOKS_BASE}/volumes`, {
      params: { q: `isbn:${isbn}` },
    })
    if (res.data.items?.[0]) {
      return mapGoogleBook(res.data.items[0])
    }
  } catch {
    // fall through
  }
  return null
}

export async function getBooksByGenre(genre: string, limit = 20, skip = 0) {
  const local = await Book.find({ genres: { $regex: genre, $options: 'i' } })
    .sort({ ratingsCount: -1 })
    .skip(skip)
    .limit(limit)

  if (local.length >= limit) {
    return { books: local.map((b) => ({ ...b.toObject(), id: b._id })), totalItems: await Book.countDocuments({ genres: { $regex: genre, $options: 'i' } }) }
  }

  try {
    const res = await axios.get(`${GOOGLE_BOOKS_BASE}/volumes`, {
      params: { q: `subject:${genre}`, maxResults: limit, startIndex: skip },
    })
    const books = (res.data.items || []).map(mapGoogleBook)
    return { books, totalItems: res.data.totalItems || 0 }
  } catch {
    return { books: [], totalItems: 0 }
  }
}

export async function getNewReleases(limit = 20) {
  try {
    const res = await axios.get(`${GOOGLE_BOOKS_BASE}/volumes`, {
      params: {
        q: 'publishedDate:2025-01-01-2026-12-31',
        orderBy: 'newest',
        maxResults: limit,
      },
    })
    return (res.data.items || []).map(mapGoogleBook)
  } catch {
    return []
  }
}
