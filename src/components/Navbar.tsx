"use client";

import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX, FiFileText } from "react-icons/fi";

const navLinks = [
  { href: "#about", id: "about", label: "About" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#experience", id: "experience", label: "Work" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#education", id: "education", label: "Education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
          return;
        }

        // Fallback: pick the section whose top is closest above the midpoint
        const mid = window.innerHeight * 0.35;
        let current = "";
        for (const el of elements) {
          const top = el.getBoundingClientRect().top;
          if (top - mid <= 0) current = el.id;
        }
        if (current) setActiveId(current);
      },
      {
        root: null,
        // Account for fixed navbar; bias toward the upper portion of the viewport
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Clear highlight while still in the hero
    const onScrollHero = () => {
      if (window.scrollY < 120) setActiveId("");
    };
    window.addEventListener("scroll", onScrollHero, { passive: true });
    onScrollHero();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollHero);
    };
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    if (id && id !== "home") setActiveId(id);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle = (id: string, mobile = false) => {
    const active = activeId === id;
    return {
      background: "none" as const,
      border: "none" as const,
      cursor: "pointer" as const,
      fontSize: mobile ? "0.95rem" : "0.84rem",
      color: active ? "var(--accent)" : "var(--text-muted)",
      fontWeight: active ? 600 : 500,
      transition: "color 0.2s",
      padding: mobile ? "12px 0" : "4px 0",
      fontFamily: "var(--font-body)",
      position: "relative" as const,
      width: mobile ? "100%" : undefined,
      textAlign: (mobile ? "left" : "center") as "left" | "center",
      borderBottom: mobile ? "1px solid var(--border)" : "none",
    };
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10, 16, 18, 0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "background 0.35s, border-color 0.35s",
      }}
    >
      <div
        className="section-wrap"
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => go("#home")}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "var(--text)",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 12px rgba(45, 212, 191, 0.7)",
              animation: "nav-pulse 2.4s ease-in-out infinite",
            }}
          />
          Melik
        </button>

        <ul
          className="nav-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((l) => {
            const active = activeId === l.id;
            return (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  aria-current={active ? "true" : undefined}
                  className={active ? "nav-link nav-link--active" : "nav-link"}
                  style={linkStyle(l.id)}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = active
                      ? "var(--accent)"
                      : "var(--text-muted)";
                  }}
                >
                  {l.label}
                </button>
              </li>
            );
          })}
          <li
            style={{
              display: "flex",
              gap: 14,
              marginLeft: 4,
              alignItems: "center",
            }}
          >
            <a
              href="/Resume_Melik_Jabnouni.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: "8px 14px", fontSize: "0.8rem" }}
            >
              <FiFileText size={14} />
              Resume
            </a>
            <a
              href="https://github.com/melikjabnouni"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
              aria-label="GitHub"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-muted)";
              }}
            >
              <FiGithub size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/melik-jabnouni-1237aa241"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
              aria-label="LinkedIn"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-muted)";
              }}
            >
              <FiLinkedin size={17} />
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-burger"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)",
            display: "none",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          style={{
            background: "rgba(10, 16, 18, 0.96)",
            borderTop: "1px solid var(--border)",
            padding: "12px 24px 20px",
          }}
        >
          {navLinks.map((l) => {
            const active = activeId === l.id;
            return (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                aria-current={active ? "true" : undefined}
                style={linkStyle(l.id, true)}
              >
                {l.label}
              </button>
            );
          })}
          <a
            href="/Resume_Melik_Jabnouni.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
          >
            <FiFileText size={15} />
            View resume
          </a>
        </div>
      )}

      <style>{`
        @keyframes nav-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.85); }
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link--active::after {
          transform: scaleX(1);
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
