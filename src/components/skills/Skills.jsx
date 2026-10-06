import React, { useEffect, useRef } from "react";
import styles from "./skills.module.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    items: [
      "JavaScript",
      "React",
      "Vite",
      "React Native",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "UI/UX Implementation",
    ],
  },
  {
    number: "02",
    title: "WordPress",
    items: [
      "WordPress",
      "Elementor",
      "Divi 4 & 5",
      "Custom Components",
      "Yoast SEO",
      "Performance Optimization",
    ],
  },
  {
    number: "03",
    title: "Full-stack",
    items: [
      "PHP",
      "C#",
      "ASP.NET",
      "SQL",
      "REST APIs",
      "Authentication",
      "RBAC",
      "Async Job Queues",
    ],
  },
  {
    number: "04",
    title: "AI & Automation",
    items: [
      "Claude API",
      "OpenAI API",
      "AI Chatbots",
      "RAG",
      "Zoho CRM",
      "Zoho Flow",
      "Zoho SalesIQ",
    ],
  },
  {
    number: "05",
    title: "Integrations",
    items: [
      "WhatsApp Business API",
      "Google Sheets API",
      "Google Drive API",
      "3CX",
      "SMTP",
      "Zoho COQL",
    ],
  },
  {
    number: "06",
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Figma",
      "Vercel",
      "Hostinger",
      "Android Studio",
    ],
  },
];

export const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add(styles.visible);
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className={styles.skillsSection}>
      <div className={styles.inner}>
        <div className={styles.sectionIntro}>
          <h1 className={styles.title}>Technical Stack</h1>
          <p className={styles.subtitle}>
            The technologies and platforms I use to build websites,
            applications, automations, and business systems.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.skillGroup}>
              <div className={styles.groupHeader}>
                <span className={styles.number}>{group.number}</span>
                <h2>{group.title}</h2>
              </div>

              <div className={styles.skills}>
                {group.items.map((skill) => (
                  <span key={skill} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
