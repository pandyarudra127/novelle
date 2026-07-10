import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/discover', label: 'Discover' },
  { to: '/search', label: 'Search' },
  { to: '/shelves', label: 'My Books' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/goals', label: 'Goals' },
  { to: '/clubs', label: 'Clubs' },
  { to: '/ai', label: 'AI' },
  { to: '/collections', label: 'Collections' },
  { to: '/settings', label: 'Settings' },
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
            {link.label}
          </Link>
        )
      })}
    </aside>
  )
}
