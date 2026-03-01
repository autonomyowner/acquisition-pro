import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
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
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: March 1, 2026</p>

        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you and
            AcquisitionPro LLC ("we," "us," or "our") governing your use of our website at
            acquisitions-pro.com (the "Site") and our lead generation, marketing, and client
            acquisition services (the "Services").
          </p>
          <p>
            By accessing the Site or purchasing our Services, you agree to be bound by these Terms.
            If you do not agree, do not use the Site or Services.
          </p>
        </section>

        <section>
          <h2>2. Description of Services</h2>
          <p>AcquisitionPro LLC provides LinkedIn outreach services for executive and leadership coaches. Our services may include:</p>
          <ul>
            <li>LinkedIn outreach campaign setup and management</li>
            <li>LinkedIn profile optimization</li>
            <li>Personalized messaging and connection strategies</li>
            <li>Prospect targeting and list building</li>
          </ul>
          <p>
            The specific scope of services will be outlined in a service agreement or proposal
            provided after your discovery call. Services are customized based on your coaching
            niche, target audience, and business goals.
          </p>
        </section>

        <section>
          <h2>3. Eligibility</h2>
          <p>
            To use our Services, you must be at least 18 years old and have the legal capacity to
            enter into a binding agreement. By using our Services, you represent and warrant that you
            meet these requirements.
          </p>
        </section>

        <section>
          <h2>4. Discovery Calls and Onboarding</h2>
          <p>
            Our discovery calls are provided free of charge with no obligation. During the call, we
            will assess your coaching business needs and determine if our Services are a good fit.
            If both parties agree to proceed, a separate service agreement with detailed deliverables,
            timelines, and pricing will be provided.
          </p>
        </section>

        <section>
          <h2>5. Payment Terms</h2>
          <ul>
            <li>All payments are processed securely through Stripe</li>
            <li>Pricing and payment schedules will be outlined in your individual service agreement</li>
            <li>Payments are due on the dates specified in your service agreement</li>
            <li>All fees are quoted in US Dollars (USD) unless otherwise stated</li>
            <li>Late payments may result in suspension of services until the account is brought current</li>
            <li>You are responsible for any applicable taxes</li>
          </ul>
        </section>

        <section>
          <h2>6. Results Disclaimer</h2>
          <p>
            <strong>Important:</strong> While we strive to deliver exceptional results, we cannot
            and do not guarantee specific outcomes. Results may vary based on factors
            including but not limited to:
          </p>
          <ul>
            <li>Your coaching niche and target market</li>
            <li>Your pricing and service offerings</li>
            <li>Market conditions and competition</li>
            <li>Your responsiveness and participation in the process</li>
            <li>Your sales skills and ability to close deals</li>
          </ul>
          <p>
            Past performance does not guarantee future results. Any revenue figures, appointment
            numbers, or success metrics shared are illustrative of what is possible and should not
            be interpreted as a promise or guarantee of similar results.
          </p>
        </section>

        <section>
          <h2>7. Client Responsibilities</h2>
          <p>To ensure the best possible results, you agree to:</p>
          <ul>
            <li>Provide accurate and timely information about your business</li>
            <li>Respond to our communications within a reasonable timeframe</li>
            <li>Grant necessary access to accounts and platforms as required</li>
            <li>Show up to scheduled calls and appointments</li>
            <li>Comply with applicable laws regarding your coaching services</li>
          </ul>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>
            All content on the Site, including text, graphics, logos, images, and software, is the
            property of AcquisitionPro LLC and is protected by intellectual property laws. You may
            not reproduce, distribute, or create derivative works from any content without our
            written permission.
          </p>
          <p>
            Custom materials created specifically for your campaigns (landing pages, ad copy, etc.)
            will be addressed in your individual service agreement.
          </p>
        </section>

        <section>
          <h2>9. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any proprietary or sensitive information shared
            during the course of the engagement. This includes business strategies, client data,
            pricing, and campaign performance metrics.
          </p>
        </section>

        <section>
          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, AcquisitionPro LLC shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including but not
            limited to loss of profits, revenue, data, or business opportunities, arising from your
            use of our Site or Services.
          </p>
          <p>
            Our total liability for any claim arising from the Services shall not exceed the total
            amount paid by you for the Services in the preceding 3 months.
          </p>
        </section>

        <section>
          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless AcquisitionPro LLC, its officers, employees,
            and agents from any claims, damages, losses, or expenses arising from your use of the
            Services, violation of these Terms, or violation of any third-party rights.
          </p>
        </section>

        <section>
          <h2>12. Termination</h2>
          <p>
            Either party may terminate the service engagement as outlined in the individual service
            agreement. We reserve the right to suspend or terminate access to the Site at our
            discretion if you violate these Terms.
          </p>
        </section>

        <section>
          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the
            United States. Any disputes arising from these Terms or the Services shall be resolved
            through good-faith negotiation, and if necessary, binding arbitration.
          </p>
        </section>

        <section>
          <h2>14. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective upon
            posting to the Site. Your continued use of the Site or Services after any changes
            constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2>15. Contact Us</h2>
          <p>If you have questions about these Terms, please contact us:</p>
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
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
