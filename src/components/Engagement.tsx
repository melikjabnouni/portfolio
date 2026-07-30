"use client";

import Reveal from "./Reveal";

const engagements = [
  {
    title: "Academic projects — Embedded & IoT",
    description:
      "Ongoing work across embedded electronics, microcontrollers, sensor integration, and IoT throughout the engineering program at ENIM.",
  },
  {
    title: "Self-directed learning & open source",
    description:
      "Continuous study in computer vision, ML, and IoT through personal pipelines, open-source exploration, and real-world deployments.",
  },
];

export default function Engagement() {
  return (
    <section
      id="engagement"
      style={{
        padding: "var(--section-y) 0",
        background:
          "linear-gradient(180deg, var(--bg-elevated), var(--bg))",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-wrap">
        <Reveal>
          <p className="section-label">Beyond the brief</p>
          <h2 className="section-heading">Engagement</h2>
          <p className="section-lead">
            How I keep learning when the internship ends and the next board is
            still on the bench.
          </p>
        </Reveal>

        <div
          className="engagement-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 0,
          }}
        >
          {engagements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div
                className={i === 0 ? "engagement-item engagement-item--first" : "engagement-item"}
                style={{
                  padding: "28px 0",
                  borderTop: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    margin: "0 0 12px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                    margin: 0,
                    maxWidth: "32rem",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 640px) {
          .engagement-item--first {
            padding-right: 32px;
            border-right: 1px solid var(--border);
          }
        }
      `}</style>
    </section>
  );
}
