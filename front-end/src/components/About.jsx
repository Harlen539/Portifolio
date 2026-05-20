import { motion } from 'framer-motion';
import profilePhoto from '../assets/foto-perfil-portfolio.jpeg';

export default function About({ t }) {
  return (
    <motion.section
      className="section-pad compact about-section"
      id="sobre"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <motion.div
          className="lined-title about-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>{t.about.title}</h2>
        </motion.div>

        <motion.div
          className="about-open"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            viewport={{ once: true }}
          >
            <p>
              {t.about.text}
            </p>

            <div className="about-stats">
              {t.about.stats.map((stat, index) => (
                <motion.div
                  className="about-stat"
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.24 + index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-photo-card"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <img src={profilePhoto} alt={t.about.photoAlt} />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
