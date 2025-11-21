import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import './App.css'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

// Counter animation hook
function useCounter(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!startOnView || !isInView) return

    let startTime
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, isInView, startOnView])

  return { count, ref }
}

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false)

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
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Get Started</a>
        <button className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

  const stat1 = useCounter(500, 2000)
  const stat2 = useCounter(97, 2000)
  const stat3 = useCounter(3, 2000)

  return (
    <section className="hero">
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
            We help executive and leadership coaches book 10-15 qualified appointments in 30 days. High-ticket clients who are ready to invest in transformation.
          </motion.p>

          <motion.div className="hero-cta-group" variants={fadeInUp}>
            <a href="https://calendly.com/acquisition-pro/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Discovery Call
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#results" className="btn-secondary">
              See Case Studies
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeInUp}>
            <div className="stat-item" ref={stat1.ref}>
              <div className="stat-number">{stat1.count}+</div>
              <div className="stat-label">Coaches Served</div>
            </div>
            <div className="stat-item" ref={stat2.ref}>
              <div className="stat-number">{stat2.count}%</div>
              <div className="stat-label">Show-Up Rate</div>
            </div>
            <div className="stat-item" ref={stat3.ref}>
              <div className="stat-number">{stat3.count}0</div>
              <div className="stat-label">Days to Results</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Trust Bar
function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-bar-inner">
          <span className="trust-label">Trusted by coaches worldwide</span>
          <div className="trust-logos">
            <span className="trust-logo">ICF Certified</span>
            <span className="trust-logo">Forbes Coaches</span>
            <span className="trust-logo">Marshall Goldsmith</span>
            <span className="trust-logo">CTI Trained</span>
            <span className="trust-logo">iPEC Certified</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Problem Section
function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="problem-section" ref={ref}>
      <div className="container">
        <motion.div
          className="problem-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="problem-content" variants={fadeInUp}>
            <span className="section-label">The Problem</span>
            <h2>Most Coaches <span className="dim">Struggle</span> to Find Clients</h2>
            <ul className="problem-list">
              <li>Relying on referrals that come unpredictably</li>
              <li>Spending hours on social media with no ROI</li>
              <li>Discovery calls with people who can't afford your rates</li>
              <li>No predictable system to fill your calendar</li>
            </ul>
          </motion.div>
          <motion.div className="problem-visual" variants={fadeInUp}>
            <div className="problem-card">
              <div className="problem-card-stat">82%</div>
              <div className="problem-card-text">of coaches earn under $50K</div>
              <div className="problem-card-sub">because they lack a consistent client acquisition system</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Services Section
