import React from 'react'

export default function PillButton({ children, onClick, disabled, type = 'button' }) {
  return (
    <button
      type={type}
      className="pill"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
