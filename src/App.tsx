import { useState, useEffect, useRef } from 'react'
import './App.css'
// Logo: copy D_E_C_final_logo.png into /public and reference as shown below
const decLogo = '/D_E_C_final_logo.png'

// ─── DATA ───────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: '🔧',
    title: 'Engine Rebuilds',
    desc: 'Full strip-down and rebuild of diesel and petrol truck engines. Precision work, quality parts, guaranteed performance.',
  },
  {
    icon: '⚙️',
    title: 'Clutch Kits',
    desc: 'Supply and fitment of clutch kits for all makes and models. We keep your drivetrain running smooth.',
  },
  {
    icon: '🔩',
    title: 'Suspension Repairs',
    desc: 'Leaf springs, air bags, shock absorbers — complete suspension diagnosis and repair for trucks and trailers.',
  },
  {
    icon: '🎯',
    title: 'Wheel Alignment',
    desc: 'Precision wheel alignment for trucks and trailers, reducing tyre wear and improving handling safety.',
  },
  {
    icon: '⚡',
    title: 'Electrical Fault Finding',
    desc: 'Minor electrical diagnostics and fault finding. We track down the gremlin so you can get moving.',
  },
  {
    icon: '💻',
    title: 'Diagnostics',
    desc: 'Modern scanning and diagnostic equipment for accurate fault identification across all truck makes.',
  },
  {
    icon: '🛢️',
    title: 'Interval Services',
    desc: 'Scheduled maintenance and interval services to keep your fleet compliant and on the road longer.',
  },
  {
    icon: '🚨',
    title: '24/7 Roadside Assistance',
    desc: 'Broken down on the road? We come to you — any time, day or night. No job too far, no hour too late.',
  },
  {
    icon: '🔑',
    title: 'New & Used Parts',
    desc: 'Wide range of new and quality used parts for trucks and trailers. Fast sourcing, competitive pricing.',
  },
  {
    icon: '🏗️',
    title: 'Trailer Repairs',
    desc: 'Structural, mechanical and brake repairs on all trailer types — flatbeds, tautliners, stepdecks and more.',
  },
  {
    icon: '🚛',
    title: 'Fleet Vehicles',
    desc: 'We extend our services to fleet vehicles too — cars and LDVs that form part of a managed fleet.',
  },
  {
    icon: '⭐',
    title: 'Specialised Services',
    desc: 'Custom and specialised mechanical work tailored to unique fleet requirements — earthmoving machinery included.',
  },
]

const MAKES = [
  'Mercedes-Benz', 'Volvo', 'MAN', 'Scania', 'DAF',
  'Freightliner', 'Kenworth', 'International', 'Hino', 'Isuzu',
  'UD Trucks', 'Fuso', 'Ford', 'Iveco', 'Leyland',
]

// ─── HOOKS ──────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Makes', href: '#makes' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          <img src={decLogo} alt="D.E.C Mechanical Solutions" className="navbar__logo-img" />
          <span>
            <span className="navbar__logo-dec">D.E.C</span>
            <span className="navbar__logo-sub">Mechanical Solutions</span>
          </span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="tel:0636732276" className="navbar__cta">
              📞 Call Now
            </a>
          </li>
        </ul>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-image" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&auto=format&fit=crop&q=80"
          alt=""
          loading="eager"
        />
      </div>
      <div className="hero__bg-overlay" aria-hidden="true" />
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__stripes" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="hero__stripe" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>

      {/* Decorative SVG gear */}
      <svg className="hero__gear-deco" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <path d="M100 15 L110 5 L120 15 L130 10 L135 22 L147 20 L148 33 L160 35 L157 48 L168 54 L161 65 L170 74 L160 81 L165 93 L154 97 L155 110 L143 110 L140 123 L128 119 L122 131 L111 124 L102 133 L93 124 L82 131 L76 119 L64 123 L61 110 L49 110 L50 97 L39 93 L44 81 L34 74 L43 65 L36 54 L47 48 L44 35 L56 33 L57 20 L69 22 L74 10 L84 15 L90 5 Z" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="100" cy="100" r="35" stroke="currentColor" strokeWidth="3" fill="none"/>
      </svg>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Trucks · Trailers · Earth Moving Machinery
        </div>

        {/* Logo image, prominent in hero */}
        <img src={decLogo} alt="D.E.C Mechanical Solutions" className="hero__logo-img" />

        <h1 className="hero__title">
          <span className="hero__title-main">D.E.C</span>
          <span className="hero__title-sub">Mechanical Solutions</span>
          <span className="hero__title-tag">(Pty) Ltd · Est. 18+ Years</span>
        </h1>

        <div className="hero__divider" />

        <p className="hero__tagline">
          Quick turnaround · Passionate service · 24/7 on call
        </p>

        <div className="hero__actions">
          <a href="tel:0636732276" className="btn btn--primary">
            <span>📞</span> 063 673 2276
          </a>
          <a href="https://wa.me/27636732276" className="btn btn--outline" target="_blank" rel="noopener noreferrer">
            <span>💬</span> WhatsApp Us
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>18+</strong>
            <span>Years Experience</span>
          </div>
          <div className="hero__stat">
            <strong>All Makes</strong>
            <span>Trucks &amp; Trailers</span>
          </div>
          <div className="hero__stat">
            <strong>24/7</strong>
            <span>Roadside Support</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header" ref={ref}>
          <span className={`section-label ${inView ? 'animate-in' : ''}`}>What We Do</span>
          <h2 className={`section-title ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            Full-Spectrum<br />Mechanical Services
          </h2>
          <p className={`section-desc ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            From a simple service interval to a full engine rebuild — if it rolls on wheels or tracks, we work on it.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { ref, inView } = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`service-card ${inView ? 'animate-in' : ''}`}
      style={{ animationDelay: `${(index % 4) * 0.08}s` }}
    >
      <div className="service-card__icon">{service.icon}</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.desc}</p>
      <div className="service-card__bar" />
    </div>
  )
}

