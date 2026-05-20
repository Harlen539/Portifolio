import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import FlipWords from './ui/FlipWords.jsx';

export default function Hero({ t }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setIsMouseInside(true);
  }

  function handleMouseLeave() {
    setIsMouseInside(false);
  }

  return (
    <motion.section
      className="hero section-pad"
      id="inicio"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="hero-grid-base" aria-hidden="true" />
      <div
        className="hero-grid-spotlight"
        style={{
          opacity: isMouseInside ? 1 : 0,
          maskImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)`,
        }}
        aria-hidden="true"
      />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span
            className="status-badge"
            role="img"
            aria-label={t.hero.status}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span aria-hidden="true" />
          </motion.span>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Harlen Galdino
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <FlipWords words={t.hero.roles} />
          </motion.div>

          <motion.p
            className="hero-location"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' }}
          >
            <FiMapPin />
            {t.hero.location}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
