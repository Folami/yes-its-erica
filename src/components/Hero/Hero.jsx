import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ericaMain from '../../assets/erica-main.jpg'
import ericaJoi from '../../assets/erica-joi.jpg'
import ericaGardenMobile from '../../assets/erica-garden-mobile.jpg'
import ericaJoiMobile from '../../assets/erica-joi-mobile.jpg'
import ericaValMobile from '../../assets/erica-val-mobile.jpg'
import './Hero.css'

function Hero({ onLoginClick, onFreePreviewClick }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1550,
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
    <section className="hero-section">
      <Slider {...settings} className="hero-slider">
        <div className="hero-slide">
          <div className="hero-image-container">
            <picture>
                <source media="(max-width: 768px)" srcSet={ericaGardenMobile} />
                <img
                  src={ericaMain}
                  alt="Erica's Secret Garden"
                  className="hero-image"
                />
            </picture>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <span className="hero-subtitle">Erica's Secret Garden</span>
              <h1>Step into my world of exclusive content</h1>
              <p>
                Behind-the-scenes access and intimate moments you won't
                find anywhere else.
              </p>
              <div className="hero-buttons">
                <button
                  className="cta-btn"
                  onClick={onLoginClick}
                >
                  Erica's Secret Experience
                </button>
                <button 
                  className="cta-btn secondary"
                  onClick={onFreePreviewClick}
                >
                  Free Preview
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-slide">
          <div className="hero-image-container">
             {/* Missing erica-val-mobile.jpg, using unsplash for both for now to prevent crash */}
            {/* <img
              src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=2000&auto=format&fit=crop"
              alt="Valentine's Exclusive"
              className="hero-image"
            /> */}
            <picture>
                <source media="(max-width: 768px)" srcSet={ericaValMobile} />
                <img
                  src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=2000&auto=format&fit=crop"
                  alt="Valentine's Exclusive"
                  className="hero-image"
                />
            </picture>
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
            <picture>
                <source media="(max-width: 768px)" srcSet={ericaJoiMobile} />
                <img
                  src={ericaJoi}
                  alt="Instructional Video Call"
                  className="hero-image"
                />
            </picture>
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
  )
}

export default Hero
