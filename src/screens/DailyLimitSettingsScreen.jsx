import React, { useState } from 'react'
import PillButton from '../components/PillButton.jsx'

const PRESETS = [
  { id: 30, label: '30 min' },
  { id: 45, label: '45 min' },
  { id: 60, label: '60 min' }
]

export default function DailyLimitSettingsScreen({ initialValue = 30, initialCustom = 30, onSave, onBack }) {
  const [value, setValue] = useState(initialValue)
  const [custom, setCustom] = useState(initialCustom)

  const isCustom = value === 'custom'
  const adjust = (delta) => {
    setCustom((c) => Math.min(180, Math.max(5, c + delta)))
    setValue('custom')
  }

  return (
    <div className="screen screen--settings">
      <div className="profile__top">
        <span className="profile__eyebrow">Daily scrolling limit</span>
        <button type="button" className="reflect__close" onClick={onBack} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M11 4 L6 9 L11 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body settings__body">
        <h1 className="settings__title">How much do you want to scroll each day?</h1>
        <p className="settings__lede">
          Pick a daily amount that feels realistic. You can change it anytime.
        </p>

        <div className="list" style={{ marginTop: 20 }}>
          {PRESETS.map((p) => {
            const selected = value === p.id
            return (
              <button
                key={p.id}
                type="button"
                className={'row ' + (selected ? 'row--selected' : '')}
                onClick={() => setValue(p.id)}
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
              onClick={() => setValue('custom')}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}
              aria-pressed={isCustom}
            >
              Custom
            </button>
            <div className="stepper" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="stepper__btn" onClick={() => adjust(-5)} aria-label="Decrease">−</button>
              <div className="stepper__val">{custom} min</div>
              <button type="button" className="stepper__btn" onClick={() => adjust(5)} aria-label="Increase">+</button>
            </div>
            <div className="radio" aria-hidden style={{ marginLeft: 4 }}>
              <span className="radio__dot" style={isCustom ? { transform: 'scale(1)' } : undefined} />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <PillButton onClick={() => onSave(value === 'custom' ? { limit: 'custom', customValue: custom } : { limit: value, customValue: custom })}>
          Save
        </PillButton>
      </div>
    </div>
  )
}
