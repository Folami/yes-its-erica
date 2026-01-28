import React from 'react'
import './Pricing.css'

function Pricing() {
  return (
    <section className="pricing">
      <h2 className="section-title">Choose Your Access</h2>
      <div className="pricing-grid">
        <div className="price-card glass-panel">
          <h3>Platinum</h3>
          <div className="price">
            $9.99<span>/mo</span>
          </div>
          <ul>
            <li>✓ Daily Photo Updates</li>
            <li>✓ Access to Public Posts</li>
            <li>✓ Basic DM Access</li>
          </ul>
          <button className="cta-btn">Select Plan</button>
        </div>

        <div className="price-card glass-panel popular">
          <h3>Gold</h3>
          <div className="price">
            $24.99<span>/mo</span>
          </div>
          <ul>
            <li>✓ Full Video Library</li>
            <li>✓ Early Access Content</li>
            <li>✓ Priority DM Response</li>
            <li>✓ Custom Requests Permitted</li>
          </ul>
          <button className="cta-btn">Go Gold</button>
        </div>

        <div className="price-card glass-panel">
          <h3>Diamond</h3>
          <div className="price">
            $49.99<span>/mo</span>
          </div>
          <ul>
            <li>✓ VIP Video Calls</li>
            <li>✓ Personalized Birthday Clip</li>
            <li>✓ 1-on-1 Chatting</li>
            <li>✓ All Access Pass</li>
          </ul>
          <button className="cta-btn">Get VIP</button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
