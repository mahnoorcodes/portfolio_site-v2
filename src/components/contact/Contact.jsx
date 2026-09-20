import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from './contact.module.css';

const UPWORK_URL = 'https://www.upwork.com/freelancers/~0123c8d2af1fb979c6?mp_source=share';
const LINKEDIN_URL = 'https://www.linkedin.com/in/mahnoor-faisal-36493a2ba/';
const GITHUB_URL = 'https://github.com/mahnoorcodes';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('xrpbeved');

    if (state.succeeded) {
        return (
        <div className={styles.success} role="status">
            <h3>Thanks, your message is on its way</h3>
            <p>I’ll reply with next steps and a quote as soon as I can.</p>
        </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" autoComplete="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.error} />
        </div>

        <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" name="email" autoComplete="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
        </div>

        <div className={styles.field}>
            <label htmlFor="message">How can I help?</label>
            <textarea id="message" name="message" rows="5" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.error} />
        </div>

        {/* Spam trap: real visitors never see or fill this in */}
        <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className={styles.hidden} />

        <ValidationError errors={state.errors} className={styles.error} />

        <button type="submit" disabled={state.submitting} className={styles.submit}>
            {state.submitting ? 'Sending…' : 'Send message'}
        </button>
        </form>
    );
    };

export const Contact = () => {
    return (
        <>
        <section id="contact" className={styles.section}>
            <div className={styles.cta}>
            <div className={styles.intro}>
                <h2>Have a project in mind?</h2>
                <p>Tell me what you need. I’ll reply with next steps and a quote.</p>
    
                <div className={styles.actions}>
                <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className={styles.primary}>
                    Message me on Upwork
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.ghost}>
                    LinkedIn
                </a>
                </div>
            </div>
    
            <div className={styles.divider}>
                <span>Or, drop me a message</span>
            </div>
    
            <ContactForm />
            </div>
        </section>
    
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
            <span>© {new Date().getFullYear()} Mahnoor Faisal</span>
    
            <span className={styles.icons}>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" aria-label="Upwork" className={styles.upworkText}>
                Upwork
                </a>
                <a href="mailto:mahnoor.faisal.h@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </span>
    
            <span>Portfolio &amp; freelance services</span>
            </div>
        </footer>
        </>
    );
    };
    
    export default Contact;