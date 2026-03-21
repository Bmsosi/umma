import SectionTitle from '../components/SectionTitle'
import { activities } from '../data/siteContent'

export default function ActivitiesPage() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Activities"
        title="A gallery of community moments"
        text="These activity highlights show the kinds of gatherings, programs, and community efforts that Umma has already brought together."
      />
      <section className="gallery-grid">
        {activities.map((activity) => (
          <article className="gallery-card" key={activity.title}>
            <img src={activity.image} alt={activity.title} />
            <div className="gallery-copy">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <a className="button button-primary card-link" href="#contact">
                Read More
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
