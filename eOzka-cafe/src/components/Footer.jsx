import React from 'react'

const Footer = ({ setActiveTab }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="logo" style={{ marginBottom: '16px' }}>e<span>Ozka</span> Cafe</div>
            <p className="footer-desc">Premium artisanal coffee shop offering selected micro-lot brews, fine teas, and freshly baked pastries daily.</p>
          </div>
          <div>
            <p style={{ fontWeight: '600', marginBottom: '8px', color: 'var(--accent)' }}>Quick Links</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('home')}>Home</span>
              <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('menu')}>Menu</span>
              <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('book')}>Book</span>
              <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('reviews')}>Reviews</span>
              <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('contact')}>Contact</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} eOzka Cafe. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="Facebook">f</a>
            <a href="#" className="social-link" aria-label="Instagram">ig</a>
            <a href="#" className="social-link" aria-label="Twitter">t</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer