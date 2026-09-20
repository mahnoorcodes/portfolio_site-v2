import styles from './services.module.css';

const services = [
    {
        name: 'Websites & WordPress',
        summary: 'Fast, modern, responsive sites that look great on every device.',
        points: [
        'Business websites and landing pages',
        'Redesigns, UI fixes and Figma to WordPress',
        'Speed optimisation and Yoast SEO',
        'Custom JavaScript, PHP and CSS components',
        ],
        tools: ['Divi 4 & 5', 'Elementor', 'React', 'Yoast SEO', 'Figma'],
    },
    {
        name: 'Zoho & business automation',
        summary: 'Connect your tools so leads, tickets and follow-ups run on their own.',
        points: [
        'Zoho CRM setup, pipelines and workflows',
        'Ticketing and support systems across every channel',
        'Two-way syncs between your CRM and other tools',
        'Live Google Sheets and email integrations',
        ],
        tools: ['Zoho CRM', 'Zoho Desk', 'Zoho Flow', 'Zoho SalesIQ', 'Google Sheets'],
    },
    {
        name: 'AI & chatbot systems',
        summary: 'Chatbots and AI tools that answer customers and save your team hours.',
        points: [
        'Website and WhatsApp chatbots',
        'Lead capture and customer-support automation',
        'AI-generated quotes and documents',
        'Custom AI assistants using your own data',
        ],
        tools: ['Claude API', 'OpenAI', 'Picky Assist', 'WhatsApp', 'RAG'],
    },
    {
        name: 'Full-stack & internal systems',
        summary: 'Custom dashboards and tools built around how your business works.',
        points: [
        'CRM, quoting and admin dashboards',
        'Secure logins and role-based access',
        'REST API and telephony integrations',
        'Automated deployment with CI/CD',
        ],
        tools: ['React + Vite', 'PHP', 'REST APIs', 'GitHub Actions', 'Docker'],
    },
    ];

    export const Services = () => {
    return (
        <section id="services" className={styles.section}>
        <div className={styles.inner}>
            <h2 className={styles.title} data-reveal>How I can help</h2>
            <p className={styles.sub} data-reveal style={{ '--reveal-delay': '100ms' }}>
            Four areas of work. Choose one, or combine them as your business grows.
            </p>

            <div className={styles.list}>
            {services.map((service, index) => (
                <details
                key={service.name}
                className={styles.item}
                open={index === 0}
                data-reveal
                style={{ '--reveal-delay': `${index * 120}ms` }}
                >
                <summary className={styles.summary}>
                    <span className={styles.name}>{service.name}</span>
                    <span className={styles.one}>{service.summary}</span>
                    <span className={styles.plus} aria-hidden="true" />
                </summary>

                <div className={styles.body}>
                    <ul className={styles.points}>
                    {service.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                    </ul>
                    <div className={styles.tools}>
                    {service.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                    ))}
                    </div>
                </div>
                </details>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Services;