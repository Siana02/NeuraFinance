import { ArrowRight, PlayCircle } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* animated background orbs */}
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          AI-Powered · Real-Time · Secure
        </div>

        <h1 className="hero-headline">
          Smarter Financial
          <span className="headline-accent"> Decisions</span>
          <br />with AI
        </h1>

        <p className="hero-sub">
          Real-time dashboards for risk, fraud detection, and portfolio
          insights — built for the modern fintech era.
        </p>

        <div className="hero-actions" id="hero">
          <a href="#features" className="btn-primary">
            Get Started <ArrowRight size={18} />
          </a>
          <a href="#dashboard" className="btn-secondary">
            <PlayCircle size={18} /> Request Demo
          </a>
        </div>

        <p className="hero-social-proof">
          Trusted by <strong>100+ fintech startups</strong> worldwide
        </p>
      </div>

      {/* floating stat cards */}
      <div className="hero-float-cards" aria-hidden="true">
        <div className="float-card float-card--left">
          <span className="float-label">Portfolio Return</span>
          <span className="float-value green">+24.7%</span>
        </div>
        <div className="float-card float-card--right">
          <span className="float-label">Fraud Blocked</span>
          <span className="float-value red">⚠ 143 alerts</span>
        </div>
        <div className="float-card float-card--bottom">
          <span className="float-label">AI Accuracy</span>
          <span className="float-value blue">98.3%</span>
        </div>
      </div>
    </section>
  );
}
