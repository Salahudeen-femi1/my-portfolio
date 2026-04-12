import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItmes } from '../lib/navItems';

export default function Topnav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 sticky bg-primary top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <p className="font-medium text-2xl text-white">SA.</p>
        </Link>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/20 text-white hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <div className="flex flex-col gap-1">
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>

          <ul className="hidden md:flex items-center gap-16">
            {navItmes.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm transition-all duration-300 hover:font-semibold ${isActive ? 'border-b pb-2 text-purple-500' : 'text-white'}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navItmes.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm transition-all duration-300 ${isActive ? 'text-purple-500 font-semibold' : 'text-white hover:text-purple-200'}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
