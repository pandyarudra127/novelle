export default function Search() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
          placeholder="Search by title, author, or ISBN..."
        />
        <svg
          className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="flex gap-2 flex-wrap">
        {['Trending', 'New Releases', 'Award Winners', 'Classics'].map(
          (tag) => (
            <button
              key={tag}
              className="px-3 py-1.5 text-sm rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {tag}
            </button>
          ),
        )}
      </div>

      <div className="text-center py-12">
        <p className="text-gray-400 dark:text-gray-500">
          Start typing to search for books
        </p>
      </div>
    </div>
  )
}
