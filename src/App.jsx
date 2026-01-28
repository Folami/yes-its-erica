import { GoogleOAuthProvider } from '@react-oauth/google'
import { useState } from 'react'
import './App.css'

// Components
import Home from './components/Home/Home'
import LoginModal from './components/LoginModal/LoginModal'
import FreePreview from './components/FreePreview/FreePreview'

function App() {
  const [user, setUser] = useState(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [currentView, setCurrentView] = useState('home') // 'home' or 'free-preview'

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login successs:', credentialResponse)
    setUser(credentialResponse)
  }

  const handleFacebookResponse = (response) => {
    console.log('Facebook login success:', response)
    setUser(response)
  }

  const renderContent = () => {
    switch (currentView) {
      case 'free-preview':
        return <FreePreview onBack={() => setCurrentView('home')} />
      default:
        return (
          <Home 
            onLoginClick={() => setShowLoginModal(true)} 
            onFreePreviewClick={() => setCurrentView('free-preview')}
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
        
        {renderContent()}

      </div>
    </GoogleOAuthProvider>
  )
}

export default App

