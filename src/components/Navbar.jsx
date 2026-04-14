import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['Home', 'Features', 'Pricing', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <span className="nav-logo">NEURA<span>FINANCE</span></span>

      <button
        className="nav-hamburger"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span /><span /><span />
      </button>

      <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
        {links.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a href="#hero" className="nav-cta" onClick={() => setMenuOpen(false)}>
          Get Started
        </a>
      </nav>
    </header>
  );
}
