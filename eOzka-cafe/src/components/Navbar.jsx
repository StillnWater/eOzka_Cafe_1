import React, { useState } from 'react'
import { Moon, SunMedium } from 'lucide-react'

const Navbar = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (tab) => {
    setActiveTab(tab)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo" onClick={() => handleNavClick('home')}>
          e<span>Ozka</span> Cafe
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <span
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeTab === 'menu' ? 'active' : ''}`}
              onClick={() => handleNavClick('menu')}
            >
              Menu
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeTab === 'book' ? 'active' : ''}`}
              onClick={() => handleNavClick('book')}
            >
              Book Visit
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => handleNavClick('reviews')}
            >
              Reviews
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </span>
          </li>
        </ul>

        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle dark/light theme"
          id="theme-toggle"
        >
          {theme === 'dark' ? (
            <SunMedium size={18} strokeWidth={1.8} />
          ) : (
            <Moon size={18} strokeWidth={1.8} />
          )}
        </button>

        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar