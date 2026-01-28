import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import FacebookLogin from 'react-facebook-login-lite'
import './LoginModal.css'

function LoginModal({ isOpen, onClose, onGoogleSuccess, onFacebookResponse }) {
  if (!isOpen) return null

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-content glass-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Join My Inner Circle</h2>
        <p>Login to access exclusive content</p>
        
        <div className="modal-login-buttons">
          <div className="google-login-wrapper">
            <GoogleLogin
              onSuccess={(response) => {
                onGoogleSuccess(response)
                onClose()
              }}
              onError={() => console.log('Google login failed')}
              theme="filled_black"
              shape="pill"
              text="continue_with"
            />
          </div>
          
          <div className="separator"><span>OR</span></div>
          
          <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"
            onSuccess={(response) => {
              onFacebookResponse(response)
              onClose()
            }}
            onFailure={() => console.log('Facebook login failed')}
            render={(renderProps) => (
              <button
                className="facebook-btn"
                onClick={renderProps.onClick}
              >
                Continue with Facebook
              </button>
            )}
          />
        </div>
        <p className="modal-footer">
          By joining, you verify you are 18+ and agree to our Terms.
        </p>
      </div>
    </div>
  )
}

export default LoginModal
