import { useEffect, useMemo, useState } from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import FeaturedProject from './components/FeaturedProject.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SkillsMarquee from './components/SkillsMarquee.jsx';
import { translations } from './i18n.js';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'pt');
  const t = useMemo(() => translations[language] || translations.pt, [language]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
    localStorage.setItem('language', language);
  }, [language]);

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  return (
    <>
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onThemeToggle={toggleTheme}
        t={t}
        theme={theme}
      />
      <main>
        <Hero t={t} />
        <About t={t} />
        <SkillsMarquee t={t} />
        <FeaturedProject t={t} />
        <Contact t={t} />
      </main>
      <Footer language={language} t={t} />
    </>
  );
}
