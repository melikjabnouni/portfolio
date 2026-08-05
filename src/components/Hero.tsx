"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiFileText } from "react-icons/fi";
import SignalField from "./SignalField";

const marqueeItems = [
  "ESP32",
  "STM32",
  "YOLOv8",
  "MQTT",
  "AWS IoT",
  "OpenCV",
  "TensorFlow",
  "PCB Design",
  "Python",
  "Embedded C",
  "MediaPipe",
  "Raspberry Pi",
  "SAM",
  "Docker",
  "Signal Processing",
  "Green Energy",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingTop: 72,
        overflow: "hidden",
      }}
    >
      <SignalField />

      {/* Full-bleed portrait plane */}
      <motion.div
        className="hero-portrait"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.15 }}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(52vw, 640px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/melik.png"
          alt="Melik Jabnouni"
          fill
          priority
          quality={95}
          sizes="(max-width: 768px) 100vw, 900px"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(90deg, var(--bg) 0%, rgba(10,16,18,0.55) 28%, rgba(10,16,18,0.15) 55%, transparent 78%),
              linear-gradient(180deg, rgba(10,16,18,0.55) 0%, transparent 22%, transparent 70%, rgba(10,16,18,0.85) 100%),
              linear-gradient(0deg, rgba(45,212,191,0.08), transparent 40%)
            `,
          }}
        />
      </motion.div>

      <div
        className="section-wrap hero-content"
        style={{
          position: "relative",
          zIndex: 1,
          paddingBottom: "clamp(48px, 8vw, 88px)",
          paddingTop: "clamp(48px, 12vh, 120px)",
          maxWidth: "var(--max)",
        }}
      >
        <motion.p
          className="section-label"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: 20 }}
        >
          ENIM · Monastir · Tunisia
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.2rem, 12vw, 7.5rem)",
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            margin: "0 0 28px",
            color: "var(--text)",
            maxWidth: "14ch",
          }}
        >
          Melik
          <br />
          <span
            style={{
              background:
                "linear-gradient(105deg, var(--accent) 0%, var(--copper) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Jabnouni
          </span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.15rem, 2.4vw, 1.55rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            margin: "0 0 14px",
            maxWidth: "28ch",
            lineHeight: 1.3,
          }}
        >
          Systems that sense, decide, and act.
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontSize: "1.05rem",
            color: "var(--text-muted)",
            maxWidth: "34rem",
            margin: "0 0 36px",
            lineHeight: 1.7,
          }}
        >
          Electrical engineer bridging embedded hardware, industrial IoT, and
          applied AI — from PCB and microcontrollers to cloud intelligence and
          computer vision.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <a href="mailto:melikjabnouni@gmail.com" className="btn btn-primary">
            <FiMail size={15} />
            Get in touch
          </a>
          <a
            href="/RESUME_Melik_Jabnouni.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <FiFileText size={15} />
            View resume
          </a>
          <a
            href="https://linkedin.com/in/melik-jabnouni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <FiLinkedin size={15} />
            LinkedIn
          </a>
          <a
            href="https://github.com/melikjabnouni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <FiGithub size={15} />
            GitHub
          </a>
        </motion.div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid var(--border)",
          background: "rgba(10, 16, 18, 0.65)",
          backdropFilter: "blur(8px)",
          overflow: "hidden",
          padding: "14px 0",
        }}
      >
        <div
          className="marquee-track"
          style={{ display: "flex", width: "max-content" }}
        >
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-subtle)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0 22px",
                borderRight: "1px solid var(--border)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-portrait {
            width: 100% !important;
            height: 48vh !important;
            bottom: auto !important;
            opacity: 0.55;
          }
          .hero-content {
            padding-top: clamp(42vh, 46vh, 52vh) !important;
          }
        }
      `}</style>
    </section>
  );
}
