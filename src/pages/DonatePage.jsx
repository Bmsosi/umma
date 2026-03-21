import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { donationOptions } from '../data/siteContent'

const ETRANSFER_EMAIL = 'summa112023@gmail.com'

export default function DonatePage() {
  const [selectedOption, setSelectedOption] = useState(donationOptions[0])
  const [copied, setCopied] = useState(false)

  async function handleCopyDetails() {
    const summary = [
      `Send e-transfer to: ${ETRANSFER_EMAIL}`,
      `Donation type: ${selectedOption.title}`,
      `Transfer note: ${selectedOption.transferNote}`,
    ].join('\n')

    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Donate"
        title="Choose how you would like to support Umma"
        text="Your donation helps keep services, education, outreach, and care available to the community. Select the donation type that best matches how you want to give."
      />

      <section className="donation-intro">
        <div className="donation-banner">
          <h3>How would you like to donate?</h3>
          <p>
            You can direct your contribution to a current project, education, community care, or
            ongoing monthly support for Umma.
          </p>
        </div>
      </section>

      <section className="card-grid donation-grid">
        {donationOptions.map((option) => (
          <article className="donation-card" key={option.title}>
            <h3>{option.title}</h3>
            <p>{option.text}</p>
            <button
              className="button button-primary"
              type="button"
              onClick={() => setSelectedOption(option)}
            >
              Choose This Donation
            </button>
          </article>
        ))}
      </section>

      <section className="etransfer-panel">
        <div className="etransfer-card">
          <p className="eyebrow">E-Transfer Details</p>
          <h3>{selectedOption.title}</h3>
          <p className="etransfer-text">
            Send your e-transfer to the email below and include the suggested note so Umma can
            direct your donation correctly.
          </p>

          <div className="etransfer-detail">
            <span>Recipient email</span>
            <strong>{ETRANSFER_EMAIL}</strong>
          </div>

          <div className="etransfer-detail">
            <span>Donation type</span>
            <strong>{selectedOption.title}</strong>
          </div>

          <div className="etransfer-detail">
            <span>Suggested transfer note</span>
            <strong>{selectedOption.transferNote}</strong>
          </div>

          <div className="etransfer-actions">
            <button className="button button-primary" type="button" onClick={handleCopyDetails}>
              {copied ? 'Copied' : 'Copy Details'}
            </button>
            <a
              className="button button-secondary donation-email-link"
              href={`mailto:${ETRANSFER_EMAIL}?subject=${encodeURIComponent(selectedOption.title)}&body=${encodeURIComponent(`I would like to send an e-transfer for ${selectedOption.title}.`)}`}
            >
              Email Umma
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
