import React, { useState } from 'react'
import MENU_DATA from '../data/menuData'

const Menu = () => {
  const [activeMenuTab, setActiveMenuTab] = useState('Coffee')

  return (
    <div className="page-container container tab-content">
      <div className="section-header">
        <h1 className="section-title">Our Menu</h1>
        <p className="section-desc">Delight in our premium selections crafted with organic ingredients.</p>
      </div>
      
      {/* Category tabs */}
      <div className="menu-tabs">
        {Object.keys(MENU_DATA).map(category => (
          <button
            key={category}
            className={`menu-tab-btn ${activeMenuTab === category ? 'active' : ''}`}
            onClick={() => setActiveMenuTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="menu-items-grid">
        {MENU_DATA[activeMenuTab].map((item, index) => (
          <div key={index} className="menu-item-row">
            <div className="menu-item-details">
              <div className="menu-item-title-price">
                <span className="menu-item-name">{item.name}</span>
                <span className="menu-item-dots"></span>
                <span className="menu-item-price">{item.price}</span>
              </div>
              <p className="menu-item-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu