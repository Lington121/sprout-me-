import React from 'react'

export default function PhoneFrame({ children, statusLight = false }) {
  return (
    <div className="phone" role="presentation">
      <div className="phone__notch" />
      <div className={'phone__status ' + (statusLight ? 'phone__status--light' : '')}>
        <span>9:41</span>
        <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
          <span aria-hidden>•••</span>
          <span aria-hidden>◐</span>
          <span aria-hidden>▮</span>
        </span>
      </div>
      {children}
      <div className="phone__home" />
    </div>
  )
}
