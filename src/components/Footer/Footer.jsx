import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="logo-text">Yes, I am Erica</div>

      <div className="footer-nav">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">DMCA</a>
        <a href="#">2257 Compliance</a>
        <a href="#">Contact Support</a>
      </div>

      <div className="social-links">
        <a
          href="https://www.instagram.com/yes_iam_erica101/"
          target="_blank"
          rel="noreferrer"
          className="cta-btn social-btn"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="#" className="cta-btn social-btn" aria-label="X (Twitter)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
          </svg>
        </a>
        <a href="#" className="cta-btn social-btn" aria-label="OnlyFans">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
          </svg>
        </a>
      </div>

      <p className="copyright">
        &copy; 2026 yes_iam_erica. All Content Copyrighted. Unauthorized
        use, distribution or duplication of any material on this website is
        strictly prohibited. 18+ Only.
      </p>
    </footer>
  )
}

export default Footer
