import { useEffect, useState } from 'react'
import { navigation } from '../data/siteContent'
import ummaLogo from '../logo/umma2026.png'

export default function SiteHeader({ page, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [vancouverTime, setVancouverTime] = useState('')

  useEffect(() => {
    setMenuOpen(false)
  }, [page])

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'America/Vancouver',
    })

    const tick = () => setVancouverTime(formatter.format(new Date()))

    tick()
    const intervalId = setInterval(tick, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#about"
        onClick={() => onNavigate('about')}
      >
        <img className="brand-mark" src={ummaLogo} alt="Umma logo" />
        <div>
          <strong>Umma</strong>
          <small>Community Support Socity</small>
        </div>
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="menu-clock" aria-live="polite">
        <span>Vancouver time</span>
        <strong>{vancouverTime || '--:--:--'}</strong>
      </div>

      <nav
        id="site-navigation"
        className={menuOpen ? 'site-nav site-nav-open' : 'site-nav'}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => onNavigate(item.id)}
            className={
              item.isButton
                ? page === item.id
                  ? 'nav-link nav-button active'
                  : 'nav-link nav-button'
                : page === item.id
                  ? 'nav-link active'
                  : 'nav-link'
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