function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__inner">
          <div className={`about__text ${inView ? 'animate-in' : ''}`} ref={ref}>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Built on Experience.<br />Driven by Passion.</h2>
            <p>
              D.E.C Mechanical Solutions has been in the trenches of the transport industry for more than
              <strong> 18 years</strong>. We know trucks. We know trailers. We know earthmoving machinery.
              And we know what it means when your vehicle is off the road.
            </p>
            <p>
              Our team prides itself on <strong>fast turnaround times</strong> — because downtime costs you money.
              We work on all makes and models, sourcing quality new and used parts to get you moving again
              without breaking the bank.
            </p>
            <p>
              Whether you're managing a fleet or running a single rig, we treat every vehicle with the same care
              and every client with the same respect. That's not a slogan — it's how we've built 18 years of trust.
            </p>

            <div className="about__highlights">
              <div className="about__highlight">
                <div className="about__highlight-icon">✓</div>
                <span>Trucks, trailers &amp; earth moving machinery</span>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-icon">✓</div>
                <span>Fleet vehicle services available</span>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-icon">✓</div>
                <span>Quick turnaround, minimum downtime</span>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-icon">✓</div>
                <span>24/7 roadside breakdown assistance</span>
              </div>
            </div>

            <a href="tel:0636732276" className="btn btn--primary">
              Get in Touch
            </a>
          </div>

          <div className="about__visual">
            <div className="about__photo-grid">
              <div className="about__photo about__photo--main">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80"
                  alt="Mechanic working on truck engine"
                  loading="lazy"
                />
              </div>
              <div className="about__photo about__photo--sm">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=80"
                  alt="Engine close-up"
                  loading="lazy"
                />
              </div>
              <div className="about__photo about__photo--sm">
                <img
                  src="https://images.unsplash.com/photo-1504222490345-c075b626318a?w=400&auto=format&fit=crop&q=80"
                  alt="Workshop tools"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about__badge-overlay">
              <div className="about__years">18+</div>
              <div className="about__years-label">Years of<br />Excellence</div>
            </div>
            <div className="about__ticker">
              <div className="about__ticker-inner">
                {['Engine Rebuilds', 'Clutch Kits', 'Suspension', 'Diagnostics', 'Wheel Alignment', '24/7 Assistance', 'All Makes', 'Earthmoving'].map((t, i) => (
                  <span key={i}>{t} &nbsp;·&nbsp; </span>
                ))}
                {['Engine Rebuilds', 'Clutch Kits', 'Suspension', 'Diagnostics', 'Wheel Alignment', '24/7 Assistance', 'All Makes', 'Earthmoving'].map((t, i) => (
                  <span key={`b${i}`}>{t} &nbsp;·&nbsp; </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const { ref, inView } = useInView(0.1)

  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&auto=format&fit=crop&q=80',
      alt: 'Semi-truck in repair workshop',
      label: 'Workshop',
    },
    {
      src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&auto=format&fit=crop&q=80',
      alt: 'Mechanic working on diesel engine',
      label: 'Engine Work',
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop&q=80',
      alt: 'Truck wheel and tyre repair',
      label: 'Tyre & Wheel',
    },
    {
      src: 'https://images.unsplash.com/photo-1504222490345-c075b626318a?w=900&auto=format&fit=crop&q=80',
      alt: 'Mechanic tools laid out in workshop',
      label: 'Tooling',
    },
    {
      src: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=900&auto=format&fit=crop&q=80',
      alt: 'Truck on highway at sunset',
      label: 'On the Road',
    },
    {
      src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&auto=format&fit=crop&q=80',
      alt: 'Heavy duty truck cab',
      label: 'Heavy Transport',
    },
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header" ref={ref}>
          <span className={`section-label ${inView ? 'animate-in' : ''}`}>In the Field</span>
          <h2 className={`section-title ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            Trucks Are Our Business
          </h2>
        </div>
        <div className="gallery__grid">
          {photos.map((photo, i) => (
            <div
              key={photo.alt}
              className={`gallery__item ${inView ? 'animate-in' : ''}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery__label">{photo.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Makes() {
  const { ref, inView } = useInView()

  return (
    <section id="makes" className="makes">
      <div className="container">
        <div className="section-header" ref={ref}>
          <span className={`section-label ${inView ? 'animate-in' : ''}`}>All Makes Welcome</span>
          <h2 className={`section-title ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            We Work On Every Brand
          </h2>
        </div>
        <div className="makes__grid">
          {MAKES.map((make, i) => (
            <div
              key={make}
              className={`makes__item ${inView ? 'animate-in' : ''}`}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {make}
            </div>
          ))}
          <div className={`makes__item makes__item--more ${inView ? 'animate-in' : ''}`}
            style={{ animationDelay: `${MAKES.length * 0.04}s` }}>
            + Many More
          </div>
        </div>
      </div>
    </section>
  )
}

function Emergency() {
  return (
    <section className="emergency">
      <div className="container">
        <div className="emergency__inner">
          <div className="emergency__pulse" aria-hidden="true" />
          <div className="emergency__content">
            <h2 className="emergency__title">🚨 Broken Down Right Now?</h2>
            <p className="emergency__sub">We provide 24/7 roadside breakdown assistance — call us immediately.</p>
          </div>
          <a href="tel:0636732276" className="btn btn--white">
            <span>📞</span> 063 673 2276 — Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header" ref={ref}>
          <span className={`section-label ${inView ? 'animate-in' : ''}`}>Get In Touch</span>
          <h2 className={`section-title ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            Let's Get You<br />Back on the Road
          </h2>
        </div>

        <div className="contact__cards">
          <a href="tel:0636732276" className={`contact__card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            <div className="contact__card-icon">📞</div>
            <div className="contact__card-label">Call Us</div>
            <div className="contact__card-value">063 673 2276</div>
            <div className="contact__card-note">Available 24/7 for emergencies</div>
          </a>

          <a href="mailto:Decmechanicalsolutions@gmail.com" className={`contact__card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="contact__card-icon">✉️</div>
            <div className="contact__card-label">Email Us</div>
            <div className="contact__card-value">Decmechanicalsolutions<br />@gmail.com</div>
            <div className="contact__card-note">We'll respond as soon as possible</div>
          </a>

          <a href="https://wa.me/27636732276" target="_blank" rel="noopener noreferrer" className={`contact__card ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="contact__card-icon">💬</div>
            <div className="contact__card-label">WhatsApp</div>
            <div className="contact__card-value">063 673 2276</div>
            <div className="contact__card-note">Message us on WhatsApp</div>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <img src={decLogo} alt="D.E.C Logo" className="footer__logo-img" />
              <span>
                <span className="navbar__logo-dec" style={{ display: 'block' }}>D.E.C</span>
                <span className="navbar__logo-sub">Mechanical Solutions</span>
              </span>
            </div>
            <p className="footer__tagline">
              Truck, Trailer &amp; Earthmoving Machinery Specialists<br />with a passion for service.
            </p>
          </div>

          <div className="footer__links">
            <strong>Quick Links</strong>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#makes">Makes</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__contact">
            <strong>Contact</strong>
            <a href="tel:0636732276">063 673 2276</a>
            <a href="mailto:Decmechanicalsolutions@gmail.com">Decmechanicalsolutions@gmail.com</a>
            <a href="https://wa.me/27636732276" target="_blank" rel="noopener noreferrer">WhatsApp: 063 673 2276</a>
            <span>D.E.C Mechanical Solutions (Pty) Ltd</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} D.E.C Mechanical Solutions (Pty) Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Makes />
        <Emergency />
        <Contact />
      </main>
      <Footer />
    </>
  )
}