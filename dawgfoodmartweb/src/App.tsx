import './index.css'

type Hour = {
  day: string
  short: string
  time: string
}

type Service = {
  title: string
  desc: string
  tag: string
}

type Review = {
  name: string
  meta: string
  text: string
}

const HOURS: Hour[] = [
  { day: 'Monday', short: 'Mon', time: '12 PM – 12 AM' },
  { day: 'Tuesday', short: 'Tue', time: '12 PM – 12 AM' },
  { day: 'Wednesday', short: 'Wed', time: '12 PM – 12 AM' },
  { day: 'Thursday', short: 'Thu', time: '12 PM – 12 AM' },
  { day: 'Friday', short: 'Fri', time: '12 PM – 12 AM' },
  { day: 'Saturday', short: 'Sat', time: '12 PM – 12 AM' },
  { day: 'Sunday', short: 'Sun', time: '12 PM – 12 AM' },
]

const SERVICES: Service[] = [
  {
    title: 'Smoke Shop',
    desc: 'Vapes, wraps, papers, accessories, and more in one easy stop.',
    tag: 'Popular',
  },
  {
    title: 'Convenience Store',
    desc: 'Cold drinks, snacks, and everyday essentials for quick trips.',
    tag: 'Daily',
  },
  {
    title: 'U-Haul Rentals',
    desc: 'Truck and moving equipment rentals available on-site.',
    tag: 'Useful',
  },
  {
    title: 'Package Pickup',
    desc: 'Amazon and Wish pickup point for fast local convenience.',
    tag: 'Easy',
  },
]

const REVIEWS: Review[] = [
  {
    name: 'Ronak Patel',
    meta: 'Local Guide · 30 reviews',
    text:
      'Dawgs Food Mart is great. So convenient, with great vape products, snacks, and excellent customer service. Definitely check them out if you live nearby or are ever in the area.',
  },
  {
    name: 'Carla Daniell',
    meta: '5-star review',
    text:
      'Wonderful people working there and always a pleasure to see them.',
  },
  {
    name: 'Talha Imam',
    meta: '5-star review',
    text:
      'A wide range of options for the right price and customer service is on point. 10/10 recommend people shop here.',
  },
]

const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
const todayHours = HOURS[todayIndex]

