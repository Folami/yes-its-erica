import React from 'react'
import ericaTheFace from '../../assets/erica-the-face.jpg'
import './About.css'

function About() {
  return (
    <section className="about-section">
      <div className="about-content-grid">
        <div className="glass-panel profile-container">
          <img
            src={ericaTheFace}
            alt="Erica Profile"
            className="profile-image"
          />
        </div>
        <div>
          <h2 className="section-title">The Vixen Behind the Lens</h2>
          <p>
            Hey loves, I'm Erica. Most know me from Instagram, but this is
            where the real fun happens. I created this garden to share the
            pieces of myself that are too hot for social media. Expect
            daily updates, raw conversations, and a community where we can
            truly connect.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <p className="stat-label">Exclusive Posts</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">daily</div>
              <p className="stat-label">Updates</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">1-on-1</div>
              <p className="stat-label">DM Connection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
