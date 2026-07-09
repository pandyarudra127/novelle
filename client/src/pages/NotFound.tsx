import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-heading font-bold text-gray-200 dark:text-gray-800">
          404
        </h1>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
          Page not found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block py-2.5 px-6 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
