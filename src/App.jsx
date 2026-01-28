import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import FacebookLogin from 'react-facebook-login-lite'
import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ericaMain from './assets/erica-main.jpg'
import ericaJoi from './assets/erica-joi.jpg'
import ericaTheFace from './assets/erica-the-face.jpg'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login successs:', credentialResponse)
    setUser(credentialResponse)
  }

  const handleGoogleFailure = (error) => {
    console.error('Google login failed:', error)
  }

  const handleFacebookResponse = (response) => {
    console.log('Facebook login success:', response)
    setUser(response)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 10,
  }

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="app-container">
        <nav className="navbar">
          <div className="logo-text">Yes, I am Erica</div>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              console.log('Google login failed')
            }}
            render={(renderProps) => (
              <button
                className="cta-btn"
                style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Login
              </button>
            )}
          />
        </nav>

        <main>
          {/* Hero Section with Carousel */}
          <section className="hero-section">
            <Slider {...settings} className="hero-slider">
              <div className="hero-slide">
                <div className="hero-image-container">
                  <img
                    src={ericaMain}
                    alt="Erica's Secret Garden"
                    className="hero-image"
                  />
                  <div className="hero-overlay"></div>
                  <div className="hero-content">
                    <span className="hero-subtitle">Erica's Secret Garden</span>
                    <h1>Step into my world of exclusive content</h1>
                    <p>
                      Behind-the-scenes access and intimate moments you won't
                      find anywhere else.
                    </p>
                    <div className="hero-buttons">
                      <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={() => {
                          console.log('Google login failed')
                        }}
                        render={(renderProps) => (
                          <button
                            className="cta-btn"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                          >
                            Enter Now
                          </button>
                        )}
                      />
                      <FacebookLogin
                        appId="YOUR_FACEBOOK_APP_ID"
                        onSuccess={handleFacebookResponse}
                        onFailure={() => {
                          console.log('Facebook login failed')
                        }}
                        render={(renderProps) => (
                          <button
                            className="cta-btn secondary"
                            onClick={renderProps.onClick}
                          >
                            Free Preview
                          </button>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-slide">
                <div className="hero-image-container">
                  <img
                    src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=2000&auto=format&fit=crop"
                    alt="Valentine's Exclusive"
                    className="hero-image"
                  />
                  <div className="hero-overlay"></div>
                  <div className="hero-content">
                    <span className="hero-subtitle">Valentine's Exclusive</span>
                    <h1>Get my limited-time customized video package</h1>
                    <p>A personal gift that keeps on giving.</p>
                    <div className="hero-buttons">
                      <button className="cta-btn">
                        Get Your Private Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-slide">
                <div className="hero-image-container">
                  <img
                    src={ericaJoi}
                    alt="Instructional Video Call"
                    className="hero-image"
                  />
                  <div className="hero-overlay"></div>
                  <div className="hero-content">
                    <span className="hero-subtitle">
                      Instructional Video Call
                    </span>
                    <h1>Book a live 1-on-1 session</h1>
                    <p>Interactive, intense, and unforgettable.</p>
                    <div className="hero-buttons">
                      <button className="cta-btn">Book Session Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </section>

          {/* About Section */}
          <section
            className="about-section"
            style={{
              padding: '8rem 5%',
              background: 'linear-gradient(to bottom, #0a0a0a, #141414)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '4rem',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              <div
                className="glass-panel"
                style={{
                  padding: '0.5rem',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  aspectRation: '1/1',
                }}
              >
                <img
                  src={ericaTheFace}
                  alt="Erica Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px',
                  }}
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
                <div
                  style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '2rem',
                        color: 'var(--color-accent-gold)',
                        fontWeight: 'bold',
                      }}
                    >
                      500+
                    </div>
                    <p
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.9rem',
                      }}
                    >
                      Exclusive Posts
                    </p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '2rem',
                        color: 'var(--color-accent-gold)',
                        fontWeight: 'bold',
                      }}
                    >
                      daily
                    </div>
                    <p
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.9rem',
                      }}
                    >
                      Updates
                    </p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '2rem',
                        color: 'var(--color-accent-gold)',
                        fontWeight: 'bold',
                      }}
                    >
                      1-on-1
                    </div>
                    <p
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.9rem',
                      }}
                    >
                      DM Connection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Preview */}
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

          {/* Pricing Section */}
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
          {/* FAQ Section */}
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
        </main>

        <footer
          style={{
            padding: '6rem 5% 4rem',
            textAlign: 'center',
            backgroundColor: '#050505',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <div className="logo-text">Yes, I am Erica</div>

          <div
            className="footer-nav"
            style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              marginBottom: '3rem',
              flexWrap: 'wrap',
            }}
          >
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">DMCA</a>
            <a href="#">2257 Compliance</a>
            <a href="#">Contact Support</a>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            <a
              href="https://www.instagram.com/yes_iam_erica101/"
              target="_blank"
              rel="noreferrer"
              className="cta-btn"
              style={{
                padding: '0.8rem',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              IG
            </a>
            <a
              href="#"
              className="cta-btn"
              style={{
                padding: '0.8rem',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              X
            </a>
            <a
              href="#"
              className="cta-btn"
              style={{
                padding: '0.8rem',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              OF
            </a>
          </div>

          <p
            style={{
              marginTop: '3rem',
              fontSize: '0.8rem',
              color: '#444',
              maxWidth: '600px',
              margin: '3rem auto 0',
            }}
          >
            &copy; 2026 yes_iam_erica. All Content Copyrighted. Unauthorized
            use, distribution or duplication of any material on this website is
            strictly prohibited. 18+ Only.
          </p>
        </footer>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
