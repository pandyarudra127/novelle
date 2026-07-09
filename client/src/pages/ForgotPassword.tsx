import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../lib/axios'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      await api.post('/auth/forgot-password', { email })
      setSent(true)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-950">
        <div className="w-full max-w-sm text-center space-y-4">
          <div className="text-4xl">📧</div>
          <h1 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-50">
            Check your email
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            If an account exists with {email}, we've sent a password reset link.
          </p>
          <Link
            to="/login"
            className="inline-block py-2.5 px-6 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
          >
            Back to login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <Link to="/" className="text-2xl font-heading font-bold text-brand-600">
            Novelle
          </Link>
          <h1 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-50 mt-4">
            Forgot password?
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isLoading && <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />}
            Send reset link
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Remember your password?{' '}
          <Link to="/login" className="text-brand-600 hover:text-brand-700 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
