import React, { useState } from 'react'
import PillButton from '../components/PillButton.jsx'

const HOURS = Array.from({ length: 24 }, (_, h) => String(h).padStart(2, '0'))
const MINUTES = ['00', '15', '30', '45']

function TimeSelect({ value, onChange, label }) {
  const [hh, mm] = value.split(':')
  return (
    <div className="time-select">
      <span className="time-select__label">{label}</span>
      <div className="time-select__group">
        <select
          aria-label={`${label} hour`}
          value={hh}
          onChange={(e) => onChange(`${e.target.value}:${mm}`)}
        >
          {HOURS.map((h) => <option key={h} value={h}>{h}</option>)}
        </select>
        <span className="time-select__sep">:</span>
        <select
          aria-label={`${label} minutes`}
          value={mm}
          onChange={(e) => onChange(`${hh}:${e.target.value}`)}
        >
          {MINUTES.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
    </div>
  )
}

export default function QuietHoursScreen({ initial, onSave, onBack }) {
  const [enabled, setEnabled] = useState(initial?.enabled ?? true)
  const [start,   setStart]   = useState(initial?.start   ?? '22:00')
  const [end,     setEnd]     = useState(initial?.end     ?? '07:00')

  return (
    <div className="screen screen--settings">
      <div className="profile__top">
        <span className="profile__eyebrow">Quiet Hours</span>
        <button type="button" className="reflect__close" onClick={onBack} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M11 4 L6 9 L11 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body settings__body">
        <h1 className="settings__title">A gentle pause you can count on.</h1>
        <p className="settings__lede">
          During these hours, Sprout Me will not send nudges or reminders. You stay in charge.
        </p>

        <div className="settings__card">
          <div className="settings__row">
            <div>
              <div className="settings__row-title">Enable Quiet Hours</div>
              <div className="settings__row-sub">Pause all gentle reminders during this window.</div>
            </div>
            <label className="switch" aria-label="Enable Quiet Hours">
              <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
              <span className="switch__track" aria-hidden>
                <span className="switch__knob" />
              </span>
            </label>
          </div>

          <div className="settings__divider" />

          <div className="settings__time-block">
            <TimeSelect label="Start" value={start} onChange={setStart} />
            <span className="settings__time-arrow" aria-hidden>→</span>
            <TimeSelect label="End" value={end} onChange={setEnd} />
          </div>
        </div>
      </div>

      <div className="bottom">
        <PillButton onClick={() => onSave({ enabled, start, end })}>
          Save
        </PillButton>
      </div>
    </div>
  )
}
