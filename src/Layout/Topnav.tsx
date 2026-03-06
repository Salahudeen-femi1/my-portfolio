import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItmes } from '../lib/navItems';

export default function Topnav() {
  return (
    <nav className="w-full sticky bg-primary h-16 top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-around">
        <div>
          <p className='font-medium text-2xl text-white top-5'>SA.</p>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-6">
          {navItmes.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition-all duration-300 hover:font-semibold    ${isActive ? ' border-b pb-2 text-purple-500' : 'text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
