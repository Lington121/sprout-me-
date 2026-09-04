import React from 'react'

export default function TreeFull({ size = 260 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 260 260" role="img" aria-label="A flourishing geometric tree">
      <ellipse cx="130" cy="232" rx="78" ry="8" fill="#0E7A3B" opacity="0.08" />
      <rect x="118" y="150" width="24" height="78" rx="6" fill="#2E3A33" />
      <rect x="118" y="150" width="24" height="6" rx="3" fill="#1B2520" />
      <circle cx="130" cy="92" r="68" fill="#17C662" />
      <circle cx="78"  cy="118" r="42" fill="#17C662" />
      <circle cx="184" cy="118" r="46" fill="#17C662" />
      <circle cx="100" cy="78"  r="32" fill="#17C662" />
      <circle cx="166" cy="78"  r="34" fill="#17C662" />
      <circle cx="100" cy="118" r="22" fill="#0E7A3B" opacity="0.55" />
      <circle cx="170" cy="98"  r="18" fill="#0E7A3B" opacity="0.45" />
      <circle cx="108" cy="72" r="14" fill="#3FE08A" />
      <circle cx="156" cy="62" r="8"  fill="#3FE08A" opacity="0.9" />
      <circle cx="48"  cy="160" r="9" fill="#17C662" />
      <circle cx="214" cy="170" r="11" fill="#17C662" />
      <circle cx="40"  cy="120" r="6" fill="#3FE08A" />
      <circle cx="222" cy="120" r="6" fill="#3FE08A" />
    </svg>
  )
}
