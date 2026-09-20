import styles from './about.module.css';

export const About = () => {
    return (
        <section id="about" className={styles.section}>
        <div className={styles.inner}>
            <div>
            <h2 className={styles.title}>Hi, I’m Mahnoor</h2>
            <p>
                I’m a web and full-stack developer with a BSc in Information Technology
                (First Class Honours).
            </p>
            <p>
                I love combining design and technology to build sleek interfaces and digital art, inspired by gaming and creative problem-solving.
            </p>
            <p>
                By day I build and maintain large business websites, Zoho systems and AI
                tools. I take on a few freelance projects at a time so each one gets proper
                attention.
            </p>
            </div>

            <figure className={styles.quote}>
            <blockquote>
                “Highly professional, detail-oriented, and quick to understand requirements.
                One of the most reliable developers I’ve worked with on Upwork.”
            </blockquote>
            <figcaption>Upwork client · 5.0 rating</figcaption>
            </figure>
        </div>
        </section>
    );
};

export default About;