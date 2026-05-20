import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMapPin, FiArrowUp } from 'react-icons/fi';
import logo from '../assets/logo-portifolio.png';

const footerNavKeys = [
  { key: 'about', href: '#sobre' },
  { key: 'skills', href: '#skills' },
  { key: 'project', href: '#projeto' },
  { key: 'contact', href: '#contato' },
];

const languageLabels = {
  pt: 'PT-BR',
  en: 'EN',
  es: 'ES',
};

export default function Footer({ language, t }) {
  const footerNav = footerNavKeys.map((item) => ({ ...item, label: t.nav[item.key] }));
  const languageLine = ['pt', 'en', 'es'].map((code) => languageLabels[code]);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#inicio" aria-label={t.footer.backHome}>
            <img src={logo} alt="Logo Harlen Galdino" />
            <strong className="footer-name">Harlen Galdino<span className="dot">.</span></strong>
          </a>
          <p className="footer-description">{t.footer.description}</p>
          <div className="footer-socials">
            <a className="social-link" href="https://github.com/Harlen539" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/harlen-galdino" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a className="social-link" href="mailto:harlengaldino3@gmail.com" aria-label="E-mail">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label={t.footer.footerNavAria}>
          <h3>{t.footer.navTitle}</h3>
          {footerNav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-status">
          <h3>{t.footer.statusTitle}</h3>
          <p className="status-text"><span className="status-dot" /> {t.footer.status}</p>
          <p className="location-text"><FiMapPin className="location-icon" /> {t.footer.location}</p>
          <div className="language-line">
            {languageLine.map((label) => (
              <span
                className={label === languageLabels[language] ? 'language-active' : 'language-muted'}
                key={label}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <small>© {new Date().getFullYear()} Harlen Galdino. {t.footer.rights}</small>
        <a href="#inicio">
          {t.footer.backTop}
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
