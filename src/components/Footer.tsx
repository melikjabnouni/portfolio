"use client";

import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 60% 80% at 80% 100%, rgba(45, 212, 191, 0.08), transparent), var(--bg)",
      }}
    >
      <div
        className="section-wrap"
        style={{ paddingTop: "clamp(64px, 10vw, 96px)", paddingBottom: 40 }}
      >
        <Reveal>
          <p className="section-label">Contact</p>
          <h2
            className="section-heading"
            style={{ maxWidth: "16ch", marginBottom: 16 }}
          >
            Let&apos;s build the next signal.
          </h2>
          <p className="section-lead" style={{ marginBottom: 36 }}>
            Open to internships and junior roles in embedded systems, industrial
            IoT, and applied AI.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 56,
            }}
          >
            <a href="mailto:melikjabnouni@gmail.com" className="btn btn-primary">
              <FiMail size={15} />
              melikjabnouni@gmail.com
            </a>
            <a href="tel:+21652758355" className="btn btn-ghost">
              <FiPhone size={15} />
              +216 52 758 355
            </a>
          </div>
        </Reveal>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            paddingTop: 28,
            borderTop: "1px solid var(--border)",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text)",
                margin: "0 0 4px",
                letterSpacing: "-0.02em",
              }}
            >
              Melik Jabnouni
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-subtle)",
                margin: 0,
                letterSpacing: "0.06em",
              }}
            >
              Embedded · IoT · AI
            </p>
          </div>

          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <a
              href="https://github.com/melikjabnouni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: "var(--text-subtle)", transition: "color 0.2s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-subtle)";
              }}
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/melik-jabnouni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "var(--text-subtle)", transition: "color 0.2s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-subtle)";
              }}
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:melikjabnouni@gmail.com"
              aria-label="Email"
              style={{ color: "var(--text-subtle)", transition: "color 0.2s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-subtle)";
              }}
            >
              <FiMail size={18} />
            </a>
          </div>

          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--text-subtle)",
              margin: 0,
              fontFamily: "var(--font-mono)",
            }}
          >
            © {new Date().getFullYear()} Melik Jabnouni
          </p>
        </div>
      </div>
    </footer>
  );
}
