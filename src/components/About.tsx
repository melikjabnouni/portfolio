"use client";

import Reveal from "./Reveal";

const focusAreas = [
  {
    title: "Embedded systems",
    detail: "ESP32, STM32, PIC, Arduino — sensors, actuators, UART / SPI / I2C.",
  },
  {
    title: "Industrial IoT",
    detail: "MQTT pipelines, AWS IoT Core, real-time monitoring for energy & emissions.",
  },
  {
    title: "Applied AI & CV",
    detail: "YOLOv8, SAM, MediaPipe, LSTMs — edge vision to industrial prediction.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "var(--section-y) 0",
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg-elevated) 50%, var(--bg) 100%)",
        position: "relative",
      }}
    >
      <div className="section-wrap">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-heading">Built for the full stack of reality</h2>
          <p className="section-lead">
            From microcontrollers on a desk  to cloud dashboards that
            flag industrial anomalies. I design systems that stay grounded in
            hardware and sharp in software.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "start",
          }}
        >
          <Reveal delay={0.1}>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.85,
                margin: "0 0 20px",
                fontSize: "1.02rem",
              }}
            >
              I&apos;m{" "}
              <strong style={{ color: "var(--text)" }}>Melik Jabnouni</strong>, an
              Electrical Engineer from the{" "}
              <strong style={{ color: "var(--text)" }}>
                National Engineering School of Monastir (ENIM)
              </strong>
              . My
              work lives where silicon meets intelligence: sensing the physical
              world, shipping data over IoT, and closing the loop with AI.
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.85,
                margin: "0 0 28px",
                fontSize: "1.02rem",
              }}
            >
              I&apos;m looking for my first engineering opportunity in automation,
  embedded systems, industrial AI, robotics, or smart manufacturing,
  where I can contribute to real-world industrial projects, continuously
  learn from experienced engineers, and grow into a well-rounded
  professional.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { lang: "Arabic", level: "Native" },
                { lang: "French", level: "Fluent" },
                { lang: "English", level: "Fluent" },
              ].map(({ lang, level }) => (
                <span
                  key={lang}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 2,
                    border: "1px solid var(--border)",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <strong style={{ color: "var(--text)" }}>{lang}</strong>
                  <span style={{ color: "var(--text-subtle)" }}> · {level}</span>
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {focusAreas.map((area, i) => (
                <div
                  key={area.title}
                  style={{
                    padding: "22px 0",
                    borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      margin: "0 0 8px",
                      color: "var(--text)",
                      letterSpacing: "-0.02em",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        background: i === 2 ? "var(--copper)" : "var(--accent)",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    {area.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--text-muted)",
                      fontSize: "0.92rem",
                      lineHeight: 1.7,
                      paddingLeft: 16,
                    }}
                  >
                    {area.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
