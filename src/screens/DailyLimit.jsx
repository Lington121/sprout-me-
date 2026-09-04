import React from 'react'
import PillButton from '../components/PillButton.jsx'

const presets = [
  { id: 30, label: '30 min' },
  { id: 45, label: '45 min' },
  { id: 60, label: '60 min' }
]

export default function DailyLimit({ value, onChange, onNext, customValue, setCustomValue }) {
  const isCustom = value === 'custom'

  const adjust = (delta) => {
    const next = Math.min(180, Math.max(5, (customValue || 30) + delta))
    setCustomValue(next)
    if (!isCustom) onChange('custom')
  }

  const handleCustomClick = () => onChange('custom')

  return (
    <div className="screen">
      <div className="screen__body">
        <h1 className="title" style={{ marginTop: 8 }}>Set your scrolling limit.</h1>
        <p className="supporting supporting--top">
          Pick a daily amount that feels realistic. You can change it anytime.
        </p>

        <div className="list" style={{ marginTop: 20 }}>
          {presets.map((p) => {
            const selected = value === p.id
            return (
              <button
                key={p.id}
                type="button"
                className={'row ' + (selected ? 'row--selected' : '')}
                onClick={() => onChange(p.id)}
                aria-pressed={selected}
              >
                <div className="row__title">{p.label}</div>
                <div className="radio" aria-hidden>
                  <span className="radio__dot" />
                </div>
              </button>
            )
          })}

          <div className={'row ' + (isCustom ? 'row--selected' : '')}>
            <button
              type="button"
              className="row__title"
              onClick={handleCustomClick}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}
              aria-pressed={isCustom}
            >
              Custom
            </button>
            <div className="stepper" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="stepper__btn"
                onClick={() => adjust(-5)}
                aria-label="Decrease"
              >
                −
              </button>
              <div className="stepper__val">{customValue || 30} min</div>
              <button
                type="button"
                className="stepper__btn"
                onClick={() => adjust(5)}
                aria-label="Increase"
              >
                +
              </button>
            </div>
            <div className="radio" aria-hidden style={{ marginLeft: 4 }}>
              <span className="radio__dot" style={isCustom ? { transform: 'scale(1)' } : undefined} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <PillButton onClick={onNext} disabled={value == null}>
          Continue
        </PillButton>
      </div>
    </div>
  )
}
