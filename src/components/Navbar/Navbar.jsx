import React, { useState } from 'react'
import './Navbar.css'

function Navbar({ onLoginClick, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (view) => {
    if (onNavigate) onNavigate(view)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-text" onClick={() => handleNavClick('home')}>
          Yes, I am Erica
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a onClick={() => handleNavClick('home')}>Home</a>
          <a onClick={() => handleNavClick('photo-gallery')}>Photo Gallery</a>
          <a onClick={() => handleNavClick('video-collection')}>Video Collection</a>
          <a onClick={() => handleNavClick('merchandise')}>Merchandise</a>
          <button
            className="cta-btn mobile-only-btn"
            onClick={() => {
                onLoginClick()
                setIsMobileMenuOpen(false)
            }}
          >
            Login
          </button>
        </div>

        <div className="right-section">
            <button
                className="cta-btn desktop-only-btn"
                style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                onClick={onLoginClick}
            >
                Login
            </button>
            <div 
                className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
