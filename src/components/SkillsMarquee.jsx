import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import {
  SiCss,
  SiDocker,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSpring,
  SiTypescript,
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: SiJavascript, iconColor: '#f7df1e', docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'HTML', icon: SiHtml5, iconColor: '#e34f26', docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: SiCss, iconColor: '#663399', docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'React', icon: SiReact, iconColor: '#61dafb', docsUrl: 'https://react.dev/' },
  { name: 'Node.js', icon: SiNodedotjs, iconColor: '#5fa04e', docsUrl: 'https://nodejs.org/docs/latest/api/' },
  { name: 'PostgreSQL', icon: SiPostgresql, iconColor: '#4169e1', docsUrl: 'https://www.postgresql.org/docs/' },
  { name: 'Prisma', icon: SiPrisma, iconColor: '#2d3748', docsUrl: 'https://www.prisma.io/docs' },
  { name: 'Docker', icon: SiDocker, iconColor: '#2496ed', docsUrl: 'https://docs.docker.com/' },
  { name: 'Zabbix', icon: FiActivity, iconColor: '#d40000', docsUrl: 'https://www.zabbix.com/documentation/current/en/manual' },
  { name: 'Grafana', icon: SiGrafana, iconColor: '#f46800', docsUrl: 'https://grafana.com/docs/' },
  { name: 'Python', icon: SiPython, iconColor: '#3776ab', docsUrl: 'https://docs.python.org/3/' },
  { name: 'Spring Boot', icon: SiSpring, iconColor: '#6db33f', docsUrl: 'https://docs.spring.io/spring-boot/index.html' },
  { name: 'TypeScript', icon: SiTypescript, iconColor: '#3178c6', docsUrl: 'https://www.typescriptlang.org/docs/' },
  { name: 'Java', icon: FaJava, iconColor: '#f89820', docsUrl: 'https://docs.oracle.com/en/java/' },
];

const repeatedSkills = [...skills, ...skills, ...skills];
const reversedSkills = [...skills].reverse();
const repeatedReverseSkills = [...reversedSkills, ...reversedSkills, ...reversedSkills];

function SkillPill({ skill, t }) {
  const Icon = skill.icon;

  return (
    <motion.a
      className="skill-pill"
      href={skill.docsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.skills.docsLabel} ${skill.name}`}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Icon style={{ color: skill.iconColor }} />
      <span>{skill.name}</span>
    </motion.a>
  );
}

export default function SkillsMarquee({ t }) {
  return (
    <motion.section
      className="section-pad skills-section"
      id="skills"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <motion.div
          className="lined-title section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>{t.skills.title}</h2>
        </motion.div>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true }}
        >
          {t.skills.subtitle}
        </motion.p>

        <motion.div
          className="marquee-frame"
          aria-label={t.skills.aria}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="marquee-row">
            <div className="marquee-track marquee-left">
              {repeatedSkills.map((skill, index) => (
                <SkillPill key={`${skill.name}-left-${index}`} skill={skill} t={t} />
              ))}
            </div>
          </div>

          <div className="marquee-row">
            <div className="marquee-track marquee-right">
              {repeatedReverseSkills.map((skill, index) => (
                <SkillPill key={`${skill.name}-right-${index}`} skill={skill} t={t} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
