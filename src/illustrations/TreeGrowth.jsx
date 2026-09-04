import React from 'react'

export default function TreeGrowth({ size = 260 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 280 280" role="img" aria-label="Your tree just grew">
      <ellipse cx="140" cy="252" rx="92" ry="9" fill="#0E7A3B" opacity="0.1" />
      <rect x="126" y="160" width="28" height="92" rx="7" fill="#2E3A33" />
      <rect x="126" y="160" width="28" height="7" rx="3" fill="#1B2520" />
      {/* main canopy — fuller, slightly larger than TreeFull */}
      <circle cx="140" cy="96"  r="78" fill="#17C662" />
      <circle cx="80"  cy="124" r="48" fill="#17C662" />
      <circle cx="200" cy="124" r="52" fill="#17C662" />
      <circle cx="104" cy="78"  r="36" fill="#17C662" />
      <circle cx="178" cy="80"  r="38" fill="#17C662" />
      <circle cx="60"  cy="100" r="26" fill="#17C662" />
      <circle cx="220" cy="100" r="28" fill="#17C662" />
      {/* deeper shadows */}
      <circle cx="104" cy="124" r="26" fill="#0E7A3B" opacity="0.55" />
      <circle cx="182" cy="100" r="22" fill="#0E7A3B" opacity="0.5" />
      {/* highlights */}
      <circle cx="112" cy="70" r="18" fill="#3FE08A" />
      <circle cx="166" cy="58" r="12" fill="#3FE08A" />
      <circle cx="140" cy="100" r="8"  fill="#3FE08A" opacity="0.9" />
      {/* floating leaves */}
      <circle cx="40"  cy="170" r="11" fill="#17C662" />
      <circle cx="240" cy="180" r="13" fill="#17C662" />
      <circle cx="30"  cy="130" r="7"  fill="#3FE08A" />
      <circle cx="250" cy="130" r="7"  fill="#3FE08A" />
      <circle cx="50"  cy="60"  r="5"  fill="#3FE08A" opacity="0.8" />
      <circle cx="230" cy="60"  r="5"  fill="#3FE08A" opacity="0.8" />
      {/* a single new leaf top */}
      <path d="M140 30 C 140 18, 130 14, 124 16 C 126 8, 134 4, 140 2 C 142 10, 142 20, 140 30 Z" fill="#3FE08A" />
    </svg>
  )
}
