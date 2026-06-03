import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock3 } from 'lucide-react'

const Contact = ({ triggerToast }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert('Please fill out all fields.')
      return
    }
    setContactForm({ name: '', email: '', message: '' })
    triggerToast('Thank you! Your message has been sent.')
  }

  return (
    <div className="page-container container tab-content">
      <div className="section-header">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-desc">Reach out to us for events, reservations, feedback, or any queries.</p>
      </div>

      <div className="contact-grid">
        {/* Info columns */}
        <div className="contact-info-list">
          <div className="contact-info-item">
            <div className="contact-info-icon-wrapper">
              <MapPin size={18} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="contact-info-title">Our Address</h3>
              <p className="contact-info-text">123 Coffee Lane, Bean District, CA 90210</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon-wrapper">
              <Phone size={18} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="contact-info-title">Phone Number</h3>
              <p className="contact-info-text">+1 (234) 567-890</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon-wrapper">
              <Mail size={18} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="contact-info-title">Email Us</h3>
              <p className="contact-info-text">hello@eozka.cafe</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon-wrapper">
              <Clock3 size={18} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="contact-info-title">Working Hours</h3>
              <p className="contact-info-text">
                Mon–Fri: 7 AM – 10 PM
                <br />
                Sat–Sun: 8 AM – 11 PM
              </p>
            </div>
          </div>
        </div>

        {/* Message Box */}
        <div className="booking-form-box">
          <h2 className="form-title">Send a Message</h2>

          <form onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label>Your Name</label>

              <input
                type="text"
                className="form-control"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm(prev => ({
                    ...prev,
                    name: e.target.value
                  }))
                }
                placeholder="Jane Doe"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>

              <input
                type="email"
                className="form-control"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm(prev => ({
                    ...prev,
                    email: e.target.value
                  }))
                }
                placeholder="jane@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                className="form-control"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm(prev => ({
                    ...prev,
                    message: e.target.value
                  }))
                }
                placeholder="Type your message here..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Simulated Google Map */}
      <div style={{marginTop: '50px', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)'}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086438062828!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9d579568d!2sCafe!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg) grayscale(30%)'}}
          allowFullScreen=""
          loading="lazy"
          title="map">
          </iframe>
      </div>
    </div>
  )
}

export default Contact