export function BookCardSkeleton() {
  return (
    <div className="flex-shrink-0 w-36 sm:w-40 space-y-2 animate-pulse">
      <div className="aspect-[2/3] rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
    </div>
  )
}

export function BookDetailsSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="flex gap-8">
        <div className="w-48 aspect-[2/3] rounded-lg bg-gray-200 dark:bg-gray-700" />
        <div className="flex-1 space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
      </div>
    </div>
  )
}

export function SearchResultsSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <BookCardSkeleton key={i} />
      ))}
    </div>
  )
}
