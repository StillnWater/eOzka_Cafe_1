import React, { useState } from 'react'
import { Leaf, Flame, Croissant, LaptopMinimal } from 'lucide-react'

const Home = ({ setActiveTab }) => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <div className="tab-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Premium Coffee Experience</p>
            <h1 className="hero-title">A Warm Escape in the Heart of the City</h1>
            <p className="hero-desc">Crafted brews, artisan pastries, and a cozy atmosphere. We invite you to sit back, relax, and savor the moment.</p>
            <div className="hero-btns">
              <button className="btn btn-primary" onClick={() => setActiveTab('book')}>Book a Table</button>
              <button className="btn btn-secondary" onClick={() => setActiveTab('menu')}>Explore Menu</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="about-snippet">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-container">
              <img
                className="about-img"
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000"
                alt="Barista making beautiful latte art"
              />
            </div>
            <div>
              <span className="about-label">Our Philosophy</span>
              <h2 className="about-title">Bred From Passion, Brewed With Care</h2>
              <p className="about-text">At eOzka Cafe, we believe a great cup of coffee begins with quality ingredients and meticulous preparation. We source our coffee beans sustainably from micro-lots around the world and roast them to highlight their natural sweetness and unique flavor notes.</p>
              <p className="about-text" style={{ marginBottom: 0 }}>Every pastry is baked fresh in-house daily, pairing beautifully with our signature espresso drinks, custom tea blends, and seasonal culinary specialties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us Section */}
      <section className="highlights" style={{ backgroundColor: 'var(--bg-dark)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="about-label" style={{ textAlign: 'center', display: 'block' }}>Why eOzka</span>
            <h2 className="section-title">The eOzka Experience</h2>
            <p className="section-desc">We pay attention to every detail to make your stay memorable.</p>
          </div>

          <div
            className="highlights-grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
          >
            <div className="highlight-card" style={{ padding: '30px', textAlign: 'center' }}>
              <Leaf
                size={20}
                strokeWidth={1.75}
                color="var(--accent)"
                style={{ marginBottom: '12px' }}
              />

              <h3 style={{fontSize: '1.25rem', marginBottom: '10px', fontFamily: 'var(--font-body)', fontWeight: '600'}}>
                Organic Sourcing
              </h3>

              <p className="highlight-desc">
                100% fair-trade certified beans harvested from sustainable cooperatives worldwide.
              </p>
            </div>

            <div className="highlight-card" style={{ padding: '30px', textAlign: 'center' }}>
              <Flame
                size={20}
                strokeWidth={1.75}
                color="var(--accent)"
                style={{ marginBottom: '12px' }}
              />

              <h3 style={{fontSize: '1.25rem', marginBottom: '10px', fontFamily: 'var(--font-body)', fontWeight: '600'}}>
                In-House Roasting
              </h3>

              <p className="highlight-desc">
                Beans are micro-roasted in small batches to lock in delicate, rich, and aromatic oils.
              </p>
            </div>

            <div className="highlight-card" style={{ padding: '30px', textAlign: 'center' }}>
              <Croissant
                size={20}
                strokeWidth={1.75}
                color="var(--accent)"
                style={{ marginBottom: '12px' }}
              />

              <h3 style={{fontSize: '1.25rem', marginBottom: '10px', fontFamily: 'var(--font-body)', fontWeight: '600'}}>
                Fresh Bakery
              </h3>

              <p className="highlight-desc">
                Hand-rolled croissants and signature pastries baked every morning at dawn.
              </p>
            </div>

            <div className="highlight-card" style={{ padding: '30px', textAlign: 'center' }}>
              <LaptopMinimal
                size={20}
                strokeWidth={1.75}
                color="var(--accent)"
                style={{ marginBottom: '12px' }}
              />

              <h3 style={{fontSize: '1.25rem', marginBottom: '10px', fontFamily: 'var(--font-body)', fontWeight: '600'}}>
                Cozy Workspace
              </h3>

              <p className="highlight-desc">
                Ultra-fast Wi-Fi, abundant charging outlets, and silent, comfortable workstation spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <div className="container">
          <div className="section-header">
            <span className="about-label" style={{ textAlign: 'center', display: 'block' }}>Favorites</span>
            <h2 className="section-title">Today's Highlights</h2>
            <p className="section-desc">Handcrafted items popular with our community today.</p>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-img-container">
                <img
                  className="highlight-img"
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600"
                  alt="Creamy Velvet Cappuccino"
                />
              </div>
              <div className="highlight-info">
                <div className="highlight-meta">
                  <span className="highlight-name">Velvet Cappuccino</span>
                  <span className="highlight-price">$4.75</span>
                </div>
                <p className="highlight-desc">Perfectly steamed milk poured gently over a double espresso shot, dusted with dark cocoa.</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-img-container">
                <img
                  className="highlight-img"
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600"
                  alt="Delicious Glazed Doughnut"
                />
              </div>
              <div className="highlight-info">
                <div className="highlight-meta">
                  <span className="highlight-name">Chocolate Éclair</span>
                  <span className="highlight-price">$4.50</span>
                </div>
                <p className="highlight-desc">Crispy choux pastry dough filled with rich, creamy chocolate custard and glazed to perfection.</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-img-container">
                <img
                  className="highlight-img"
                  src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600"
                  alt="Matcha Latte"
                />
              </div>
              <div className="highlight-info">
                <div className="highlight-meta">
                  <span className="highlight-name">Matcha Latte</span>
                  <span className="highlight-price">$5.00</span>
                </div>
                <p className="highlight-desc">Whisked ceremonial Uji matcha layered with slightly sweetened, creamy oat milk served hot or iced.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting Process Section */}
      <section className="about-snippet" style={{ backgroundColor: 'var(--bg-snippet)' }}>
        <div className="container">
          <div className="section-header">
            <span className="about-label" style={{ textAlign: 'center', display: 'block' }}>Our Process</span>
            <h2 className="section-title">How We Craft Perfection</h2>
            <p className="section-desc" style={{ color: 'var(--text-muted)' }}>From the farm to your cup, we optimize every detail.</p>
          </div>

          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
            <div className="booking-form-box" style={{ padding: '30px' }}>
              <div style={{ display: 'inline-flex', width: '40px', height: '40px', backgroundColor: 'var(--accent)', color: '#12100e', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', fontWeight: '700', marginBottom: '20px' }}>1</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Sourcing</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>We travel directly to coffee farms to select organic micro-lot coffee beans, ensuring growers receive fair pay and respect.</p>
            </div>
            <div className="booking-form-box" style={{ padding: '30px' }}>
              <div style={{ display: 'inline-flex', width: '40px', height: '40px', backgroundColor: 'var(--accent)', color: '#12100e', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', fontWeight: '700', marginBottom: '20px' }}>2</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Micro-Roasting</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Roasting in smaller batches lets us profile and adjust airflow and temperature profiles to match the origin characteristics.</p>
            </div>
            <div className="booking-form-box" style={{ padding: '30px' }}>
              <div style={{ display: 'inline-flex', width: '40px', height: '40px', backgroundColor: 'var(--accent)', color: '#12100e', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', fontWeight: '700', marginBottom: '20px' }}>3</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Brewing</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Using advanced scales, temperature regulation, and high-pressure filtration to pull the perfect sweet extraction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="highlights" style={{ padding: '80px 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <span className="about-label">Newsletter</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Join the Coffee Club</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>Subscribe to get alerts on seasonal roasts, specialty menu launches, and exclusive member reservations.</p>

          {subscribed ? (
            <div className="toast-alert" style={{ position: 'static', display: 'inline-block', width: '100%', marginBottom: 0, boxShadow: 'none' }}>
              ✓ You've subscribed successfully! Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px' }}>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ flexGrow: 1 }}
              />
              <button type="submit" className="btn btn-primary" style={{ borderRadius: '8px' }}>Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home