function StarRow() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="noise" />
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">D</div>
          <div>
            <p className="eyebrow">Athens, Georgia</p>
            <h1>DAWGS FOOD MART</h1>
          </div>
        </div>

        <nav className="top-actions">
          <a className="nav-link" href="#services">
            Services
          </a>
          <a className="nav-link" href="#reviews">
            Reviews
          </a>
          <a className="nav-link" href="#hours">
            Hours
          </a>
          <a className="btn btn-ghost" href="https://maps.google.com/?q=350+Macon+Hwy,+Athens,+GA+30606" target="_blank" rel="noreferrer">
            Directions
          </a>
          <a className="btn btn-primary" href="tel:+17068508139">
            Call Now
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="pill-row">
              <span className="pill pill-glow">4.7 ★ Google rated</span>
              <span className="pill">Open daily</span>
              <span className="pill">Quick stop convenience</span>
            </div>

            <h2>
              Athens convenience,
              <br />
              <span className="gradient-text">with a late-night pulse.</span>
            </h2>

            <p className="hero-text">
              Dawgs Food Mart brings together smoke shop products, snacks,
              drinks, U-Haul rentals, and pickup services in one bold, easy-to-find
              stop on Macon Hwy.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="tel:+17068508139">
                Call the Store
              </a>
              <a
                className="btn btn-ghost"
                href="https://maps.google.com/?q=350+Macon+Hwy,+Athens,+GA+30606"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-label">Address</span>
                <strong>350 Macon Hwy, Athens, GA</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Today</span>
                <strong>{todayHours.short} · {todayHours.time}</strong>
              </div>
              <div className="stat-card">
                <span className="stat-label">Phone</span>
                <strong>(706) 850-8139</strong>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="orbital-ring orbital-ring-1" />
            <div className="orbital-ring orbital-ring-2" />
            <div className="hero-card-inner">
              <p className="eyebrow">Neighborhood spot</p>
              <h3>Fast stops. Good energy. Real convenience.</h3>
              <p>
                Built for people who want essentials, smoke shop products,
                quick snacks, rentals, and a location that is easy to reach.
              </p>

              <div className="feature-stack">
                <div className="feature-item">
                  <span>◎</span>
                  <div>
                    <strong>Smoke shop essentials</strong>
                    <p>Easy in, easy out, solid selection.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span>◈</span>
                  <div>
                    <strong>Snacks & drinks</strong>
                    <p>Quick everyday convenience on the go.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span>↗</span>
                  <div>
                    <strong>Pickup & rental services</strong>
                    <p>More than a store — useful local stop.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="strip">
          <div className="strip-item">Smoke Shop</div>
          <div className="strip-item">Convenience</div>
          <div className="strip-item">Snacks & Drinks</div>
          <div className="strip-item">U-Haul Rentals</div>
          <div className="strip-item">Package Pickup</div>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h3>Everything customers need, all in one stop.</h3>
          </div>

          <div className="service-grid">
            {SERVICES.map((service) => (
              <article className="glass-card service-card" key={service.title}>
                <span className="card-tag">{service.tag}</span>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section two-col">
          <div className="glass-card location-card">
            <p className="eyebrow">Find us</p>
            <h3>Easy to reach in Athens.</h3>
            <p className="muted">
              Stop by for daily convenience, smoke shop products, snacks, pickup
              services, and more.
            </p>

            <div className="location-lines">
              <div>
                <span>Address</span>
                <strong>350 Macon Hwy, Athens, GA 30606</strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>(706) 850-8139</strong>
              </div>
              <div>
                <span>Today’s Hours</span>
                <strong>{todayHours.day}: {todayHours.time}</strong>
              </div>
            </div>

            <div className="cta-row">
              <a className="btn btn-primary" href="tel:+17068508139">
                Call Now
              </a>
              <a
                className="btn btn-ghost"
                href="https://maps.google.com/?q=350+Macon+Hwy,+Athens,+GA+30606"
                target="_blank"
                rel="noreferrer"
              >
                Open Map
              </a>
            </div>
          </div>

          <div className="glass-card hours-card" id="hours">
            <p className="eyebrow">Store hours</p>
            <h3>Open daily</h3>

            <div className="hours-list">
              {HOURS.map((hour, index) => (
                <div
                  className={`hour-row ${index === todayIndex ? 'hour-row-active' : ''}`}
                  key={hour.day}
                >
                  <span>
                    {hour.day}
                    {index === todayIndex ? ' · Today' : ''}
                  </span>
                  <strong>{hour.time}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="section-head reviews-head">
            <div>
              <p className="eyebrow">Customer love</p>
              <h3>What people say about Dawgs Food Mart.</h3>
            </div>

            <div className="rating-badge">
              <strong>4.7</strong>
              <div>
                <StarRow />
                <span>Based on Google reviews</span>
              </div>
            </div>
          </div>

          <div className="review-grid">
            {REVIEWS.map((review) => (
              <article className="glass-card review-card" key={review.name}>
                <div className="review-top">
                  <div className="avatar">{review.name.charAt(0)}</div>
                  <div>
                    <h4>{review.name}</h4>
                    <p>{review.meta}</p>
                  </div>
                </div>

                <StarRow />
                <p className="review-text">“{review.text}”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section final-cta">
          <div className="glass-card cta-banner">
            <div>
              <p className="eyebrow">Stop through</p>
              <h3>Your local one-stop spot in Athens.</h3>
              <p className="muted">
                Smoke shop products, drinks, snacks, U-Haul rentals, and pickup
                services — all in one place.
              </p>
            </div>

            <div className="cta-row">
              <a className="btn btn-primary" href="tel:+17068508139">
                Call Store
              </a>
              <a
                className="btn btn-ghost"
                href="https://maps.google.com/?q=350+Macon+Hwy,+Athens,+GA+30606"
                target="_blank"
                rel="noreferrer"
              >
                Visit Location
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
