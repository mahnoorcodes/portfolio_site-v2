import styles from './projects.module.css';

export const ProjectsCard = ({
    title,
    pillar,
    imageSrc,
    tone = 'violet',
    description,
    skills = [],
    githubLink,
    liveDemo,
    index = 0,
    }) => {
        return (
        <article
            className={styles.card}
            data-reveal
            style={{ '--reveal-delay': `${(index % 3) * 120}ms` }}
        >
        {/* Screenshot if you have one, otherwise a coloured placeholder */}
        {imageSrc ? (
            <img
            src={`${import.meta.env.BASE_URL}${imageSrc}`}
            alt={`${title} preview`}
            className={styles.image}
            loading="lazy"
            />
        ) : (
            <div className={styles.placeholder} data-tone={tone} aria-hidden="true" />
        )}

        <div className={styles.content}>
            <small className={styles.pillar}>{pillar}</small>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.description}>{description}</p>

            <ul className={styles.skills}>
            {skills.map((skill) => (
                <li key={skill}>{skill}</li>
            ))}
            </ul>

            {(liveDemo || githubLink) && (
            <div className={styles.links}>
                {liveDemo && (
                <a href={liveDemo} target="_blank" rel="noopener noreferrer">View live site</a>
                )}
                {githubLink && (
                <a href={githubLink.trim()} target="_blank" rel="noopener noreferrer">View code</a>
                )}
            </div>
            )}
        </div>
        </article>
    );
};