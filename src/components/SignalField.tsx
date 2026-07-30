"use client";

/**
 * Full-bleed atmospheric layer: circuit grid + live signal waves.
 * Reflects Melik's embedded / IoT / energy identity.
 */
export default function SignalField() {
  return (
    <div className="signal-field" aria-hidden="true">
      <div className="signal-glow signal-glow--teal" />
      <div className="signal-glow signal-glow--copper" />
      <svg className="signal-grid" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="circuit"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0H0V48"
              fill="none"
              stroke="rgba(45, 212, 191, 0.06)"
              strokeWidth="1"
            />
            <circle cx="0" cy="0" r="1.5" fill="rgba(196, 120, 74, 0.25)" />
            <circle cx="48" cy="48" r="1.5" fill="rgba(45, 212, 191, 0.2)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      <svg
        className="signal-wave"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="wave-path wave-path--a"
          d="M0 100 Q150 40 300 100 T600 100 T900 100 T1200 100"
          fill="none"
          stroke="rgba(45, 212, 191, 0.35)"
          strokeWidth="1.5"
        />
        <path
          className="wave-path wave-path--b"
          d="M0 100 Q150 160 300 100 T600 100 T900 100 T1200 100"
          fill="none"
          stroke="rgba(196, 120, 74, 0.28)"
          strokeWidth="1.5"
        />
      </svg>

      <div className="signal-trace signal-trace--1" />
      <div className="signal-trace signal-trace--2" />
      <div className="signal-trace signal-trace--3" />
    </div>
  );
}
