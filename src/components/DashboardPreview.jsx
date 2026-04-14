import { LineChart, Shield, BarChart3, Lightbulb } from 'lucide-react';
import './DashboardPreview.css';

const cards = [
  {
    id: 'portfolio',
    icon: <LineChart size={40} />,
    title: 'Portfolio Performance',
    desc: 'Live P&L tracking, asset allocation, and trend forecasting.',
    accent: 'blue',
    badge: '+24.7%',
  },
  {
    id: 'fraud',
    icon: <Shield size={40} />,
    title: 'Fraud Alerts',
    desc: 'Real-time anomaly detection across every transaction stream.',
    accent: 'red',
    badge: '143 blocked',
  },
  {
    id: 'risk',
    icon: <BarChart3 size={40} />,
    title: 'Risk Analysis',
    desc: 'Multi-factor risk scoring with green/red exposure highlights.',
    accent: 'green',
    badge: 'Low Risk',
  },
  {
    id: 'ai',
    icon: <Lightbulb size={40} />,
    title: 'AI Recommendations',
    desc: 'Personalised insights surfaced by our proprietary ML engine.',
    accent: 'gold',
    badge: '12 insights',
  },
];

export default function DashboardPreview() {
  return (
    <section className="dashboard" id="dashboard">
      <div className="section-inner">
        <p className="section-eyebrow">Live Intelligence</p>
        <h2 className="section-title">Your AI-Powered Command Centre</h2>
        <p className="section-sub">
          Every metric your team needs, in one beautiful interface.
        </p>

        <div className="dash-cards">
          {cards.map(card => (
            <article key={card.id} className={`dash-card dash-card--${card.accent}`}>
              <div className={`dash-icon dash-icon--${card.accent}`}>
                {card.icon}
              </div>
              <span className={`dash-badge dash-badge--${card.accent}`}>{card.badge}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="dash-bar">
                <div className="dash-bar-fill" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
