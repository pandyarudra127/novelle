import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../lib/axios'

export default function VerifyEmail() {
  const { token } = useParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function verify() {
      try {
        const res = await api.get(`/auth/verify-email/${token}`)
        setMessage(res.data.message)
        setStatus('success')
      } catch (err: any) {
        setMessage(err.response?.data?.message || 'Verification failed')
        setStatus('error')
      }
    }
    verify()
  }, [token])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-sm text-center space-y-4">
        {status === 'loading' && (
          <>
            <div className="animate-spin h-8 w-8 border-4 border-brand-600 border-t-transparent rounded-full mx-auto" />
            <p className="text-gray-500 dark:text-gray-400">Verifying your email...</p>
          </>
        )}
        {status === 'success' && (
          <>
            <div className="text-4xl">✅</div>
            <h1 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-50">
              Email verified!
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{message}</p>
            <Link
              to="/login"
              className="inline-block py-2.5 px-6 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
            >
              Sign in
            </Link>
          </>
        )}
        {status === 'error' && (
          <>
            <div className="text-4xl">❌</div>
            <h1 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-50">
              Verification failed
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{message}</p>
            <Link
              to="/login"
              className="inline-block py-2.5 px-6 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
            >
              Back to login
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
