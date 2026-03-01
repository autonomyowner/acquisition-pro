import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import './App.css'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="logo"><img src="/logo-new.png" alt="AcquisitionPro" className="logo-image" /><span className="logo-text">Acquisition<span>Pro</span></span></a>
        <ul className="nav-links">
          <li><a href="#process" onClick={(e) => { e.preventDefault(); document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }) }}>Process</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Get Started</a>
        <button className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="https://calendly.com/acquisition-pro/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setMenuOpen(false)}>
            Book Discovery Call
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </nav>
  )
}

// Hero Section
function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.97])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <motion.div className="hero-gradient-1" style={{ y }} />
        <motion.div className="hero-gradient-2" style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }} />
        <div className="hero-grid" />
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{ opacity, scale }}
        >
          <motion.div className="hero-badge" variants={fadeInUp}>
            <span className="hero-badge-dot" />
            For Executive & Leadership Coaches Only
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            <span className="line">Stop Chasing Leads.</span>
            <span className="line">Start <span className="highlight">Closing</span> Them.</span>
          </motion.h1>

          <motion.p className="hero-description" variants={fadeInUp}>
            We help executive and leadership coaches attract qualified clients through strategic LinkedIn outreach built for your niche.
          </motion.p>

          <motion.div className="hero-cta-group" variants={fadeInUp}>
            <a href="https://calendly.com/acquisition-pro/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Discovery Call
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#process" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }) }}>
              See How It Works
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}


// Problem Section
function ProblemSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "start 0.3"] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <section className="problem-section" ref={ref}>
      <motion.div className="container" style={{ opacity, y }}>
        <div className="problem-clean">
          <h2 className="problem-heading">
            Most coaches don't have a consistent way to attract new clients.
          </h2>
          <div className="problem-divider" />
          <ul className="problem-list-clean">
            <li>Relying on referrals that come unpredictably</li>
            <li>Spending hours on social media with no return</li>
            <li>Discovery calls with people who aren't the right fit</li>
            <li>No system to keep your calendar consistently full</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}


// Process Section
function ProcessSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "start 0.3"] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  const steps = [
    {
      number: "1", title: "Strategy Session", description: "We analyze your coaching niche, ideal client profile, and current client acquisition methods to build your custom system."
    },
    {
      number: "2", title: "Profile & Messaging Setup", description: "We optimize your LinkedIn profile and craft personalized outreach messages tailored to your ideal coaching clients."
    },
    {
      number: "3", title: "Outreach Launch", description: "We launch targeted LinkedIn outreach campaigns to connect with executives and leaders who fit your ideal client profile."
    },
    {
      number: "4", title: "Appointments Start Coming In", description: "As campaigns run, qualified discovery calls begin appearing on your calendar. We optimize continuously for better performance."
    }
  ]

  return (
    <section className="process-section" id="process" ref={ref}>
      <motion.div className="container" style={{ opacity, y }}>
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2>How We Work With You</h2>
          <p>Our step-by-step process is designed to bring qualified coaching prospects to your calendar.</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-step-number">{step.number}</div>
              <div className="process-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


// CTA Section
function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "start 0.3"] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <section className="cta-section" id="contact" ref={ref}>
      <motion.div className="container" style={{ opacity, y }}>
        <div className="cta-card">
          <div className="cta-content">
            <h2>Ready to Grow Your <span className="highlight">Practice</span>?</h2>
            <p>Book a demo call and let's discuss how we can help you attract more qualified coaching clients.</p>
            <div className="cta-form">
              <a href="https://calendly.com/acquisition-pro/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Your Discovery Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <p className="cta-guarantee">45-minute call. No pressure. See if you are the right fit for us.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/logo-new.png" alt="AcquisitionPro" className="logo-image" />
              <span className="logo-text">Acquisition<span>Pro</span></span>
            </a>
            <p>Helping executive and leadership coaches grow their practice through strategic LinkedIn outreach.</p>
            <div className="footer-contact-info">
              <p><strong>AcquisitionPro LLC</strong></p>
              <p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display:'inline',verticalAlign:'middle',marginRight:'6px'}}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:contact@acquisitions-pro.com">contact@acquisitions-pro.com</a>
              </p>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AcquisitionPro LLC. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/acquisitionprox" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/acquisition_pro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
        <p className="footer-dev">by <a href="https://sitedz.store" target="_blank" rel="noopener noreferrer">SiteDz</a></p>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <>
      <div className="noise-overlay" />
      <Navigation />
      <Hero />
      <ProblemSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
