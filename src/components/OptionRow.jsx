import React from 'react'

export default function OptionRow({ selected, onClick, title, sub, children }) {
  return (
    <button
      type="button"
      className={'card ' + (selected ? 'card--selected' : '')}
      onClick={onClick}
      aria-pressed={!!selected}
    >
      <div className="card__body">
        <div className="card__title">{title}</div>
        {sub && <div className="card__sub">{sub}</div>}
      </div>
      {children ? children : (
        <div className="radio" aria-hidden>
          <span className="radio__dot" />
        </div>
      )}
    </button>
  )
}
