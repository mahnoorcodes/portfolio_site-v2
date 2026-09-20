import styles from './App.module.css';
import { Navbar } from './components/navbar/Navbar.jsx';
import { Hero } from './components/hero/Hero.jsx';
import { Services } from './components/services/Services.jsx';
import { Projects } from './components/projects/Projects.jsx';
import { About } from './components/about/About.jsx';
import { Contact } from './components/contact/Contact.jsx';

function App() {
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