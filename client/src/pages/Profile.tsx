import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../lib/axios'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const { user, logout, updateUser } = useAuth()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user?.name || '')
  const [bio, setBio] = useState(user?.bio || '')
  const [readingGoal, setReadingGoal] = useState(user?.readingGoal || 12)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState('')

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setMessage('')
    try {
      const res = await api.patch('/auth/profile', { name, bio, readingGoal })
      updateUser(res.data.user)
      setMessage('Profile updated!')
      setIsEditing(false)
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Failed to update')
    } finally {
      setIsSaving(false)
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (!user) return null

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center text-2xl font-bold text-brand-600 shrink-0">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-50">
              {user.name}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @{user.username}
            </p>
            {user.bio && (
              <p className="mt-2 text-gray-600 dark:text-gray-300">{user.bio}</p>
            )}
            <div className="flex gap-4 mt-3">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                📚 {user.readingGoal || 0} books goal
              </span>
              {user.emailVerified ? (
                <span className="text-sm text-green-600">✅ Verified</span>
              ) : (
                <span className="text-sm text-amber-600">⚠️ Not verified</span>
              )}
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        <div className="flex gap-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 dark:text-gray-50">0</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Books</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 dark:text-gray-50">0</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 dark:text-gray-50">0</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 dark:text-gray-50">0</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Following</div>
          </div>
        </div>
      </div>

      {isEditing && (
        <form
          onSubmit={handleSave}
          className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-4"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Edit profile
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Annual reading goal
            </label>
            <input
              type="number"
              value={readingGoal}
              onChange={(e) => setReadingGoal(parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
          {message && (
            <p className={`text-sm ${message.includes('!') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          <button
            type="submit"
            disabled={isSaving}
            className="py-2.5 px-6 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-medium rounded-lg transition-colors"
          >
            {isSaving ? 'Saving...' : 'Save changes'}
          </button>
        </form>
      )}

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Account
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Email: {user.email}
        </p>
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
        >
          Sign out
        </button>
      </div>
    </div>
  )
}
