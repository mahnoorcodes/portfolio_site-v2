import { useEffect } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/navbar/Navbar.jsx';
import { Hero } from './components/hero/Hero.jsx';
import { Services } from './components/services/Services.jsx';
import { Projects } from './components/projects/Projects.jsx';
import { About } from './components/about/About.jsx';
import { Contact } from './components/contact/Contact.jsx';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;