function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      number: "01",
      title: "LinkedIn Outreach System",
      description: "Targeted outreach to executives and business owners who need leadership coaching. Warm connections, not cold spam."
    },
    {
      number: "02",
      title: "Meta & LinkedIn Ads",
      description: "Precision-targeted campaigns that reach decision-makers actively seeking executive coaching and leadership development."
    },
    {
      number: "03",
      title: "High-Ticket Funnel",
      description: "Conversion-optimized funnels designed for $3K-$15K+ coaching packages. Pre-qualify leads before they book."
    },
    {
      number: "04",
      title: "Appointment Booking",
      description: "10-15 qualified discovery calls on your calendar monthly with executives ready to invest in their growth."
    },
    {
      number: "05",
      title: "Lead Nurturing",
      description: "Automated email and SMS sequences that warm up prospects and boost your show-up rates to 90%+."
    },
    {
      number: "06",
      title: "Sales Call Support",
      description: "Scripts, frameworks, and optional call reviews to help you close more high-ticket coaching clients."
    }
  ]

  return (
    <section className="services-section" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="section-label">What We Do</span>
          <h2>Your Client Acquisition System</h2>
          <p>Everything you need to book 10-15 qualified appointments every month with high-ticket coaching prospects.</p>
        </motion.div>

        <motion.div
          className="services-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div key={index} className="service-card" variants={fadeInUp}>
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Process Section
function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "1", title: "Strategy Session", description: "We analyze your coaching niche, ideal client profile, and current client acquisition methods to build your custom system."
    },
    {
      number: "2", title: "Funnel Build-Out", description: "We create your high-converting landing pages, lead magnets, and automated follow-up sequences for executive prospects."
    },
    {
      number: "3", title: "Campaign Launch", description: "We launch targeted LinkedIn outreach and paid ads to reach executives and leaders actively seeking coaching."
    },
    {
      number: "4", title: "Appointments Flow In", description: "Watch your calendar fill with 10-15 qualified discovery calls monthly. We optimize continuously for maximum show-up rates."
    }
  ]

  return (
    <section className="process-section" id="process" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="section-label">How It Works</span>
          <h2>From Zero to Booked Calls in 4 Steps</h2>
          <p>Our proven process fills your calendar with qualified coaching prospects in 30 days.</p>
        </motion.div>

        <motion.div
          className="process-timeline"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="process-step" variants={fadeInUp}>
              <div className="process-step-number">{step.number}</div>
              <div className="process-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote: '"',
      text: "Before working with Acquisition Pro, I was doing 2-3 discovery calls a month if I was lucky. Now I have 12-15 qualified calls every month with executives who actually need my help.",
      result: "$8.5K",
      resultLabel: "Added monthly revenue",
      name: "Jennifer Hayes",
      role: "Executive Leadership Coach",
      initials: "JH"
    },
    {
      quote: '"',
      text: "They understand the coaching industry. My calendar is now consistently booked with C-suite executives and business owners, not tire-kickers who can't afford coaching.",
      result: "14",
      resultLabel: "Qualified calls in first month",
      name: "Michael Torres",
      role: "CEO Performance Coach",
      initials: "MT"
    },
    {
      quote: '"',
      text: "I was skeptical at first, but the results speak for themselves. Closed 3 high-ticket clients in my first 30 days. The ROI paid for itself in week one.",
      result: "$12K",
      resultLabel: "First month coaching revenue",
      name: "Amanda Richardson",
      role: "Leadership Development Coach",
      initials: "AR"
    }
  ]

  return (
    <section className="testimonials-section" id="results" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="section-label">Results</span>
          <h2>What Coaches Are Saying</h2>
          <p>Real results from executive and leadership coaches we've helped grow.</p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="testimonial-card" variants={fadeInUp}>
              <div className="testimonial-quote">{testimonial.quote}</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-result">
                <div className="testimonial-result-number">{testimonial.result}</div>
                <div className="testimonial-result-label">{testimonial.resultLabel}</div>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <section className="cta-section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-card"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="cta-content">
            <h2>Ready to Fill Your <span className="highlight">Calendar</span>?</h2>
            <p>Book a free discovery call and see how we can get you 10-15 qualified appointments in the next 30 days.</p>
            <div className="cta-form">
              <a href="https://calendly.com/acquisition-pro/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Your Discovery Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <p className="cta-guarantee">Free 45-minute call. No pressure. See if you are the right fit for us.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Chatbot Component
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m the Acquisition Pro assistant. How can I help you grow your business today?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDPpkC7iTfIZ1ab930AgEz6e7pfoSRRDLk',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a helpful assistant for Acquisition Pro Agency, a lead generation and customer acquisition company. Keep responses concise (2-3 sentences max) and helpful. Focus on lead generation, paid advertising, sales funnels, CRM automation, and appointment setting services. If asked about pricing, encourage them to book a free discovery call. Be friendly and professional.

User: ${userMessage}`
              }]
            }]
          })
        }
      )

      const data = await response.json()

      if (data.error) {
        console.error('Gemini API Error:', data.error)
        setMessages(prev => [...prev, { role: 'assistant', content: `I'm having trouble connecting right now. Please email us or book a call directly!` }])
        return
      }

      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I\'d be happy to help! Please book a free discovery call to discuss your needs in detail.'

      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }])
    } catch (error) {
      console.error('Chatbot Error:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection issue. Please try again or contact us directly!' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <img src="/logo-new.png" alt="AcquisitionPro" className="chatbot-avatar-img" />
              <div>
                <h4>Acquisition Pro</h4>
                <span className="chatbot-status">Online</span>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message assistant">
                <div className="chatbot-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-form" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
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
              <img src="/logo.jpg" alt="AcquisitionPro" className="logo-image" />
              Acquisition<span>Pro</span>
            </a>
            <p>Helping executive and leadership coaches add $5-10K to their monthly revenue through qualified appointments.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">LinkedIn Outreach</a></li>
              <li><a href="#services">Meta & LinkedIn Ads</a></li>
              <li><a href="#services">High-Ticket Funnels</a></li>
              <li><a href="#services">Appointment Booking</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#results">Case Studies</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Acquisition Pro Agency. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
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
      <TrustBar />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
