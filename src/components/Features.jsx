import { Activity, Lock, Cpu, Smartphone } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Activity size={36} />,
    title: 'Real-Time Analytics',
    desc: 'Sub-second data pipelines deliver live market signals directly to your dashboard.',
  },
  {
    icon: <Lock size={36} />,
    title: 'Bank-Grade Security',
    desc: 'ISO 27001 certified infrastructure with end-to-end encryption and zero-trust access.',
  },
  {
    icon: <Cpu size={36} />,
    title: 'AI-Driven Recommendations',
    desc: 'Proprietary ML models surface actionable insights tailored to your portfolio.',
  },
  {
    icon: <Smartphone size={36} />,
    title: 'Mobile-First Design',
    desc: 'Pixel-perfect on any device — phone, tablet, or desktop.',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section-inner">
        <p className="features-eyebrow">Why NeuraFinance</p>
        <h2 className="features-title">Built for the Future of Finance</h2>
        <p className="features-sub">
          Everything your team needs to make data-driven decisions with confidence.
        </p>

        <div className="features-grid">
          {features.map((f, i) => (
            <article key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
