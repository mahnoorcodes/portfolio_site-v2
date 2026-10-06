import styles from "./services.module.css";
const services = [
    {
        name: "Websites & WordPress",
        summary:
        "High-performing websites built for real businesses, with clean UX, responsive layouts and strong technical foundations.",
        points: [
        "Business websites, landing pages and full site builds",
        "Divi 4 & 5 and Elementor development",
        "Redesigns, responsive fixes and Figma to WordPress",
        "Performance optimisation, technical SEO and Yoast",
        "Custom JavaScript, PHP and reusable components",
        ],
        tools: [
        "WordPress",
        "Divi 4 & 5",
        "Elementor",
        "JavaScript",
        "PHP",
        "Yoast SEO",
        ],
    },
    {
        name: "Zoho & Business Automation",
        summary:
        "Connected business systems that turn leads, enquiries and support requests into organised, automated workflows.",
        points: [
        "Zoho CRM setup, pipelines, workflows and automation",
        "Zoho Desk and multi-channel support systems",
        "Lead, contact and deal synchronisation across platforms",
        "Custom Zoho Flow automations and API integrations",
        "Google Sheets, email, WhatsApp and telephony integrations",
        ],
        tools: [
        "Zoho CRM",
        "Zoho Desk",
        "Zoho Flow",
        "Zoho SalesIQ",
        "COQL",
        "Google Sheets",
        ],
    },
    {
        name: "AI & Intelligent Systems",
        summary:
        "Practical AI systems that automate repetitive work, improve customer support and turn business data into useful workflows.",
        points: [
        "Website and WhatsApp AI chatbots",
        "AI-powered lead capture and customer support",
        "Automated quotation and document generation",
        "Custom AI assistants connected to business data",
        "LLM integrations and knowledge-retrieval systems",
        ],
        tools: [
        "Claude API",
        "OpenAI API",
        "Picky Assist",
        "WhatsApp Business API",
        "RAG",
        ],
    },
    {
        name: "Full-stack Business Systems",
        summary:
        "Custom internal tools that bring your business processes, data and integrations into one streamlined system.",
        points: [
        "CRM, quoting and administrative dashboards",
        "React and PHP applications with secure authentication",
        "REST APIs and third-party system integrations",
        "Role-based access and server-side permissions",
        "Async job queues for AI and document-processing workflows",
        "GitHub Actions and automated deployment pipelines",
        ],
        tools: [
        "React + Vite",
        "PHP",
        "REST APIs",
        "Authentication",
        "RBAC",
        "GitHub Actions",
        "Docker",
        ],
    },
];

export const Services = () => {
return (
<section id="services" className={styles.section}>
    <div className={styles.inner}>
    <h2 className={styles.title} data-reveal>
        How I can help
    </h2>
    <p
        className={styles.sub}
        data-reveal
        style={{ "--reveal-delay": "100ms" }}
    >
        Four areas of work. Choose one, or combine them as your business
        grows.
    </p>

    <div className={styles.list}>
        {services.map((service, index) => (
        <details
            key={service.name}
            className={styles.item}
            open={index === 0}
            data-reveal
            style={{ "--reveal-delay": `${index * 120}ms` }}
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
