"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";

type Project = {
  title: string;
  period: string;
  theme: "teal" | "copper";
  image: string;
  images?: string[];
  featured?: boolean;
  label?: string;
  description: string;
  details: string[];
  highlights?: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    title: "EmissionsIQ — Industrial Emissions Monitoring",
    period: "2026",
    theme: "teal",
    image: "/surveillanceemissions.png",
    featured: true,
    label: "Final year internship · Photocarb",
    description:
      "End-to-end industrial emissions platform for cement-plant monitoring: ESP32 IoT network, AI prediction, live React dashboard.",
    details: [
      "Designed during the final-year internship at Photocarb for industrial environmental surveillance.",
      "Built an ESP32-based IoT sensor network streaming pollutant and ambient data over MQTT into a Node.js / Express / MongoDB backend.",
      "Developed an AI model for real-time pollutant prediction and deviation alerting against compliance thresholds.",
      "Shipped EmissionsIQ: a dashboard with live overview, alerts, history, compliance tracking, AI predictions, reports, and multi-zone site management.",
    ],
    highlights: [
      "Live KPIs: exceedance rate, performance index, mass emission, CO₂ trend",
      "Pollutant cards for CO₂, NOx, SO₂, PM2.5, PM10, VOCs with sparklines",
      "Dockerized deployment for industrial monitoring workflows",
    ],
    stack: [
      "ESP32",
      "MQTT",
      "Python",
      "TensorFlow/Keras",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Docker",
    ],
  },
  {
    title: "Super Square Wave Generator",
    period: "2023",
    theme: "copper",
    image: "/Picture2.jpg",
    images: ["/Picture2.jpg", "/PCB.jpg"],
    description:
      "PCB-based square wave generator with NCO (1 Hz–~8 MHz) and PWM up to 2 MHz on ATmega 328P.",
    details: [
      "Designed a custom PCB square-wave generator supporting two output modes: NCO (Numerically Controlled Oscillator) from 1 Hz to ~8 MHz with 1 Hz minimum step, and PWM up to 2 MHz with fully variable duty cycle.",
      "Centered on an ATmega 328P with LCD display, rotary encoder, push buttons, and terminal blocks for PWM and signal output.",
      "Produced full schematic capture and PCB routing (Altium), including crystal oscillator, decoupling, and user-interface circuitry.",
    ],
    highlights: [
      "Dual mode: NCO + variable-duty PWM",
      "Custom schematic & 3D PCB layout",
      "Encoder + LCD operator interface",
    ],
    stack: ["ATmega 328P", "C/C++", "PCB Design", "NCO", "PWM", "Altium"],
  },
  {
    title: "Tunisian License Plate Recognition",
    period: "2025",
    theme: "teal",
    image: "/car_plate.png",
    description:
      "Real-time YOLOv8 + OCR for Arabic/Latin Tunisian plates with civil vs. government classification.",
    details: [
      "Built a real-time detection and OCR pipeline for Tunisian license plates covering both Arabic and Latin scripts.",
      "Used YOLOv8 for plate localization and OCR for character recognition, with tracking IDs across frames.",
      "Classified plate categories (civil vs. government ministries) for downstream analytics, and deployed on Raspberry Pi 4 with an ESP32 camera module.",
    ],
    highlights: [
      "Bilingual Arabic / Latin OCR",
      "Government vs. civil plate tagging",
      "Edge deployment on Raspberry Pi + ESP32 cam",
    ],
    stack: ["YOLOv8", "OpenCV", "Python", "Raspberry Pi", "ESP32", "OCR"],
  },
  {
    title: "PCB Defect Detection",
    period: "2025",
    theme: "copper",
    image: "/SAM.jpg",
    description:
      "Automated PCB inspection with Roboflow detectors and SAM segmentation for component-level defects.",
    details: [
      "Developed a computer-vision pipeline for automated PCB inspection, training custom detection models on Roboflow for defect localization.",
      "Integrated SAM3 (Segment Anything Model 3) for component-level segmentation and identification, improving inspection granularity beyond bounding boxes.",
      "Structured a clear Input → SAM → Mask / Label Visualization → Output workflow for reproducible inspection runs.",
    ],
    highlights: [
      "Custom Roboflow-trained detectors",
      "SAM component segmentation",
      "Mask & label visualization pipeline",
    ],
    stack: ["Roboflow", "SAM", "Python", "OpenCV", "Deep Learning"],
  },
  {
    title: "Football Match Analysis",
    period: "2025",
    theme: "teal",
    image: "/football.png",
    description:
      "YOLOv5 + CNN sports analytics — player/ball tracking, team assignment, and performance stats.",
    details: [
      "Built a computer-vision pipeline combining YOLOv5 and CNNs to detect players and the ball across match footage.",
      "Applied KMeans clustering for automatic team assignment and generated structured performance statistics with on-field visual analytics.",
      "Overlays include jersey tracking, speed (km/h), distance covered, and live ball-control percentages per team.",
    ],
    highlights: [
      "Player & ball detection / tracking",
      "KMeans team clustering",
      "Speed, distance & possession metrics",
    ],
    stack: ["YOLOv5", "CNNs", "KMeans", "OpenCV", "Python"],
  },
  {
    title: "Gesture LED Control",
    period: "2024",
    theme: "teal",
    image: "/handgesture.png",
    description:
      "MediaPipe hand gestures controlling LED actuators wirelessly via ESP32.",
    details: [
      "Real-time hand gesture recognition with MediaPipe landmarks, mapped to LED commands (all on, toggle, all off, brightness ±).",
      "Python gesture layer sends WiFi commands to an ESP32, which drives the LED strip over GPIO.",
      "Designed as a contactless IoT human-machine interface for intuitive device control.",
    ],
    highlights: [
      "Open hand / fist / thumbs-up mappings",
      "WiFi command path to ESP32",
      "GPIO LED strip actuation",
    ],
    stack: ["ESP32", "Python", "MediaPipe", "WiFi", "Embedded C"],
  },
];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const close = useCallback(() => {
    setActive(null);
    setGalleryIndex(0);
  }, []);

  const open = (project: Project) => {
    setGalleryIndex(0);
    setActive(project);
  };

  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      const gallery = active.images?.length ? active.images : [active.image];
      if (gallery.length < 2) return;
      if (e.key === "ArrowRight") {
        setGalleryIndex((i) => (i + 1) % gallery.length);
      }
      if (e.key === "ArrowLeft") {
        setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length);
      }
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <section
      id="projects"
      style={{
        padding: "var(--section-y) 0",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-wrap">
        <Reveal>
          <p className="section-label">Build</p>
          <h2 className="section-heading">Projects</h2>
          <p className="section-lead">
            From industrial emissions intelligence to boards, vision pipelines,
            and gesture interfaces. Click a project for the full story.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
            gap: 32,
          }}
        >
          {projects.map((proj, i) => (
            <Reveal
              key={proj.title}
              delay={(i % 3) * 0.08}
              style={proj.featured ? { gridColumn: "1 / -1" } : undefined}
            >
              <button
                type="button"
                onClick={() => open(proj)}
                className="project-card"
                style={{
                  display: proj.featured ? "grid" : "block",
                  gridTemplateColumns: proj.featured
                    ? "repeat(auto-fit, minmax(min(320px, 100%), 1fr))"
                    : undefined,
                  gap: proj.featured ? 28 : undefined,
                  alignItems: "center",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  color: "inherit",
                  fontFamily: "inherit",
                }}
              >
                <div
                  className="project-visual"
                  style={{
                    marginBottom: proj.featured ? 0 : "1.25rem",
                    border:
                      proj.theme === "teal"
                        ? "1px solid rgba(45, 212, 191, 0.2)"
                        : "1px solid rgba(196, 120, 74, 0.25)",
                    background: "var(--bg-soft)",
                  }}
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    quality={95}
                    sizes={
                      proj.featured
                        ? "(max-width: 768px) 100vw, 900px"
                        : "(max-width: 768px) 100vw, 700px"
                    }
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                  <span
                    className="project-open-hint"
                    style={{
                      position: "absolute",
                      right: 14,
                      bottom: 14,
                      zIndex: 3,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 10px",
                      background: "rgba(10, 16, 18, 0.82)",
                      border: "1px solid var(--border)",
                      borderRadius: 2,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    View
                    <FiArrowUpRight size={12} />
                  </span>
                </div>

                <div>
                  {(proj.featured || proj.label) && (
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        margin: "0 0 10px",
                      }}
                    >
                      {proj.label ?? "Featured"} · {proj.period}
                    </p>
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 10,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: proj.featured ? "1.35rem" : "1.15rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        margin: 0,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                      }}
                    >
                      {proj.title}
                    </h3>
                    {!proj.featured && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--text-subtle)",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {proj.period}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      margin: "0 0 14px",
                      maxWidth: proj.featured ? "40rem" : undefined,
                    }}
                  >
                    {proj.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className={
                          proj.theme === "copper"
                            ? "badge badge--copper"
                            : "badge"
                        }
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(6, 10, 12, 0.82)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px 16px",
              overflowY: "auto",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "min(1100px, 100%)",
                maxHeight: "min(94vh, 980px)",
                overflow: "auto",
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderRadius: 2,
                position: "relative",
              }}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close project details"
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  zIndex: 5,
                  width: 40,
                  height: 40,
                  display: "grid",
                  placeItems: "center",
                  background: "rgba(10, 16, 18, 0.9)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  cursor: "pointer",
                  borderRadius: 2,
                }}
              >
                <FiX size={18} />
              </button>

              {(() => {
                const gallery = active.images?.length
                  ? active.images
                  : [active.image];
                const current = gallery[galleryIndex] ?? active.image;

                return (
                  <>
                    <div
                      style={{
                        width: "100%",
                        background: "#070b0d",
                        borderBottom: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "min(52vh, 520px)",
                        padding: "12px",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={current}
                        alt={active.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "min(70vh, 720px)",
                          objectFit: "contain",
                          display: "block",
                          imageRendering: "auto",
                        }}
                      />
                    </div>

                    {gallery.length > 1 && (
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          padding: "12px 20px 0",
                          flexWrap: "wrap",
                        }}
                      >
                        {gallery.map((src, idx) => (
                          <button
                            key={src}
                            type="button"
                            onClick={() => setGalleryIndex(idx)}
                            style={{
                              position: "relative",
                              width: 88,
                              height: 56,
                              border:
                                idx === galleryIndex
                                  ? "1px solid var(--accent)"
                                  : "1px solid var(--border)",
                              padding: 0,
                              cursor: "pointer",
                              background: "#070b0d",
                              borderRadius: 2,
                              overflow: "hidden",
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={src}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                );
              })()}

              <div style={{ padding: "24px 28px 32px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    margin: "0 0 10px",
                  }}
                >
                  {active.label ? `${active.label} · ` : ""}
                  {active.period}
                </p>

                <h3
                  id="project-modal-title"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.35rem, 3vw, 1.85rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    margin: "0 0 18px",
                    color: "var(--text)",
                    lineHeight: 1.2,
                  }}
                >
                  {active.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    marginBottom: 22,
                  }}
                >
                  {active.details.map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      style={{
                        margin: 0,
                        fontSize: "0.95rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.75,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {active.highlights && (
                  <ul
                    style={{
                      margin: "0 0 22px",
                      padding: "0 0 0 18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {active.highlights.map((item) => (
                      <li
                        key={item}
                        style={{
                          color: "var(--text)",
                          fontSize: "0.9rem",
                          lineHeight: 1.55,
                        }}
                      >
                        <span style={{ color: "var(--text-muted)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {active.stack.map((tech) => (
                    <span
                      key={tech}
                      className={
                        active.theme === "copper"
                          ? "badge badge--copper"
                          : "badge"
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .project-card:hover .project-visual {
          border-color: var(--accent-border) !important;
        }
        .project-card:hover .project-open-hint {
          background: rgba(45, 212, 191, 0.15);
        }
        .project-card:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 4px;
        }
      `}</style>
    </section>
  );
}
