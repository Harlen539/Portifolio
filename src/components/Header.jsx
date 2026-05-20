import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGlobe, FiMoon, FiSun } from 'react-icons/fi';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import logo from '../assets/logo-portifolio.png';
import { languages } from '../i18n.js';

const navKeys = [
  { key: 'home', href: '#inicio' },
  { key: 'about', href: '#sobre' },
  { key: 'skills', href: '#skills' },
  { key: 'project', href: '#projeto' },
  { key: 'contact', href: '#contato' },
];

export default function Header({ language, onLanguageChange, onThemeToggle, t, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = navKeys.map((item) => ({ ...item, label: t.nav[item.key] }));

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <nav className="nav-shell" aria-label={t.nav.aria}>
        <motion.a
          className="brand"
          href="#inicio"
          aria-label={t.nav.brand}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <img src={logo} alt="Logo Harlen Galdino" />
        </motion.a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>

        <div className="desktop-nav-group">
          <div className="nav-links desktop-links">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="nav-icon-button"
              type="button"
              aria-label={t.nav.toggleTheme}
              onClick={onThemeToggle}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            <label className="language-control" aria-label={t.nav.language}>
              <FiGlobe />
              <select value={language} onChange={(event) => onLanguageChange(event.target.value)}>
                {languages.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.shortLabel}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="nav-links mobile-links is-open"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -12, opacity: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mobile-nav-actions">
                <button className="nav-icon-button" type="button" aria-label={t.nav.toggleTheme} onClick={onThemeToggle}>
                  {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </button>

                <label className="language-control" aria-label={t.nav.language}>
                  <FiGlobe />
                  <select value={language} onChange={(event) => onLanguageChange(event.target.value)}>
                    {languages.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.shortLabel}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
