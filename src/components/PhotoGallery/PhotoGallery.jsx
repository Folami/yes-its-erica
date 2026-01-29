import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './PhotoGallery.css'

function PhotoGallery({ onNavigate }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="photo-gallery-page">
        <h2 className="section-title">Exclusive Gallery</h2>
        <div className="gallery-grid-full">
            {/* Placeholder Grid */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className="gallery-card">
                    <img src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop`} alt={`Gallery ${i}`} />
                    <div className="overlay"><span>View Image</span></div>
                </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PhotoGallery
