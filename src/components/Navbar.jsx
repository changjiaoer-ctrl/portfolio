import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ dark, setDark }) {
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-base font-semibold tracking-tight hover:opacity-60 transition-opacity"
        >
          GOOD IDEAS
        </Link>

        <div className="flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm transition-opacity ${
                pathname === to
                  ? 'opacity-100 font-medium'
                  : 'opacity-40 hover:opacity-100'
              }`}
            >
              {label}
            </Link>
          ))}

          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-sm"
          >
            {dark ? '☀' : '●'}
          </button>
        </div>
      </nav>
    </header>
  )
}
