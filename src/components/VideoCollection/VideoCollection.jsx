import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './VideoCollection.css'

function VideoCollection({ onNavigate }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="video-collection-page">
        <h2 className="section-title">Video Collection</h2>
        <div className="video-grid">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="video-card glass-panel">
                    <div className="video-thumbnail">
                        <div className="play-btn">▶</div>
                    </div>
                    <div className="video-info">
                        <h3>Premium Scene #{i}</h3>
                        <p>15 mins • 4K HD</p>
                        <button className="cta-btn small">Unlock Now</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default VideoCollection
