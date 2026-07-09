export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-heading font-bold text-gray-900 dark:text-gray-50">
          Welcome back, Reader!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Track your reading journey, discover new books, and connect with fellow readers.
        </p>
      </section>

      <section className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
          2026 Reading Goal
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-brand-600 h-3 rounded-full"
              style={{ width: '0%' }}
            />
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            0 / 52 books
          </span>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Continue Reading
          </h2>
          <a href="/books" className="text-sm text-brand-600 hover:text-brand-700">
            View all
          </a>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            No books in progress. Search for a book to start reading.
          </p>
        </div>
      </section>
    </div>
  )
}
