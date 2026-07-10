import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '@/lib/axios'
import BookCard from '@/components/ui/BookCard'
import { SearchResultsSkeleton } from '@/components/ui/Skeleton'

interface GenreInfo {
  name: string
  slug: string
  description: string
}

interface BrowseResponse {
  status: string
  genre: GenreInfo
  books: Array<{
    id: string
    title: string
    authors: string[]
    coverImage: string
    averageRating: number
    ratingsCount: number
  }>
  totalItems: number
  page: number
}

export default function BrowseGenre() {
  const { slug } = useParams<{ slug: string }>()
  const [data, setData] = useState<BrowseResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchGenre() {
      if (!slug) return
      setLoading(true)
      setError('')
      try {
        const { data: res } = await api.get<BrowseResponse>(`/books/genre/${slug}?page=${page}&limit=20`)
        setData(res)
      } catch {
        setError('Failed to load genre.')
      } finally {
        setLoading(false)
      }
    }
    fetchGenre()
  }, [slug, page])

  const totalPages = data ? Math.ceil(data.totalItems / 20) : 0

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {loading && <SearchResultsSkeleton />}

      {error && (
        <div className="text-center py-12">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {data && !loading && (
        <>
          <div className="space-y-2">
            <Link
              to="/discover"
              className="text-sm text-brand-600 dark:text-brand-400 hover:underline"
            >
              &larr; Back to Discover
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 font-display">
              {data.genre.name}
            </h1>
            {data.genre.description && (
              <p className="text-gray-500 dark:text-gray-400">{data.genre.description}</p>
            )}
          </div>

          {data.books.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No books found in this genre.</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500">{data.totalItems.toLocaleString()} books</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data.books.map((book) => (
                  <BookCard
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.authors?.[0]}
                    coverImage={book.coverImage}
                    averageRating={book.averageRating}
                    ratingsCount={book.ratingsCount}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 pt-4">
                  <button
                    disabled={page <= 1}
                    onClick={() => setPage((p) => p - 1)}
                    className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Previous
                  </button>
                  <span className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    disabled={page >= totalPages}
                    onClick={() => setPage((p) => p + 1)}
                    className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}
