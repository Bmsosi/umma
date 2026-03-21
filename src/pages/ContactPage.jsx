import SectionTitle from '../components/SectionTitle'

export default function ContactPage() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Contact"
        title="Reach out, volunteer, or support the mission"
        text="Use the form below to ask a question, request a service, or offer your support to Umma."
      />
      <section className="contact-layout">
        <form className="contact-form">
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="How can we help?" />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" placeholder="Write your message here" />
          </label>
          <button className="button button-primary" type="submit">
            Send Message
          </button>
        </form>

        <div className="contact-panel">
          <h3>Support Umma</h3>
          <p>
            Your support helps Umma continue community programs, education, outreach, and care
            services for families and individuals.
          </p>
          <div className="contact-stat">
            <span>Community first</span>
            <strong>Driven by faith and service</strong>
          </div>
          <div className="contact-stat">
            <span>Get involved</span>
            <strong>Donate, volunteer, sponsor</strong>
          </div>
        </div>
      </section>
    </div>
  )
}
