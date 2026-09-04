import React from 'react'

export default function PersonWithPlant({ size = 280 }) {
  return (
    <svg
      width={size}
      height={(size * 260) / 280}
      viewBox="0 0 280 260"
      role="img"
      aria-label="A person pausing with a phone and a small growing plant"
    >
      <ellipse cx="140" cy="240" rx="110" ry="6" fill="#0E7A3B" opacity="0.08" />

      {/* pot + sprout */}
      <path d="M188 218 L 244 218 L 236 244 L 196 244 Z" fill="#2E3A33" />
      <rect x="184" y="214" width="64" height="8" rx="3" fill="#1B2520" />
      <rect x="214" y="184" width="6" height="32" rx="3" fill="#2E3A33" />
      <circle cx="217" cy="172" r="20" fill="#17C662" />
      <circle cx="206" cy="180" r="12" fill="#17C662" />
      <circle cx="228" cy="180" r="13" fill="#17C662" />
      <circle cx="220" cy="160" r="8"  fill="#3FE08A" />

      {/* legs */}
      <rect x="78"  y="190" width="16" height="50" rx="6" fill="#2E3A33" />
      <rect x="98"  y="190" width="16" height="50" rx="6" fill="#2E3A33" />
      <rect x="74"  y="236" width="24" height="8"  rx="4" fill="#0E1A14" />
      <rect x="94"  y="236" width="24" height="8"  rx="4" fill="#0E1A14" />

      {/* torso */}
      <path d="M70 118 C 70 104, 82 96, 96 96 L 110 96 C 124 96, 136 104, 136 118 L 132 196 L 74 196 Z" fill="#17C662" />
      <path d="M120 100 C 130 104, 136 112, 136 122 L 132 196 L 116 196 Z" fill="#0E7A3B" opacity="0.55" />

      {/* left arm (holding phone) */}
      <path d="M78 124 C 64 140, 60 168, 70 184 L 86 178 C 80 166, 82 150, 92 138 Z" fill="#17C662" />
      <circle cx="74" cy="180" r="9" fill="#F1C9A5" />
      {/* phone */}
      <rect x="58" y="168" width="22" height="34" rx="4" fill="#0E1A14" />
      <rect x="61" y="172" width="16" height="22" rx="2" fill="#3FE08A" opacity="0.65" />

      {/* right arm */}
      <path d="M128 124 C 140 140, 144 168, 138 192 L 122 188 C 126 172, 122 154, 116 138 Z" fill="#17C662" />
      <circle cx="130" cy="194" r="9" fill="#F1C9A5" />

      {/* neck */}
      <rect x="92" y="86" width="22" height="16" rx="6" fill="#F1C9A5" />
      <path d="M92 96 L 114 96 L 114 102 L 92 102 Z" fill="#D9A878" opacity="0.5" />

      {/* head */}
      <circle cx="103" cy="68" r="26" fill="#F1C9A5" />
      {/* hair */}
      <path d="M78 60 C 78 40, 96 30, 110 32 C 126 34, 132 48, 130 64 C 122 56, 110 54, 100 56 C 90 58, 82 62, 78 70 Z" fill="#0E1A14" />
      {/* eyes */}
      <circle cx="96"  cy="72" r="1.8" fill="#0E1A14" />
      <circle cx="112" cy="72" r="1.8" fill="#0E1A14" />
      {/* smile */}
      <path d="M97 80 Q 103 83 110 80" stroke="#0E1A14" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  )
}
