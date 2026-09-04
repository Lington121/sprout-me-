import React, { useState } from 'react'

export default function LiquidNav({ items = [], activeId, onSelect }) {
  const [hover, setHover] = useState(null)
  const total = items.length
  const activeIndex = Math.max(0, items.findIndex((i) => i.id === activeId))
  const highlightIndex = hover ?? activeIndex

  return (
    <div className="liquid" role="navigation" aria-label="Primary sections">
      <div className="liquid__bar">
        <div
          className="liquid__pill"
          style={{
            width: `${100 / total}%`,
            transform: `translateX(${highlightIndex * 100}%)`
          }}
          aria-hidden
        />
        {items.map((item, i) => {
          const active = item.id === activeId
          const isCenter = item.center === true
          return (
            <button
              key={item.id}
              type="button"
              className={
                'liquid__item' +
                (active ? ' liquid__item--active' : '') +
                (isCenter ? ' liquid__item--center' : '')
              }
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              onClick={() => onSelect && onSelect(item.id)}
              aria-label={item.label}
              aria-current={active ? 'page' : undefined}
            >
              <span className="liquid__icon" aria-hidden>{item.icon}</span>
              <span className="liquid__label">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
