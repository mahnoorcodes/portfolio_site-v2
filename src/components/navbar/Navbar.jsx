import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';
import mahnoorfaisallogo from '../../assets/mahnoorfaisallogo.png';

const links = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = () => {
  const logo = { title: "mahnoorfaisal", image: mahnoorfaisallogo };
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Highlight the link for the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const menuClass = menuOpen ? `${styles.menu} ${styles.show}` : styles.menu;

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#top" onClick={closeMenu}>
            <img src={logo.image} alt={logo.title} width="" height="40"/> 
          </a>
        </div>
      </nav>

        <nav aria-label="Main">
          <ul className={menuClass}>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? styles.active : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className={styles.hireBtn}>
          Work with Me
        </a>

        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;