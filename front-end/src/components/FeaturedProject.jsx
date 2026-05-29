import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import {
  SiCss,
  SiExpress,
  SiFramer,
  SiJavascript,
  SiLucide,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiVite,
} from 'react-icons/si';
import bigsmokePreview from '../assets/bigsmoke-preview.png';
import radjaPreview from '../assets/radja-preview.png';

const projects = [
  {
    key: 'bigsmoke',
    name: 'BigSmoke Style',
    domain: 'bigsmokestyle.vercel.app',
    preview: bigsmokePreview,
    siteUrl: 'https://bigsmokestyle.vercel.app/',
    githubUrl: 'https://github.com/Harlen539/Projeto_Loja_BigSmoke.git',
    technologies: [
      { name: 'React', icon: SiReact, iconColor: '#61dafb' },
      { name: 'Vite', icon: SiVite, iconColor: '#646cff' },
      { name: 'Node.js', icon: SiNodedotjs, iconColor: '#5fa04e' },
      { name: 'Express', icon: SiExpress, iconColor: '#f5f5f5' },
      { name: 'Prisma', icon: SiPrisma, iconColor: '#2d3748' },
      { name: 'PostgreSQL', icon: SiPostgresql, iconColor: '#4169e1' },
    ],
  },
  {
    key: 'radja',
    name: 'Portfolio Radja Odonto',
    domain: 'radja-odonto.vercel.app',
    preview: radjaPreview,
    siteUrl: 'https://radja-odonto.vercel.app/',
    githubUrl: 'https://github.com/Harlen539/Portfolio-radja-odonto.git',
    technologies: [
      { name: 'React', icon: SiReact, iconColor: '#61dafb' },
      { name: 'Vite', icon: SiVite, iconColor: '#646cff' },
      { name: 'JavaScript', icon: SiJavascript, iconColor: '#f7df1e' },
      { name: 'CSS', icon: SiCss, iconColor: '#663399' },
      { name: 'Framer Motion', icon: SiFramer, iconColor: '#ffffff' },
      { name: 'Lucide React', icon: SiLucide, iconColor: '#f56565' },
    ],
  },
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

        <div className="featured-projects">
          {projects.map((project, projectIndex) => {
            const copy = t.project.items[project.key];

            return (
              <motion.article
                className="featured-card"
                key={project.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + projectIndex * 0.08, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="browser-preview real-site-preview" aria-label={copy.previewLabel}>
                  <div className="browser-top">
                    <span />
                    <span />
                    <span />
                    <small>{project.domain}</small>
                  </div>
                  <img src={project.preview} alt={copy.previewAlt} />
                </div>

                <div className="featured-content">
                  <span className="project-badge">{copy.badge}</span>
                  <h3>{project.name}</h3>
                  <p>{copy.description}</p>

                  <div className="tech-stack">
                    {project.technologies.map(({ name, icon: Icon, iconColor }, index) => (
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
                      href={project.siteUrl}
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
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={copy.githubLabel}
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
