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
        <a href="#" className="logo">
          Acquisition<span>Pro</span>
        </a>
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
            Now accepting new clients for Q1 2025
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            <span className="line">Stop Chasing Leads.</span>
            <span className="line">Start <span className="highlight">Closing</span> Them.</span>
          </motion.h1>

          <motion.p className="hero-description" variants={fadeInUp}>
            We build predictable lead generation systems that fill your pipeline with qualified prospects ready to buy. No more guesswork. Just results.
          </motion.p>

          <motion.div className="hero-cta-group" variants={fadeInUp}>
            <a href="#contact" className="btn-primary">
              Book Strategy Call
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
              <div className="stat-number">${stat1.count}K+</div>
              <div className="stat-label">Revenue Generated</div>
            </div>
            <div className="stat-item" ref={stat2.ref}>
              <div className="stat-number">{stat2.count}%</div>
              <div className="stat-label">Client Retention</div>
            </div>
            <div className="stat-item" ref={stat3.ref}>
              <div className="stat-number">{stat3.count}x</div>
              <div className="stat-label">Average ROI</div>
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
          <span className="trust-label">Trusted by industry leaders</span>
          <div className="trust-logos">
            <span className="trust-logo">TechFlow</span>
            <span className="trust-logo">ScaleUp</span>
            <span className="trust-logo">GrowthX</span>
            <span className="trust-logo">Elevate</span>
            <span className="trust-logo">Nexus</span>
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
            <h2>Most Businesses <span className="dim">Struggle</span> With Lead Gen</h2>
            <ul className="problem-list">
              <li>Inconsistent lead flow makes forecasting impossible</li>
              <li>Wasting budget on ads that don't convert</li>
              <li>Sales team chasing unqualified prospects</li>
              <li>No system to nurture and close deals at scale</li>
            </ul>
          </motion.div>
          <motion.div className="problem-visual" variants={fadeInUp}>
            <div className="problem-card">
              <div className="problem-card-stat">68%</div>
              <div className="problem-card-text">of businesses fail</div>
              <div className="problem-card-sub">due to poor lead generation and customer acquisition</div>
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
      title: "Lead Generation Systems",
      description: "Custom-built funnels and automation that attract, capture, and qualify leads 24/7 without manual effort."
    },
    {
      number: "02",
      title: "Paid Advertising",
      description: "Strategic ad campaigns across Meta, Google, and LinkedIn that deliver qualified leads at profitable CAC."
    },
    {
      number: "03",
      title: "Sales Funnel Optimization",
      description: "Data-driven funnel improvements that increase conversion rates and maximize every dollar you spend."
    },
    {
      number: "04",
      title: "CRM & Automation",
      description: "Seamless systems that nurture leads automatically and give your sales team the tools to close faster."
    },
    {
      number: "05",
      title: "Appointment Setting",
      description: "Qualified meetings booked directly on your calendar with decision-makers ready to buy."
    },
    {
      number: "06",
      title: "Analytics & Reporting",
      description: "Real-time dashboards showing exactly where your leads come from and what's driving revenue."
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
          <h2>Revenue-Driving Services</h2>
          <p>Everything you need to build a predictable, scalable lead generation machine.</p>
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
      number: "1",
      title: "Discovery Call",
      description: "We dive deep into your business, understand your ideal customer, and identify the biggest opportunities for growth."
    },
    {
      number: "2",
      title: "Custom Strategy",
      description: "Our team builds a tailored acquisition strategy designed specifically for your market, budget, and goals."
    },
    {
      number: "3",
      title: "System Build-Out",
      description: "We implement your lead generation system—funnels, ads, automations—everything working together seamlessly."
    },
    {
      number: "4",
      title: "Launch & Optimize",
      description: "Go live and start generating leads. We continuously test, optimize, and scale what's working to maximize ROI."
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
          <h2>From Zero to Revenue in 4 Steps</h2>
          <p>Our proven process gets you results fast without the complexity.</p>
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
      text: "Acquisition Pro transformed our business. We went from struggling to find leads to having a full pipeline in just 60 days. The ROI has been incredible.",
      result: "312%",
      resultLabel: "Increase in qualified leads",
      name: "Marcus Chen",
      role: "CEO, TechFlow Solutions",
      initials: "MC"
    },
    {
      quote: '"',
      text: "Their team doesn't just run ads—they build systems. Our cost per lead dropped by 40% while lead quality went through the roof.",
      result: "$2.4M",
      resultLabel: "Pipeline generated in 90 days",
      name: "Sarah Williams",
      role: "VP Marketing, ScaleUp Inc",
      initials: "SW"
    },
    {
      quote: '"',
      text: "Finally, an agency that delivers what they promise. We now have predictable revenue and a sales team that actually has leads to call.",
      result: "47",
      resultLabel: "Qualified meetings per month",
      name: "David Park",
      role: "Founder, GrowthX Agency",
      initials: "DP"
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
          <h2>What Our Clients Say</h2>
          <p>Real results from real businesses we've helped scale.</p>
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
            <h2>Ready to <span className="highlight">Scale</span>?</h2>
            <p>Book a free strategy call and discover how we can fill your pipeline with qualified leads in 30 days or less.</p>
            <form className="cta-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="cta-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">
                Get Free Strategy
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
            <p className="cta-guarantee">No spam. Unsubscribe anytime. Results guaranteed or your money back.</p>
          </div>
        </motion.div>
      </div>
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
              Acquisition<span>Pro</span>
            </a>
            <p>Building predictable revenue systems for ambitious businesses ready to scale.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Lead Generation</a></li>
              <li><a href="#services">Paid Ads</a></li>
              <li><a href="#services">Sales Funnels</a></li>
              <li><a href="#services">CRM Setup</a></li>
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
    </>
  )
}

export default App
