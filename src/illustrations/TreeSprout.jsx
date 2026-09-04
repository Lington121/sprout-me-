import React from 'react'

export default function TreeSprout({ size = 180 }) {
  return (
    <svg width={size} height={(size * 180) / 180} viewBox="0 0 180 180" role="img" aria-label="A small sprouting tree">
      <ellipse cx="90" cy="162" rx="48" ry="6" fill="#0E7A3B" opacity="0.08" />
      <rect x="84" y="108" width="12" height="48" rx="4" fill="#2E3A33" />
      <circle cx="90"  cy="78" r="38" fill="#17C662" />
      <circle cx="62"  cy="94" r="22" fill="#17C662" />
      <circle cx="118" cy="94" r="24" fill="#17C662" />
      <circle cx="74"  cy="66" r="16" fill="#17C662" />
      <circle cx="108" cy="66" r="18" fill="#17C662" />
      <circle cx="78"  cy="86" r="12" fill="#0E7A3B" opacity="0.5" />
      <circle cx="80"  cy="60" r="7"  fill="#3FE08A" />
      <circle cx="104" cy="56" r="5"  fill="#3FE08A" />
      <path
        d="M90 50 C 90 38, 80 34, 74 36 C 76 28, 84 24, 90 22 C 92 30, 92 40, 90 50 Z"
        fill="#17C662"
      />
      <path
        d="M90 50 C 90 36, 100 32, 108 36 C 106 28, 98 24, 90 22 C 88 30, 88 40, 90 50 Z"
        fill="#3FE08A"
      />
    </svg>
  )
}
