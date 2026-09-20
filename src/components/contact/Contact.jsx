import { FaLinkedin, FaGithub , FaEnvelope } from 'react-icons/fa';
import styles from './contact.module.css';

const UPWORK_URL = 'https://www.upwork.com/freelancers/~0123c8d2af1fb979c6?mp_source=share';
const LINKEDIN_URL = 'https://www.linkedin.com/in/mahnoor-faisal-36493a2ba/';
const GITHUB_URL = 'https://github.com/mahnoorcodes';
const EMAIL = 'mahnoor.faisal.h@gmail.com';

export const Contact = () => {
    return (
        <>
        <section id="contact" className={styles.section}>
            <div className={styles.cta}>
            <h2>Have a project in mind?</h2>
            <p>Tell me what you need. I’ll reply with next steps and a quote.</p>

            <div className={styles.actions}>
                <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className={styles.primary}>
                Message me on Upwork
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.ghost}>
                LinkedIn
                </a>
                <a href={`mailto:${EMAIL}`} className={styles.ghost}>
                Email me
                </a>
            </div>
            </div>
        </section>

        <footer className={styles.footer}>
            <div className={styles.footerInner}>
            <span>© {new Date().getFullYear()} Mahnoor Faisal</span>
            <span className={styles.icons}>
                <a
                    href="https://www.upwork.com/freelancers/~0123c8d2af1fb979c6?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Upwork"
                    className={styles.upworkText}
                >
                    Upwork
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>

                <a
                    href="mailto:mahnoor.faisal.h@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
            </span>
            <span>Portfolio &amp; freelance services</span>
            </div>
        </footer>
        </>
    );
};

export default Contact;