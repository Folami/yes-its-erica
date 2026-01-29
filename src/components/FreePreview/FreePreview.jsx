import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './FreePreview.css'

function FreePreview({ onNavigate, onBack }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="free-preview-page">
        <div className="preview-container">
          {/* <button className="back-btn" onClick={onBack}>← Back to Home</button> */}
          <h2 className="premium-font">Erica's Secret Preview</h2>
          <p>Unlock a glimpse into my world.</p>
          
          <div className="preview-grid">
            {/* Simulate locked blurry content */}
            {[1, 2, 3].map(i => (
              <div key={i} className="preview-card glass-panel">
                <div className="blur-overlay">
                    <span>NSFW Content</span>
                    <div className="lock-icon">🔒</div>
                </div>
                <img src={`https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?blur=100&w=400`} alt="Blurred" />
                <div className="card-footer">
                    <button className="cta-btn small">Unlock Full Video</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FreePreview
