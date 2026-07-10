import { Link } from 'react-router-dom'

interface BookCardProps {
  id: string
  title: string
  author?: string
  coverImage?: string
  averageRating?: number
  ratingsCount?: number
  sourceId?: string
}

export default function BookCard({ id, title, author, coverImage, averageRating, sourceId }: BookCardProps) {
  const bookId = id || sourceId
  return (
    <Link
      to={`/books/${bookId}`}
      className="group flex-shrink-0 w-36 sm:w-40 space-y-2"
    >
      <div className="aspect-[2/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-shadow">
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        )}
      </div>
      <div className="space-y-0.5">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-50 line-clamp-2 leading-tight">
          {title}
        </p>
        {author && (
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {author}
          </p>
        )}
        {averageRating !== undefined && averageRating > 0 && (
          <div className="flex items-center gap-1">
            <span className="text-amber-500 text-xs">{'★'.repeat(Math.round(averageRating))}</span>
            <span className="text-xs text-gray-400">{averageRating.toFixed(1)}</span>
          </div>
        )}
      </div>
    </Link>
  )
}
