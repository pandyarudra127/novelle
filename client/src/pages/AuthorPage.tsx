import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '@/lib/axios'
import BookCard from '@/components/ui/BookCard'

interface AuthorData {
  id: string
  name: string
  bio: string
  image: string
  birthDate?: string
  deathDate?: string
  books: Array<{
    id: string
    title: string
    coverImage: string
    averageRating: number
  }>
}

export default function AuthorPage() {
  const { authorName } = useParams<{ authorName: string }>()
  const [author, setAuthor] = useState<AuthorData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!authorName) return
    const name = authorName as string
    async function fetchAuthor() {
      setLoading(true)
      setError('')
      try {
        const { data } = await api.get(`/books/search?author=${encodeURIComponent(name)}&limit=20`)
        setAuthor({
          id: name,
          name,
          bio: '',
          image: '',
          books: (data.books || []).map((b: any) => ({
            id: b.id,
            title: b.title,
            coverImage: b.coverImage,
            averageRating: b.averageRating,
          })),
        })
      } catch {
        setError('Failed to load author details.')
      } finally {
        setLoading(false)
      }
    }
    fetchAuthor()
  }, [authorName])

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {loading && (
        <div className="flex gap-6">
          <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
          <div className="flex-1 space-y-3">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
          </div>
        </div>
      )}

      {error && <p className="text-red-500 text-center">{error}</p>}

      {author && !loading && (
        <>
          <div className="flex items-center gap-6">
            {author.image ? (
              <img src={author.image} alt={author.name} className="w-32 h-32 rounded-full object-cover shadow-lg" />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-800 dark:to-brand-700 flex items-center justify-center text-3xl font-bold text-brand-600 dark:text-brand-300">
                {author.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 font-display">{author.name}</h1>
              {author.bio && <p className="mt-2 text-gray-600 dark:text-gray-400">{author.bio}</p>}
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Books by {author.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {author.books.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  coverImage={book.coverImage}
                  averageRating={book.averageRating}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
