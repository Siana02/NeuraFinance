import './Testimonials.css';

const testimonials = [
  {
    quote: 'NeuraFinance transformed how our risk team operates. We catch anomalies in seconds, not days.',
    name: 'Priya Sharma',
    role: 'CRO · Apex Capital',
    initials: 'PS',
    accent: 'blue',
  },
  {
    quote: 'The AI recommendations alone paid for the platform within the first quarter. Incredible ROI.',
    name: 'Marcus Lee',
    role: 'Portfolio Manager · Vertex Fund',
    initials: 'ML',
    accent: 'green',
  },
  {
    quote: 'Implementation was smooth and the mobile UX is second to none. Our advisors love it.',
    name: 'Sofia Bianchi',
    role: 'Head of Digital · NovaBanca',
    initials: 'SB',
    accent: 'gold',
  },
];

const clientLogos = ['Apex Capital', 'Vertex Fund', 'NovaBanca', 'FinEdge', 'TrustVault', 'QuantumFi'];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-inner">
        <p className="test-eyebrow">Loved by Fintech Leaders</p>
        <h2 className="test-title">What Our Clients Say</h2>

        <div className="test-cards">
          {testimonials.map((t, i) => (
            <article key={i} className={`test-card test-card--${t.accent}`}>
              <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="test-author">
                <div className={`test-avatar test-avatar--${t.accent}`}>{t.initials}</div>
                <div>
                  <span className="test-name">{t.name}</span>
                  <span className="test-role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="client-logos">
          <p className="logos-label">Trusted by industry leaders</p>
          <div className="logos-row">
            {clientLogos.map(name => (
              <span key={name} className="logo-chip">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
