import React, { useState } from 'react'
import './BookingModal.css'

function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null

  // Native date/time state
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Request sent for ${date} at ${time}. We will contact you shortly!`)
    onClose()
  }

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal-content glass-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="premium-font">Book Your Session</h2>
        <p>1-on-1 Instructional Video Call</p>
        
        <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
                <label>Select Date</label>
                <input 
                    type="date" 
                    required 
                    className="styled-input"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Select Time</label>
                <select 
                    required 
                    className="styled-input"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                >
                    <option value="">Choose a slot</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                </select>
            </div>

            <div className="form-group">
                <label>Special Requests</label>
                <textarea className="styled-input" rows="3" placeholder="Tell me what you want to learn..."></textarea>
            </div>

            <button type="submit" className="cta-btn full-width">Confirm Booking Request</button>
        </form>
      </div>
    </div>
  )
}

export default BookingModal
