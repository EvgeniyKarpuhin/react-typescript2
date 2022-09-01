import React from 'react'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper indigo lighten-1 px1">
      <a href="/" className="brand-logo">React + TypeScript</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Список дел</a></li>
        <li><a href="/">О нас</a></li>
      </ul>
    </div>
  </nav>
)