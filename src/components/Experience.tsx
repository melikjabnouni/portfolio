"use client";

import Reveal from "./Reveal";

const experiences = [
  {
    company: "Photocarb",
    role: "Final Year Intern — Industrial IoT & Applied AI",
    period: "Feb. 2026 – Jun. 2026",
    location: "Tunisia · On-site",
    description:
      "Designed an end-to-end intelligent industrial emissions monitoring platform — ESP32 sensor network plus a hybrid AI module for real-time pollutant prediction and deviation alerting.",
    stack: [
      "ESP32",
      "Python",
      "TensorFlow/Keras",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "MQTT",
      "Docker",
    ],
  },
  {
    company: "Methane Energy Production Solutions",
    role: "Embedded IoT Intern",
    period: "Jul. 2025 – Aug. 2025",
    location: "Tunisia · On-site",
    description:
      "Built a real-time biogas monitoring system for green energy — ESP32 microcontroller streaming anaerobic digestion data over MQTT via AWS IoT Core.",
    stack: ["ESP32", "Embedded C", "MQTT", "AWS IoT"],
  },
  {
    company: "TRS BK SARL",
    role: "Electrical Systems Intern",
    period: "Jul. 2024 – Aug. 2024",
    location: "Tunisia · On-site",
    description:
      "Installed and audited residential and industrial electrical networks to NFC 15-100 standards. Diagnosed non-conformities and proposed corrective actions.",
    stack: ["Electrical Installation", "NFC 15-100", "Circuit Diagnostics"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "var(--section-y) 0",
        background:
          "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(45, 212, 191, 0.06), transparent), var(--bg-elevated)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-wrap">
        <Reveal>
          <p className="section-label">Work</p>
          <h2 className="section-heading">Experience</h2>
          <p className="section-lead">
            Industry work across emissions monitoring, green energy IoT, and
            electrical systems — always closer to the wire.
          </p>
        </Reveal>

        <div>
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.08}>
              <article className="entry">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <div style={{ flex: "1 1 220px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--copper)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        margin: "0 0 6px",
                      }}
                    >
                      {exp.company}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                        fontWeight: 700,
                        color: "var(--text)",
                        margin: 0,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                      }}
                    >
                      {exp.role}
                    </h3>
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--accent)",
                        margin: "0 0 4px",
                      }}
                    >
                      {exp.period}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-subtle)",
                        margin: 0,
                      }}
                    >
                      {exp.location}
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                    margin: "0 0 16px",
                    maxWidth: "42rem",
                  }}
                >
                  {exp.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {exp.stack.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
