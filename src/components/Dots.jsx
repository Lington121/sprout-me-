import React from 'react'

export default function Dots({ count, active }) {
  return (
    <div className="dots" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={'dot ' + (i === active ? 'dot--active' : '')}
        />
      ))}
    </div>
  )
}
