import React, { useState } from 'react'
import PillButton from '../components/PillButton.jsx'
import OptionRow from '../components/OptionRow.jsx'

const OPTIONS = [
  {
    id: 'gentle',
    title: 'Gentle',
    sub: 'Soft reminders that help you pause — never pressure, never guilt.'
  },
  {
    id: 'strict',
    title: 'Strict',
    sub: 'Clearer limits with firmer nudges when you reach them.'
  }
]

export default function StyleSettingsScreen({ initial = 'gentle', onSave, onBack }) {
  const [value, setValue] = useState(initial)

  return (
    <div className="screen screen--settings">
      <div className="profile__top">
        <span className="profile__eyebrow">How Sprout Me supports you</span>
        <button type="button" className="reflect__close" onClick={onBack} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M11 4 L6 9 L11 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body settings__body">
        <h1 className="settings__title">Pick the tone that fits you best.</h1>
        <p className="settings__lede">
          You can switch any time. There is no wrong choice.
        </p>

        <div className="options" style={{ marginTop: 24 }}>
          {OPTIONS.map((o) => (
            <OptionRow
              key={o.id}
              selected={value === o.id}
              onClick={() => setValue(o.id)}
              title={o.title}
              sub={o.sub}
            />
          ))}
        </div>
      </div>

      <div className="bottom">
        <PillButton onClick={() => onSave(value)}>Save</PillButton>
      </div>
    </div>
  )
}
