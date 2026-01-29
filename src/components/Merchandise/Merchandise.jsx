import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Merchandise.css'

function Merchandise({ onNavigate }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="merch-page">
        <h2 className="section-title">Official Merchandise</h2>
        <div className="merch-grid">
            {[1, 2, 3].map(i => (
                <div key={i} className="merch-card glass-panel">
                    <div className="merch-image-placeholder">
                        IMAGE
                    </div>
                    <div className="merch-info">
                        <h3>"Yes, I Am Erica" Hoodie</h3>
                        <p>$59.99</p>
                        <button className="cta-btn small">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Merchandise
