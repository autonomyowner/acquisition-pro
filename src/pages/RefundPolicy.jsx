import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function RefundPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-page">
      <nav className="nav scrolled">
        <div className="container nav-inner">
          <Link to="/" className="logo">
            <img src="/logo-new.png" alt="AcquisitionPro" className="logo-image" />
            <span className="logo-text">Acquisition<span>Pro</span></span>
          </Link>
          <Link to="/" className="nav-cta">Back to Home</Link>
        </div>
      </nav>

      <div className="container legal-container">
        <h1>Refund & Cancellation Policy</h1>
        <p className="legal-updated">Last updated: March 1, 2026</p>

        <section>
          <h2>1. Overview</h2>
          <p>
            At Acquisition Pro LLC, we are committed to delivering high-quality lead generation and
            client acquisition services for executive and leadership coaches. We understand that
            circumstances may change, and this policy outlines our refund and cancellation procedures.
          </p>
        </section>

        <section>
          <h2>2. Service Nature</h2>
          <p>
            Our services are custom B2B marketing and lead generation engagements that require
            significant upfront work, including strategy development, funnel creation, ad campaign
            setup, and outreach system configuration. Because of the labor-intensive and custom
            nature of our services, the following refund terms apply.
          </p>
        </section>

        <section>
          <h2>3. Cancellation Policy</h2>
          <h3>Before Service Commencement</h3>
          <p>
            If you wish to cancel before any work has begun (prior to your strategy session), you may
            request a full refund of any payments made. Cancellation requests must be submitted in
            writing to <a href="mailto:contact@acquisitions-pro.com">contact@acquisitions-pro.com</a>.
          </p>

          <h3>After Service Commencement</h3>
          <p>
            Once work has begun (after the strategy session or any deliverables have been started),
            cancellations are handled as follows:
          </p>
          <ul>
            <li>
              <strong>Within the first 7 days of service commencement:</strong> You may cancel and
              receive a prorated refund minus any work already completed and costs incurred (ad spend,
              third-party tools, etc.).
            </li>
            <li>
              <strong>After 7 days of service commencement:</strong> Cancellations will be effective
              at the end of the current billing period. No refund will be issued for the current
              billing period, but no further charges will be made.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Refund Eligibility</h2>
          <p>Refunds may be issued in the following circumstances:</p>
          <ul>
            <li>Cancellation before service commencement (full refund)</li>
            <li>Cancellation within 7 days of service start (prorated refund)</li>
            <li>Service not delivered as described in the signed service agreement</li>
            <li>Duplicate or erroneous charges (full refund of the duplicate amount)</li>
          </ul>

          <h3>Non-Refundable Items</h3>
          <p>The following are non-refundable:</p>
          <ul>
            <li>Ad spend and third-party platform costs already incurred on your behalf</li>
            <li>Custom creative work already delivered (landing pages, ad creatives, copy)</li>
            <li>Setup and configuration fees for completed work</li>
            <li>Services already rendered and delivered</li>
          </ul>
        </section>

        <section>
          <h2>5. How to Request a Refund</h2>
          <p>To request a refund or cancellation:</p>
          <ol>
            <li>
              Email us at{' '}
              <a href="mailto:contact@acquisitions-pro.com">contact@acquisitions-pro.com</a>{' '}
              with the subject line "Refund Request"
            </li>
            <li>Include your full name, email address associated with your account, and reason for the request</li>
            <li>We will acknowledge your request within 2 business days</li>
            <li>Approved refunds will be processed within 5-10 business days</li>
          </ol>
        </section>

        <section>
          <h2>6. Refund Processing</h2>
          <p>
            All approved refunds will be processed through Stripe to the original payment method.
            Please allow 5-10 business days for the refund to appear on your statement, depending
            on your bank or card issuer.
          </p>
        </section>

        <section>
          <h2>7. Disputes</h2>
          <p>
            If you are dissatisfied with our services, we encourage you to contact us first at{' '}
            <a href="mailto:contact@acquisitions-pro.com">contact@acquisitions-pro.com</a> so we
            can work together to resolve the issue. We are committed to finding a fair resolution
            before any formal dispute process.
          </p>
          <p>
            Filing a chargeback or payment dispute without first contacting us may result in
            additional fees and delay the resolution process.
          </p>
        </section>

        <section>
          <h2>8. Modifications</h2>
          <p>
            We reserve the right to update this Refund & Cancellation Policy at any time. Changes
            will be posted on this page with an updated "Last updated" date. The policy in effect
            at the time of your purchase will apply to that transaction.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>For refund requests or questions about this policy:</p>
          <ul className="contact-list">
            <li><strong>Acquisition Pro LLC</strong></li>
            <li>Email: <a href="mailto:contact@acquisitions-pro.com">contact@acquisitions-pro.com</a></li>
            <li>Website: <a href="https://acquisitions-pro.com">acquisitions-pro.com</a></li>
          </ul>
        </section>
      </div>

      <footer className="legal-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Acquisition Pro LLC. All rights reserved.</p>
          <div className="legal-footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
