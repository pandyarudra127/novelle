import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/search', label: 'Search', icon: '🔍' },
  { to: '/shelves', label: 'My Books', icon: '📖' },
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/goals', label: 'Goals', icon: '🎯' },
  { to: '/clubs', label: 'Clubs', icon: '👥' },
  { to: '/ai', label: 'AI', icon: '🤖' },
  { to: '/collections', label: 'Collections', icon: '📚' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="hidden lg:flex flex-col w-60 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4 gap-1">
      {links.map((link) => {
        const isActive = location.pathname === link.to
        return (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            <span>{link.icon}</span>
            {link.label}
          </Link>
        )
      })}
    </aside>
  )
}
