import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiSend } from 'react-icons/fi';

const contactLinks = [
  {
    label: 'harlengaldino3@gmail.com',
    href: 'mailto:harlengaldino3@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: '+55 (83) 99625-3060',
    href: 'https://wa.me/5583996253060',
    icon: FaWhatsapp,
  },
  {
    label: 'Harlen539',
    href: 'https://github.com/Harlen539',
    icon: FiGithub,
  },
  {
    label: 'Harlen Galdino',
    href: 'https://www.linkedin.com/in/harlen-galdino',
    icon: FaLinkedin,
  },
];

export default function Contact({ t }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`${t.contact.mailSubject} - ${name}`);
    const body = encodeURIComponent(`${t.contact.mailName}: ${name}\nE-mail: ${email}\n\n${t.contact.mailMessage}:\n${message}`);

    window.location.href = `mailto:harlengaldino3@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <motion.section
      className="section-pad contact-section"
      id="contato"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <motion.div
          className="lined-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>{t.contact.title}</h2>
        </motion.div>

        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            viewport={{ once: true }}
          >
            <h3>{t.contact.heading}</h3>
            <p>{t.contact.text}</p>

            <div className="contact-list">
              {contactLinks.map(({ label, href, icon: Icon }, index) => (
                <motion.a
                  href={href}
                  key={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.25 + index * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <Icon />
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>

            <div className="location-line">
              <FiMapPin />
              <span>{t.contact.location}</span>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            viewport={{ once: true }}
          >
            <label>
              <span>{t.contact.name}</span>
              <input name="name" type="text" placeholder={t.contact.name} required />
            </label>
            <label>
              <span>{t.contact.email}</span>
              <input name="email" type="email" placeholder={t.contact.email} required />
            </label>
            <label>
              <span>{t.contact.message}</span>
              <textarea name="message" placeholder={t.contact.message} rows="6" required />
            </label>
            <motion.button
              className="send-button"
              type="submit"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {t.contact.send}
              <FiSend />
            </motion.button>
            <small>{t.contact.response}</small>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
