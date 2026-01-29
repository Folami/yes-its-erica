import { GoogleOAuthProvider } from '@react-oauth/google'
import { useState } from 'react'
import './App.css'

// Components
import Home from './components/Home/Home'
import LoginModal from './components/LoginModal/LoginModal'
import FreePreview from './components/FreePreview/FreePreview'
import PhotoGallery from './components/PhotoGallery/PhotoGallery'
import VideoCollection from './components/VideoCollection/VideoCollection'
import Merchandise from './components/Merchandise/Merchandise'
import BookingModal from './components/BookingModal/BookingModal'

function App() {
  const [user, setUser] = useState(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [currentView, setCurrentView] = useState('home') // 'home', 'free-preview', 'photo-gallery', etc.

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login successs:', credentialResponse)
    setUser(credentialResponse)
  }

  const handleFacebookResponse = (response) => {
    console.log('Facebook login success:', response)
    setUser(response)
  }

  const navigateTo = (view) => {
      window.scrollTo(0,0)
      setCurrentView(view)
  }

  const renderContent = () => {
    switch (currentView) {
      case 'free-preview':
        return <FreePreview onNavigate={navigateTo} />
      case 'photo-gallery':
        return <PhotoGallery onNavigate={navigateTo} />
      case 'video-collection':
        return <VideoCollection onNavigate={navigateTo} />
      case 'merchandise':
        return <Merchandise onNavigate={navigateTo} />
      default:
        return (
          <Home 
            onLoginClick={() => setShowLoginModal(true)} 
            onFreePreviewClick={() => navigateTo('free-preview')}
            onBookSessionClick={() => setShowBookingModal(true)}
            onNavigate={navigateTo}
          />
        )
    }
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

        <BookingModal
            isOpen={showBookingModal}
            onClose={() => setShowBookingModal(false)}
        />
        
        {renderContent()}

      </div>
    </GoogleOAuthProvider>
  )
}

export default App

