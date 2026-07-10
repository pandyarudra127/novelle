import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '@/lib/axios'
import BookCard from '@/components/ui/BookCard'
import { BookCardSkeleton } from '@/components/ui/Skeleton'

interface BookData {
  id: string
  title: string
  authors: string[]
  coverImage: string
  averageRating: number
  ratingsCount: number
}

interface GenreData {
  name: string
  slug: string
  description: string
  children?: GenreData[]
}

export default function Discover() {
  const [trending, setTrending] = useState<BookData[]>([])
  const [newReleases, setNewReleases] = useState<BookData[]>([])
  const [genres, setGenres] = useState<GenreData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [trendingRes, newRes, genresRes] = await Promise.all([
          api.get('/books/trending'),
          api.get('/books/new-releases'),
          api.get('/books/genres'),
        ])
        setTrending(trendingRes.data.books || [])
        setNewReleases(newRes.data.books || [])
        setGenres(genresRes.data.genres || [])
      } catch {
        // partial failure ok
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 font-display">Discover</h1>
        <p className="text-gray-500 dark:text-gray-400">Explore trending books, new releases, and browse by genre.</p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Trending Now</h2>
          <Link to="/search?sort=relevance" className="text-sm text-brand-600 dark:text-brand-400 hover:underline">View all</Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <BookCardSkeleton key={i} />)
            : trending.map((book) => (
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
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">New Releases</h2>
          <Link to="/search?sort=newest" className="text-sm text-brand-600 dark:text-brand-400 hover:underline">View all</Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <BookCardSkeleton key={i} />)
            : newReleases.map((book) => (
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
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Browse by Genre</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {genres.map((genre) => (
            <Link
              key={genre.slug}
              to={`/genre/${genre.slug}`}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-sm transition-all"
            >
              <h3 className="font-medium text-gray-900 dark:text-gray-50">{genre.name}</h3>
              {genre.description && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{genre.description}</p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
