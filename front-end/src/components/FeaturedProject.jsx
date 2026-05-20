import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { SiExpress, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiVite } from 'react-icons/si';
import bigsmokePreview from '../assets/bigsmoke-preview.png';

const technologies = [
  { name: 'React', icon: SiReact, iconColor: '#61dafb' },
  { name: 'Vite', icon: SiVite, iconColor: '#646cff' },
  { name: 'Node.js', icon: SiNodedotjs, iconColor: '#5fa04e' },
  { name: 'Express', icon: SiExpress, iconColor: '#f5f5f5' },
  { name: 'Prisma', icon: SiPrisma, iconColor: '#2d3748' },
  { name: 'PostgreSQL', icon: SiPostgresql, iconColor: '#4169e1' },
];

export default function FeaturedProject({ t }) {
  return (
    <motion.section
      className="section-pad compact"
      id="projeto"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <motion.div
          className="lined-title project-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>{t.project.title}</h2>
        </motion.div>

        <motion.article
          className="featured-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.01 }}
        >
          <div className="browser-preview real-site-preview" aria-label={t.project.previewLabel}>
            <div className="browser-top">
              <span />
              <span />
              <span />
              <small>bigsmokestyle.vercel.app</small>
            </div>
            <img src={bigsmokePreview} alt={t.project.previewAlt} />
          </div>

          <div className="featured-content">
            <span className="project-badge">{t.project.badge}</span>
            <h3>BigSmoke Style</h3>
            <p>{t.project.description}</p>

            <div className="tech-stack">
              {technologies.map(({ name, icon: Icon, iconColor }, index) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.22 + index * 0.04 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <Icon style={{ color: iconColor }} />
                  {name}
                </motion.span>
              ))}
            </div>

            <div className="project-actions">
              <motion.a
                className="btn btn-primary"
                href="https://bigsmokestyle.vercel.app/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {t.project.viewSite}
                <FiArrowUpRight />
              </motion.a>
              <motion.a
                className="btn btn-ghost icon-only"
                href="https://github.com/Harlen539/Projeto_Loja_BigSmoke.git"
                target="_blank"
                rel="noreferrer"
                aria-label={t.project.githubLabel}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
