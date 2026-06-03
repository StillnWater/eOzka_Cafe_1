import React, { useState, useEffect } from 'react'

const BookVisit = ({ triggerToast, setShowConfirmModal, setConfirmedBooking }) => {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('eozka_bookings')
    return saved ? JSON.parse(saved) : []
  })

  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '09:00 AM',
    partySize: 2
  })

  useEffect(() => {
    localStorage.setItem('eozka_bookings', JSON.stringify(bookings))
  }, [bookings])

  const handleBookingChange = (e) => {
    const { name, value } = e.target
    setBookingForm(prev => ({ ...prev, [name]: value }))
  }

  const adjustPartySize = (amount) => {
    setBookingForm(prev => ({
      ...prev,
      partySize: Math.max(1, Math.min(12, prev.partySize + amount))
    }))
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (!bookingForm.name || !bookingForm.email || !bookingForm.phone || !bookingForm.date) {
      alert('Please fill out all fields.')
      return
    }
    const newBooking = { ...bookingForm, id: Date.now() }
    setBookings(prev => [newBooking, ...prev])
    setConfirmedBooking(newBooking)
    setShowConfirmModal(true)
    
    // Reset form
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '09:00 AM',
      partySize: 2
    })
  }

  const handleCancelBooking = (id) => {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
      setBookings(prev => prev.filter(b => b.id !== id))
      triggerToast('Reservation cancelled successfully.')
    }
  }

  return (
    <div className="page-container container tab-content">
      <div className="section-header">
        <h1 className="section-title">Book a Visit</h1>
        <p className="section-desc">Reserve a table for your special moments, business discussions, or relaxed mornings.</p>
      </div>

      <div className="booking-grid">
        {/* Form Box */}
        <div className="booking-form-box">
          <h2 className="form-title">Reserve a Table</h2>
          <form onSubmit={handleBookingSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  value={bookingForm.name} 
                  onChange={handleBookingChange} 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  className="form-control" 
                  value={bookingForm.email} 
                  onChange={handleBookingChange} 
                  placeholder="john@example.com" 
                  required 
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  className="form-control" 
                  value={bookingForm.phone} 
                  onChange={handleBookingChange} 
                  placeholder="+91 12345-12345" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Date of Visit</label>
                <input 
                  type="date" 
                  name="date" 
                  className="form-control" 
                  value={bookingForm.date} 
                  onChange={handleBookingChange} 
                  min={new Date().toISOString().split('T')[0]}
                  required 
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label>Time Slot</label>
                <select 
                  name="time" 
                  className="form-control" 
                  value={bookingForm.time} 
                  onChange={handleBookingChange}
                >
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                  <option value="09:00 PM">09:00 PM</option>
                </select>
              </div>
              <div className="form-group">
                <label>Number of Guests</label>
                <div className="stepper-input">
                  <button type="button" className="stepper-btn" onClick={() => adjustPartySize(-1)}>−</button>
                  <div className="stepper-value">{bookingForm.partySize}</div>
                  <button type="button" className="stepper-btn" onClick={() => adjustPartySize(1)}>+</button>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              Confirm Reservation
            </button>
          </form>
        </div>

        {/* Booking List Box */}
        <div className="booking-list-box">
          <h3 className="booking-list-title">My Bookings</h3>
          <div className="booking-cards-container">
            {bookings.length === 0 ? (
              <div className="empty-bookings-state">
                No current bookings saved on this device.
              </div>
            ) : (
              bookings.map(b => (
                <div key={b.id} className="booking-item-card">
                  <div className="booking-item-name">{b.name}</div>
                  <div className="booking-item-details">
                    <span><strong>Date:</strong> {b.date}</span>
                    <span><strong>Time:</strong> {b.time}</span>
                    <span><strong>Guests:</strong> {b.partySize}</span>
                    <span><strong>Phone:</strong> {b.phone}</span>
                  </div>
                  <button className="booking-cancel-btn" onClick={() => handleCancelBooking(b.id)}>
                    Cancel
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookVisit