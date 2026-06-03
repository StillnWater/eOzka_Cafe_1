import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import BookVisit from './pages/BookVisit'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'

const App = () => {
  const [activeTab, setActiveTab] = useState('home')
  
  // Theme state switcher
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('eozka_theme')
    return saved || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('eozka_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }
  
  // Modals & Toast alerts state
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [confirmedBooking, setConfirmedBooking] = useState(null)
  const [toastMessage, setToastMessage] = useState('')

  const triggerToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }


  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />
      case 'menu':
        return <Menu />
      case 'book':
        return (
          <BookVisit 
            triggerToast={triggerToast} 
            setShowConfirmModal={setShowConfirmModal} 
            setConfirmedBooking={setConfirmedBooking} 
          />
        )
      case 'reviews':
        return <Reviews triggerToast={triggerToast} />
      case 'contact':
        return <Contact triggerToast={triggerToast} />
      default:
        return <Home setActiveTab={setActiveTab} />
    }
  }

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />

      <main style={{ minHeight: '80vh' }}>
        {renderContent()}
      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Shared Booking Confirmation Modal Overlay */}
      {showConfirmModal && confirmedBooking && (
        <div className="confirm-modal-overlay">
          <div className="confirm-modal-box">
            <h2 className="confirm-modal-title">Booking Confirmed!</h2>
            <p className="confirm-modal-desc">Thank you for reserving a table. We look forward to your visit.</p>
            
            <div className="confirm-details-list">
              <div className="confirm-detail-row">
                <span>Guest Name:</span>
                <span>{confirmedBooking.name}</span>
              </div>
              <div className="confirm-detail-row">
                <span>Date:</span>
                <span>{confirmedBooking.date}</span>
              </div>
              <div className="confirm-detail-row">
                <span>Time Slot:</span>
                <span>{confirmedBooking.time}</span>
              </div>
              <div className="confirm-detail-row">
                <span>Party Size:</span>
                <span>{confirmedBooking.partySize} {confirmedBooking.partySize === 1 ? 'person' : 'people'}</span>
              </div>
            </div>

            <button 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              onClick={() => setShowConfirmModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Shared Action Toast Alert Notification */}
      {toastMessage && (
        <div className="toast-alert">
          {toastMessage}
        </div>
      )}
    </>
  )
}

export default App