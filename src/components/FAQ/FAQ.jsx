import React from 'react'
import './FAQ.css'

function FAQ() {
  return (
    <section className="faq-section">
      <h2 className="section-title">Common Questions</h2>
      <div className="faq-grid">
        <div className="faq-item">
          <h4>Is billing discreet?</h4>
          <p>
            Yes, all charges appear as "EB * Digital Content" on your
            statement to ensure your privacy.
          </p>
        </div>
        <div className="faq-item">
          <h4>What content is included?</h4>
          <p>
            Depending on your tier, you'll get access to exclusive photos,
            videos, and direct messaging that isn't shared anywhere else.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I cancel anytime?</h4>
          <p>
            Absolutely. You have full control over your subscription
            through your account settings.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
