import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
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
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: March 1, 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            AcquisitionPro LLC ("we," "us," or "our") operates the website at acquisitions-pro.com
            (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our Site or use our services.
          </p>
          <p>
            By using our Site or services, you agree to the collection and use of information in
            accordance with this policy. If you do not agree, please do not access the Site.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <h3>Personal Information You Provide</h3>
          <p>We may collect personally identifiable information that you voluntarily provide, including:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name and title</li>
            <li>Billing and payment information (processed securely through Stripe)</li>
            <li>Any information submitted through contact forms, discovery call bookings, or our chat assistant</li>
          </ul>

          <h3>Information Automatically Collected</h3>
          <p>When you visit our Site, we may automatically collect:</p>
          <ul>
            <li>IP address and geographic location</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited, time spent, and referring URLs</li>
            <li>Device information (type, screen resolution)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Process transactions and send related information (invoices, receipts)</li>
            <li>Communicate with you about our services, updates, and marketing (with your consent)</li>
            <li>Schedule and manage discovery calls and appointments</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website, services, and user experience</li>
            <li>Detect, prevent, and address technical issues or fraudulent activity</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. Payment Processing</h2>
          <p>
            We use <strong>Stripe, Inc.</strong> as our payment processor. When you make a payment,
            your payment card details are collected and processed directly by Stripe. We do not store
            your full credit card number on our servers. Stripe's use of your personal information is
            governed by their privacy policy at{' '}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
              stripe.com/privacy
            </a>.
          </p>
          <p>
            Stripe is PCI-DSS Level 1 certified, ensuring the highest level of security for
            processing payment information.
          </p>
        </section>

        <section>
          <h2>5. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our Site and
            hold certain information. Cookies are small data files placed on your device.
          </p>
          <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is
            being sent. However, some parts of our Site may not function properly without cookies.</p>
          <p>We use:</p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the Site to function properly</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our Site</li>
            <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>
        </section>

        <section>
          <h2>6. Third-Party Services</h2>
          <p>We may share your information with the following third-party service providers:</p>
          <ul>
            <li><strong>Stripe:</strong> Payment processing</li>
            <li><strong>Calendly:</strong> Appointment scheduling</li>
          </ul>
          <p>
            These third parties have access to your personal information only to perform specific
            tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section>
          <h2>7. Data Security</h2>
          <p>
            We implement commercially reasonable security measures to protect your personal information,
            including SSL/TLS encryption for data transmission. However, no method of transmission over
            the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>8. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes
            outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and
            enforce our agreements. When data is no longer needed, it is securely deleted or anonymized.
          </p>
        </section>

        <section>
          <h2>9. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
            <li><strong>Data portability:</strong> Request your data in a portable format</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:contact@acquisitions-pro.com">contact@acquisitions-pro.com</a>.
          </p>
        </section>

        <section>
          <h2>10. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under 18 years of age. We do not knowingly
            collect personal information from children. If we become aware that we have collected data
            from a child, we will take steps to delete it promptly.
          </p>
        </section>

        <section>
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new policy on this page and updating the "Last updated" date. Your continued
            use of the Site after changes are posted constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <ul className="contact-list">
            <li><strong>AcquisitionPro LLC</strong></li>
            <li>Email: <a href="mailto:contact@acquisitions-pro.com">contact@acquisitions-pro.com</a></li>
            <li>Website: <a href="https://acquisitions-pro.com">acquisitions-pro.com</a></li>
          </ul>
        </section>
      </div>

      <footer className="legal-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AcquisitionPro LLC. All rights reserved.</p>
          <div className="legal-footer-links">
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
