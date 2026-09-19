import { useRef, useEffect} from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
import styles from './hero.module.css';
import Spline from '@splinetool/react-spline';
import staticVoxelImage from '../../assets/staticvoxelspline.png';


export const Hero = () => {
  
  const titleRef = useRef(null);

  useEffect(() => {
    const elements = [titleRef.current];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="hero" className={styles.heroSection}>
      {/* Left Column */}
      {/* Right Column */}
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 ref={titleRef} className={styles.heroTitle}>
            console.log("Hello Im MAHNOOR");
          </h1>

          <p className={styles.heroSubtitle}>Front-End Developer • UI/UX Enthusiast</p>
          <a
            href="https://docs.google.com/document/d/1EoF3uQ2ADoFM8KLTveH_Rdi29of-D_eGV4BRjfF_Of4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            Download Resume <FaDownload style={{ marginLeft: '8px' }} />
          </a>
          {/* Contact Icons */}
          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/mahnoor-faisal-36493a2ba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/mahnoorcodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.upwork.com/freelancers/~0123c8d2af1fb979c6?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className={styles.upworkText}
            >
              Upwork
            </a>

            <a
              href="mailto:mahnoor.faisal.h@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>       
      </div>
    </section>
  );
};

export default Hero;
