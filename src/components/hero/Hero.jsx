import { useEffect, useState } from 'react';
import styles from './hero.module.css';

const UPWORK_URL = 'https://www.upwork.com/freelancers/~0123c8d2af1fb979c6?mp_source=share';

export const Hero = () => {
  const [animate, setAnimate] = useState(false);

  // Fill the speed bars shortly after the page loads
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="top" className={styles.hero}>
      <div>
        <div className={styles.status}>
          <span className={styles.dot} />
          Open to freelance projects
        </div>

        <h1 className={styles.title}>
          I build websites, automations and AI systems that help businesses grow.
        </h1>

        <p className={styles.lede}>
          WordPress, Zoho, AI chatbots and custom full-stack tools. Clean work,
          clear communication, delivered on time.
        </p>

        <div className={styles.actions}>
          <a href="#services" className={styles.primary}>View services</a>
          <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className={styles.ghost}>
            Hire me on Upwork
          </a>
        </div>
      </div>

      <div className={styles.proofWrap}>
        <aside className={`${styles.proof} ${animate ? styles.go : ''}`} aria-label="Example result">
          <h2>Page speed score</h2>
          <p>Large corporate Divi websites, before and after optimisation.</p>

          <div className={styles.bar}>
            <div className={styles.label}><span>Before</span><strong>30–40</strong></div>
            <div className={styles.track}><div className={`${styles.fill} ${styles.before}`} /></div>
          </div>

          <div className={styles.bar}>
            <div className={styles.label}><span>After</span><strong>90+</strong></div>
            <div className={styles.track}><div className={`${styles.fill} ${styles.after}`} /></div>
          </div>

          <div className={styles.rating}>
            <span className={styles.stars} aria-hidden="true">★★★★★</span>
            <span>5.0 on Upwork · Rising Talent</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;