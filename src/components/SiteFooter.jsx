const quickLinks = [
  { id: 'about', label: 'About Umma' },
  { id: 'services', label: 'Services' },
  { id: 'activities', label: 'Activities' },
  { id: 'fundraising', label: 'Fundraising' },
]

const supportLinks = [
  { id: 'donate', label: 'Donate by E-Transfer' },
  { id: 'contact', label: 'Contact Umma' },
]

export default function SiteFooter({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <span className="footer-mark">Umma</span>
          <h3>Building a stronger community through care, faith, and shared responsibility.</h3>
          <p>
            Umma exists to connect people, strengthen community, and make support easier to give
            and receive.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <div className="footer-links">
            {quickLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => onNavigate(link.id)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <div className="footer-links">
            {supportLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => onNavigate(link.id)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-cta">
          <p className="eyebrow">Community Support</p>
          <h4>Help sustain Umma programs and community care.</h4>
          <a className="button button-primary" href="#donate" onClick={() => onNavigate('donate')}>
            Support Umma
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Umma Community Support Network</span>
        <span>summa2023@gmail.com</span>
      </div>

      <div className="footer-legal-row">
        <span>
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  )
}
