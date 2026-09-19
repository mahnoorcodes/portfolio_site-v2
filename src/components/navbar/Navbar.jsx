import React, {useState, useEffect} from 'react'
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({ onScrollTo, refs }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('aboutRef');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavClick = (scrollToRef, section) => {
        onScrollTo(scrollToRef);
        setActiveSection(section);
        setMenuOpen(false);
    };

    useEffect(() => {
        const sections = [
            { key: 'aboutRef', ref: refs.aboutRef },
            { key: 'experienceRef', ref: refs.experienceRef },
            { key: 'skillsRef', ref: refs.skillsRef },
            { key: 'projectsRef', ref: refs.projectsRef },
            { key: 'cvRef', ref: refs.cvRef },
            { key: 'contactRef', ref: refs.contactRef }
        ];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            let currentSection = 'aboutRef';

            sections.forEach(({ key, ref }) => {
                if (ref?.current && scrollPosition >= ref.current.offsetTop) currentSection = key;
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [refs]);

    return(
        <>
        <div
            className={styles.navbarTitle}
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.pushState("", document.title, window.location.pathname);
                setActiveSection('aboutRef');
                setMenuOpen(false);
            }}
        >
            Mahnoor Faisal
        </div>

        <nav className={styles.navbar}>
            <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick={toggleMenu} alt="menu" />

            <ul className={`${styles.navbarMenu} ${menuOpen ? styles.show : ''}`}>
                <li className={activeSection === 'aboutRef' ? styles.active : ''} onClick={() => handleNavClick(refs.aboutRef, 'aboutRef')}>About</li>
                <li className={activeSection === 'experienceRef' ? styles.active : ''} onClick={() => handleNavClick(refs.experienceRef, 'experienceRef')}>Experience</li>
                <li className={activeSection === 'skillsRef' ? styles.active : ''} onClick={() => handleNavClick(refs.skillsRef, 'skillsRef')}>Skills</li>
                <li className={activeSection === 'projectsRef' ? styles.active : ''} onClick={() => handleNavClick(refs.projectsRef, 'projectsRef')}>Projects</li>
                <li className={activeSection === 'cvRef' ? styles.active : ''} onClick={() => handleNavClick(refs.cvRef, 'cvRef')}>Resume</li>
                <li className={`${styles.contactButton} ${activeSection === 'contactRef' ? styles.contactActive : ''}`} onClick={() => handleNavClick(refs.contactRef, 'contactRef')}>Contact Me</li>
            </ul>
        </nav>
        </>
    );
};