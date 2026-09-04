import React, { useState } from 'react'
import PillButton from '../components/PillButton.jsx'

const TOGGLES = [
  {
    id: 'reflect',
    title: 'Reflection reminders',
    sub: 'A small nudge to pause and check in once a day.'
  },
  {
    id: 'growth',
    title: 'Growth moments',
    sub: 'A quiet note when your tree reaches a new stage.'
  },
  {
    id: 'weekly',
    title: 'Weekly summary',
    sub: 'A gentle summary of your week with your tree.'
  },
  {
    id: 'suggestions',
    title: 'New suggestions',
    sub: 'Occasional ideas based on your reflections.'
  }
]

export default function NotificationsScreen({ initial, onSave, onBack }) {
  const [state, setState] = useState(() => {
    const base = { reflect: true, growth: true, weekly: false, suggestions: true }
    return { ...base, ...(initial || {}) }
  })

  const toggle = (id) => setState((s) => ({ ...s, [id]: !s[id] }))

  return (
    <div className="screen screen--settings">
      <div className="profile__top">
        <span className="profile__eyebrow">Notifications</span>
        <button type="button" className="reflect__close" onClick={onBack} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M11 4 L6 9 L11 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body settings__body">
        <h1 className="settings__title">What should we whisper to you?</h1>
        <p className="settings__lede">
          Choose what feels supportive. Nothing here is urgent.
        </p>

        <div className="list" style={{ marginTop: 20 }}>
          {TOGGLES.map((t) => {
            const on = state[t.id]
            return (
              <div key={t.id} className="settings__row settings__row--bare">
                <div className="settings__row-text">
                  <div className="settings__row-title">{t.title}</div>
                  <div className="settings__row-sub">{t.sub}</div>
                </div>
                <label className="switch" aria-label={t.title}>
                  <input type="checkbox" checked={on} onChange={() => toggle(t.id)} />
                  <span className="switch__track" aria-hidden>
                    <span className="switch__knob" />
                  </span>
                </label>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bottom">
        <PillButton onClick={() => onSave(state)}>Save</PillButton>
      </div>
    </div>
  )
}
