import React from 'react'

export default function SproutLogo({ size = 96, color = '#ffffff' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      role="img"
      aria-label="Sprout Me logo"
    >
      <path
        d="M48 78 C 48 62, 36 56, 30 56 C 28 38, 42 26, 50 22 C 52 36, 50 50, 48 56 Z"
        fill={color}
      />
      <path
        d="M48 78 C 48 60, 62 54, 70 56 C 72 38, 56 26, 48 22 C 46 36, 48 50, 48 56 Z"
        fill={color}
        opacity="0.92"
      />
      <rect x="44" y="68" width="8" height="18" rx="4" fill={color} />
    </svg>
  )
}
