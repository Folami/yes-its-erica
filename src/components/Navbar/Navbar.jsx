import React from 'react'
import './Navbar.css'

function Navbar({ onLoginClick }) {
  return (
    <nav className="navbar">
      <div className="logo-text">Yes, I am Erica</div>
      <button
        className="cta-btn"
        style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
        onClick={onLoginClick}
      >
        Login
      </button>
    </nav>
  )
}

export default Navbar
