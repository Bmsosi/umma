import SectionTitle from '../components/SectionTitle'
import { services } from '../data/siteContent'

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Services"
        title="Support for important moments and everyday community life"
        text="Umma provides services that bring people together, strengthen faith, and offer support through both joyful and difficult times."
      />
      <section className="card-grid">
        {services.map((service) => (
          <article className="service-card" key={service}>
            <h3>{service}</h3>
            <p>
              This service is part of Umma&apos;s mission to care for the community with dignity,
              compassion, and consistency.
            </p>
          </article>
        ))}
      </section>
    </div>
  )
}
