interface StarRatingProps {
  rating: number
  size?: 'sm' | 'md' | 'lg'
  showNumber?: boolean
  count?: number
}

export default function StarRating({ rating, size = 'sm', showNumber = true, count }: StarRatingProps) {
  const sizeClasses = { sm: 'text-sm', md: 'text-lg', lg: 'text-2xl' }

  return (
    <div className="flex items-center gap-1.5">
      <span className={`${sizeClasses[size]} text-amber-400`}>
        {'★'.repeat(Math.floor(rating))}
        {rating % 1 >= 0.5 ? '½' : ''}
      </span>
      {showNumber && (
        <span className={`${size === 'lg' ? 'text-lg' : 'text-xs'} font-medium text-gray-600 dark:text-gray-400`}>
          {rating.toFixed(1)}
        </span>
      )}
      {count !== undefined && (
        <span className="text-xs text-gray-400 dark:text-gray-500">
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  )
}
