'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Sync icon with the theme the inline layout script already applied
  useEffect(() => {
    setDark(document.body.classList.contains('dark-theme'));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      for (const { id } of NAV_LINKS) {
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.offsetTop - 120;
        if (y >= top && y < top + section.offsetHeight) {
          setActiveId(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.body.classList.toggle('dark-theme', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Mahesh<span>.</span>
        </a>

        <div className={`nav__menu${menuOpen ? ' show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {NAV_LINKS.map(({ id, label }) => (
              <li className="nav__item" key={id}>
                <a
                  href={`#${id}`}
                  className={`nav__link${activeId === id ? ' active-link' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__close" id="nav-close" onClick={() => setMenuOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div className="nav__buttons">
          <button
            className="theme-toggle"
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen(true)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
