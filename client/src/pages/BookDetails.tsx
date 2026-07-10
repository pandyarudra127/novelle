import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '@/lib/axios'
import StarRating from '@/components/ui/StarRating'
import { BookDetailsSkeleton } from '@/components/ui/Skeleton'

interface BookData {
  id: string
  title: string
  authors: string[]
  coverImage: string
  description: string
  isbn: string
  isbn10: string
  isbn13: string
  pageCount: number
  categories: string[]
  averageRating: number
  ratingsCount: number
  publisher: string
  publishedDate: string
}

interface BookDetailsResponse {
  status: string
  book: BookData
}

export default function BookDetails() {
  const { id } = useParams<{ id: string }>()
  const [book, setBook] = useState<BookData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchBook() {
      setLoading(true)
      setError('')
      try {
        const { data } = await api.get<BookDetailsResponse>(`/books/${id}`)
        setBook(data.book)
      } catch {
        setError('Failed to load book details.')
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchBook()
  }, [id])

  if (loading) return <div className="max-w-4xl mx-auto"><BookDetailsSkeleton /></div>

  if (error) return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <p className="text-red-500">{error}</p>
    </div>
  )

  if (!book) return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <p className="text-gray-400">Book not found</p>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        <div className="flex-shrink-0 w-40 sm:w-48 mx-auto sm:mx-0">
          {book.coverImage ? (
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full aspect-[2/3] object-cover rounded-xl shadow-lg"
            />
          ) : (
            <div className="w-full aspect-[2/3] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 font-display">
            {book.title}
          </h1>

          {book.authors && book.authors.length > 0 && (
            <p className="text-lg text-gray-600 dark:text-gray-300">
              by{' '}
              {book.authors.map((author, i) => (
                <span key={author}>
                  {i > 0 && ', '}
                  <span className="text-brand-600 dark:text-brand-400 hover:underline">
                    {author}
                  </span>
                </span>
              ))}
            </p>
          )}

          {book.averageRating > 0 && (
            <StarRating rating={book.averageRating} size="md" count={book.ratingsCount} />
          )}

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            {book.publisher && (
              <span>Published by {book.publisher}</span>
            )}
            {book.publishedDate && (
              <span>{book.publishedDate}</span>
            )}
            {book.pageCount > 0 && (
              <span>{book.pageCount} pages</span>
            )}
          </div>

          {book.isbn13 && (
            <p className="text-xs text-gray-400 dark:text-gray-500">
              ISBN-13: {book.isbn13}
              {book.isbn10 && <> | ISBN-10: {book.isbn10}</>}
            </p>
          )}

          {book.categories && book.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {book.categories.map((cat) => (
                <Link
                  key={cat}
                  to={`/search?genre=${cat.toLowerCase().replace(/\s+/g, '_')}`}
                  className="px-3 py-1 text-xs rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {book.description && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">About this book</h2>
          <div
            className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: book.description }}
          />
        </section>
      )}
    </div>
  )
}
