"use client";

import Reveal from "./Reveal";

const education = [
  {
    school: "National Engineering School of Monastir (ENIM)",
    period: "2022 – 2026",
    degree: "Engineering Degree in Electrical Engineering",
    detail:
      "Electrical Systems & Renewable Energies · Microcontrollers · Embedded Systems · Signal Processing · Power Electronics",
    location: "Monastir, Tunisia",
  },
  {
    school: "Faculty of Sciences of Monastir (FSM)",
    period: "2019 – 2022",
    degree: "Preparatory Cycle for Engineering Schools",
    detail: "Physics-Chemistry (PC) · Mathematics · Physics · Chemistry · Problem Solving",
    location: "Monastir, Tunisia",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "var(--section-y) 0",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-wrap">
        <Reveal>
          <p className="section-label">Formation</p>
          <h2 className="section-heading">Education</h2>
          <p className="section-lead">
            A physics-first path into electrical engineering, renewable energy,
            and embedded systems.
          </p>
        </Reveal>

        <div>
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.08}>
              <article className="entry">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: 12,
                    marginBottom: 10,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      margin: 0,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {edu.school}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--accent)",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text)",
                    margin: "0 0 8px",
                    fontWeight: 500,
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                    margin: "0 0 8px",
                    lineHeight: 1.65,
                  }}
                >
                  {edu.detail}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-subtle)",
                    margin: 0,
                    letterSpacing: "0.04em",
                  }}
                >
                  {edu.location}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
