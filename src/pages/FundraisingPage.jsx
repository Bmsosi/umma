import SectionTitle from '../components/SectionTitle'
import { fundraisingProjects, supportOptions } from '../data/siteContent'

export default function FundraisingPage() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Fundraising"
        title="Projects seeking support from the community"
        text="This page highlights the projects Umma is advertising for support and the fundraising efforts needed to keep community services active and growing."
      />
      <section className="fundraising-layout">
        <div className="fundraising-list">
          {fundraisingProjects.map((project) => (
            <article className="fund-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <a className="button button-primary card-link" href="#donate">
                Learn More
              </a>
            </article>
          ))}
        </div>
        <aside className="support-panel">
          <h3>Ways to Support Umma</h3>
          <ul>
            {supportOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  )
}
