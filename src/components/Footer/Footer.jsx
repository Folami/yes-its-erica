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
        >
          IG
        </a>
        <a href="#" className="cta-btn social-btn">
          X
        </a>
        <a href="#" className="cta-btn social-btn">
          OF
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
