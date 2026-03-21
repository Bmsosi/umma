import { useEffect, useState } from 'react'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { navigation } from './data/siteContent'
import AboutPage from './pages/AboutPage'
import ActivitiesPage from './pages/ActivitiesPage'
import ContactPage from './pages/ContactPage'
import DonatePage from './pages/DonatePage'
import FundraisingPage from './pages/FundraisingPage'
import ServicesPage from './pages/ServicesPage'

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '')
  return navigation.some((item) => item.id === hash) ? hash : 'about'
}

const pages = {
  about: <AboutPage />,
  services: <ServicesPage />,
  activities: <ActivitiesPage />,
  fundraising: <FundraisingPage />,
  contact: <ContactPage />,
  donate: <DonatePage />,
}

export default function App() {
  const [page, setPage] = useState(getPageFromHash())

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash())

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  function handleNavigate(nextPage) {
    setPage(nextPage)
    window.location.hash = nextPage
  }

  return (
    <div className="app-shell">
      <SiteHeader page={page} onNavigate={handleNavigate} />

      <main>{pages[page]}</main>

      <SiteFooter onNavigate={handleNavigate} />
    </div>
  )
}
