import React from 'react'
import './Gallery.css'

function Gallery() {
  return (
    <section className="gallery-preview">
      <h2 className="section-title">The Exclusive Vault</h2>
      <p>Locked content available for members only</p>
      <div className="gallery-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="gallery-item">
            <img
              src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop`}
              alt="Preview"
            />
            <div className="locked-overlay">
              <div className="locked-icon">🔒</div>
              <p style={{ fontWeight: '600', letterSpacing: '1px' }}>
                PREMIUM POST #{i}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
