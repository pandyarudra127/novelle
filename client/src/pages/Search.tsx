import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import api from '@/lib/axios'
import BookCard from '@/components/ui/BookCard'
import { SearchResultsSkeleton } from '@/components/ui/Skeleton'

interface BookResult {
  id: string
  title: string
  authors: string[]
  coverImage: string
  averageRating: number
  ratingsCount: number
  description: string
  categories: string[]
  publishedDate: string
}

interface SearchResponse {
  status: string
  books: BookResult[]
  totalItems: number
  page: number
}

const GENRES = [
  { value: '', label: 'All Genres' },
  { value: 'fiction', label: 'Fiction' },
  { value: 'science_fiction', label: 'Science Fiction' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'mystery', label: 'Mystery' },
  { value: 'romance', label: 'Romance' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'history', label: 'History' },
  { value: 'science', label: 'Science' },
  { value: 'biography', label: 'Biography' },
  { value: 'philosophy', label: 'Philosophy' },
  { value: 'self_help', label: 'Self-Help' },
]

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [results, setResults] = useState<SearchResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [inputValue, setInputValue] = useState(searchParams.get('q') || '')

  const q = searchParams.get('q') || ''
  const genre = searchParams.get('genre') || ''
  const sort = searchParams.get('sort') || 'relevance'
  const page = parseInt(searchParams.get('page') || '1', 10)

  const fetchResults = useCallback(async () => {
    if (!q.trim() && !genre) return
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams()
      if (q.trim()) params.set('q', q.trim())
      if (genre) params.set('genre', genre)
      if (sort !== 'relevance') params.set('sort', sort)
      if (page > 1) params.set('page', String(page))
      params.set('limit', '20')

      const { data } = await api.get<SearchResponse>(`/books/search?${params}`)
      setResults(data)
    } catch {
      setError('Failed to search books. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [q, genre, sort, page])

  useEffect(() => {
    if (q || genre) fetchResults()
  }, [fetchResults, q, genre])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (inputValue.trim()) params.set('q', inputValue.trim())
    if (genre) params.set('genre', genre)
    if (sort !== 'relevance') params.set('sort', sort)
    setSearchParams(params)
  }

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams)
    if (value) params.set(key, value)
    else params.delete(key)
    if (key !== 'page') params.delete('page')
    setSearchParams(params)
  }

  const totalPages = results ? Math.ceil(results.totalItems / 20) : 0

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
          placeholder="Search by title, author, or ISBN..."
        />
        <svg
          className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>

      <div className="flex gap-3 flex-wrap items-center">
        <select
          value={genre}
          onChange={(e) => updateParam('genre', e.target.value)}
          className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-brand-500 outline-none"
        >
          {GENRES.map((g) => (
            <option key={g.value} value={g.value}>{g.label}</option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => updateParam('sort', e.target.value)}
          className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-brand-500 outline-none"
        >
          <option value="relevance">Most Relevant</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      {loading && <SearchResultsSkeleton />}

      {error && (
        <div className="text-center py-8">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {results && !loading && (
        <>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {results.totalItems.toLocaleString()} results
            {q && <> for <span className="font-medium text-gray-700 dark:text-gray-200">&ldquo;{q}&rdquo;</span></>}
          </p>

          {results.books.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 dark:text-gray-500">No books found. Try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {results.books.map((book) => (
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
          )}

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 pt-4">
              <button
                disabled={page <= 1}
                onClick={() => updateParam('page', String(page - 1))}
                className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Previous
              </button>
              <span className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400">
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page >= totalPages}
                onClick={() => updateParam('page', String(page + 1))}
                className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {!results && !loading && !q && !genre && (
        <div className="text-center py-12">
          <p className="text-gray-400 dark:text-gray-500">Start typing to search for books</p>
        </div>
      )}
    </div>
  )
}
