import React, { useState } from 'react'

export default function CardSlider({ items = [] }) {
  const [active, setActive] = useState(0)
  const total = items.length
  if (total === 0) return null

  const go = (delta) => setActive((a) => (a + delta + total) % total)

  return (
    <div className="cslider">
      <div className="cslider__viewport">
        {items.map((item, i) => {
          const offset = (i - active + total) % total
          // Visual offset for stacked cards: 0 = front, 1 = next behind, last = far behind
          const depth = offset <= total / 2 ? offset : offset - total
          return (
            <button
              key={item.id ?? i}
              type="button"
              className="cslider__card"
              style={{
                '--depth': depth,
                '--abs-depth': Math.abs(depth),
                zIndex: total - Math.abs(depth)
              }}
              onClick={() => {
                if (depth === 0) {
                  if (item.onClick) item.onClick()
                } else {
                  setActive((a) => (a + depth + total) % total)
                }
              }}
              aria-label={item.title}
            >
              <div className="cslider__card-eyebrow">{item.eyebrow}</div>
              <div className="cslider__card-title">{item.title}</div>
              <div className="cslider__card-body">{item.body}</div>
              {item.cta && <div className="cslider__card-cta">{item.cta} →</div>}
            </button>
          )
        })}
      </div>

      <div className="cslider__controls">
        <button type="button" className="cslider__nav" onClick={() => go(-1)} aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 3 L5 8 L10 13"/>
          </svg>
        </button>
        <div className="cslider__dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={'cslider__dot' + (i === active ? ' cslider__dot--active' : '')}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" className="cslider__nav" onClick={() => go(1)} aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3 L11 8 L6 13"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
