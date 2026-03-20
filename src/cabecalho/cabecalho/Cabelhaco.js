import React, { useState, useEffect } from 'react';
import './Cabecalho.css';

const Cabecalho = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header style={scrolled ? { background: 'rgba(5,5,16,0.97)' } : {}}>
      <div className="container">
        <a href="#hero" className="header-logo" onClick={handleLinkClick}>
          <div className="logo-icon">AT</div>
          <span className="logo-text">Auftek</span>
        </a>

        <div className={`menu-section${menuOpen ? ' on' : ''}`}>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <nav>
            <ul>
              <li><a href="#hero" onClick={handleLinkClick}>Início</a></li>
              <li><a href="#services" onClick={handleLinkClick}>Serviços</a></li>
              <li><a href="#about" onClick={handleLinkClick}>Sobre Nós</a></li>
              <li><a href="#contact" className="nav-cta" onClick={handleLinkClick}>Fale Conosco</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;
