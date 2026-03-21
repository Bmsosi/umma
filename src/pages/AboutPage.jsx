import { aboutSections } from '../data/siteContent'

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="hero-inspiration">
        <p className="hero-arabic" lang="ar" dir="rtl">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <p className="hero-ayah-text">
          مَنْ عَمِلَ صَـٰلِحًۭا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌۭ
          فَلَنُحْيِيَنَّهُۥ حَيَوٰةًۭ طَيِّبَةًۭ ۖ وَلَنَجْزِيَنَّهُمْ
          أَجْرَهُم بِأَحْسَنِ مَا كَانُوا۟ يَعْمَلُونَ ٩٧
        </p>
        <p className="hero-ayah-text">
          <strong>Quran 16:97:</strong> “Whoever does good, and is a believer, We will surely bless them with a good life,
          and We will certainly reward them according to the best of their
          deeds.”
        </p>
      </section>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Umma Community</p>
          <h1>
            People helping people through faith, care, and shared service.
          </h1>
          <p>
            Umma is a community-centered website created to connect people,
            support one another, and provide meaningful services for
            individuals, families, and the wider community.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">
              Explore Services
            </a>
            <a className="button button-secondary" href="#contact">
              Support Umma
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-card">
            <span>Community Focus</span>
            <strong>Faith, service, belonging</strong>
          </div>
          <div className="hero-card">
            <span>Support Model</span>
            <strong>Programs, donations, volunteering</strong>
          </div>
          <div className="hero-card">
            <span>Shared Purpose</span>
            <strong>Building a stronger Umma together</strong>
          </div>
        </div>
      </section>

      <section className="content-grid">
        {aboutSections.map((section) => (
          <article className="info-card" key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
