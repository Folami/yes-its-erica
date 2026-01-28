import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ericaMain from '../../assets/erica-main.jpg'
import ericaJoi from '../../assets/erica-joi.jpg'
import ericaGardenMobile from '../../assets/erica-garden-mobile.jpg'
import ericaJoiMobile from '../../assets/erica-joi-mobile.jpg'
// Note: erica-val-mobile.jpg file existence not confirmed in listing, using placeholder or check if user meant another file. 
// Assuming naming convention 'erica-val-mobile.jpg' for now, or fallback to desktop image if import fails (though import failure breaks build).
// Given the user prompt, I will try to import it. If it fails, I'll need to fix it.
// Wait, I saw erica-garden-mobile.jpg and erica-joi-mobile.jpg within the dir list output?
// Let me double check the dir output I just got.
// . .. assets.js erica-garden-mobile.jpg erica-joi-mobile.jpg erica-joi.jpg erica-main.jpg erica-site-preview.jpg erica-the-face.jpg react.svg
// erica-val-mobile.jpg is NOT in the list. erica-val-mobile.jpgg was the user typo.
// I will import the ones I have. For the missing one, I will use the desktop one for mobile too for now to avoid build error, or a placeholder if I had one.
// Actually, looking at slide 2, it uses a unsplash URL! "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46..."
// User asked: "In slide 2 ... use "erica-val-mobile.jpgg" ... as the "hero-image"."
// Since the file is missing, I cannot import it. I will keep the unsplash image for desktop and maybe use it for mobile too, or add a comment.
// However, to fulfill the request as much as possible, I will add the import for the ones that exist.
// AND I will add a TODO or comment for the missing val mobile image.
import './Hero.css'

function Hero({ onLoginClick }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
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
                <button className="cta-btn secondary">
                  Free Preview
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-slide">
          <div className="hero-image-container">
             {/* Missing erica-val-mobile.jpg, using unsplash for both for now to prevent crash */}
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
