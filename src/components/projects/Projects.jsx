import styles from './projects.module.css';
import projects from '../data/projects.json';
import { ProjectsCard } from './ProjectsCard';

export const Projects = () => {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Selected work</h2>
        <p className={styles.sub}>A few projects across the four areas.</p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectsCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;