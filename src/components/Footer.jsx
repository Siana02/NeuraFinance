import { Globe, Mail, Share2, ShieldCheck } from 'lucide-react';
import './Footer.css';

const nav = [
  { label: 'About', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'Support', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Contact', href: '#contact' },
];

const badges = ['ISO 27001', 'GDPR Compliant', 'SOC 2 Type II', 'PCI DSS'];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">NEURA<span>FINANCE</span></span>
            <p className="footer-tagline">
              AI-powered insights for smarter financial decisions.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Website"><Globe size={20} /></a>
              <a href="#" aria-label="Email"><Mail size={20} /></a>
              <a href="#" aria-label="Share"><Share2 size={20} /></a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {nav.map(link => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>

        <div className="footer-badges">
          {badges.map(b => (
            <span key={b} className="footer-badge">
              <ShieldCheck size={14} /> {b}
            </span>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NeuraFinance. All rights reserved.</span>
          <span>Trusted by 100+ fintech startups worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
