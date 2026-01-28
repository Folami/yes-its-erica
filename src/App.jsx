import { GoogleOAuthProvider } from '@react-oauth/google'
import { useState } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import LoginModal from './components/LoginModal/LoginModal'

function App() {
  const [user, setUser] = useState(null)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login successs:', credentialResponse)
    setUser(credentialResponse)
  }

  const handleFacebookResponse = (response) => {
    console.log('Facebook login success:', response)
    setUser(response)
  }

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="app-container">
        <LoginModal 
          isOpen={showLoginModal} 
          onClose={() => setShowLoginModal(false)}
          onGoogleSuccess={handleGoogleSuccess}
          onFacebookResponse={handleFacebookResponse}
        />
        
        <Navbar onLoginClick={() => setShowLoginModal(true)} />

        <main>
          <Hero onLoginClick={() => setShowLoginModal(true)} />
          <About />
          <Gallery />
          <Pricing />
          <FAQ />
        </main>

        <Footer />
      </div>
    </GoogleOAuthProvider>
  )
}

export default App

