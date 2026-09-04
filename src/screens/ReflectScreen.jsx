import React, { useState } from 'react'

const CONTENT_OPTIONS = [
  'Educational / Useful',
  'Entertaining',
  'Mixed',
  'Not sure'
]

const VALUE_OPTIONS = [
  'Yes, something useful or interesting',
  'A little',
  'Not really',
  'Just needed a break'
]

const MOODS = [
  { id: 'calm',      label: 'Calm',      icon: '◯' },
  { id: 'tired',     label: 'Tired',     icon: '◐' },
  { id: 'curious',   label: 'Curious',   icon: '?' },
  { id: 'inspired',  label: 'Inspired',  icon: '✦' },
  { id: 'neutral',   label: 'Neutral',   icon: '–' }
]

export default function ReflectScreen({ onDone, onSkip, onClose }) {
  const [content, setContent] = useState(null)
  const [value,   setValue]   = useState(null)
  const [mood,    setMood]    = useState(null)
  const [note,    setNote]    = useState('')
  const [saveAsIdea, setSaveAsIdea] = useState(false)

  return (
    <div className="screen screen--reflect">
      {/* TOP */}
      <div className="reflect__top">
        <span className="reflect__eyebrow">Quick check-in</span>
        <button type="button" className="reflect__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 4 L14 14 M14 4 L4 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body reflect__body">
        {/* QUESTION 1 */}
        <div className="reflect__q">
          <h2 className="reflect__q-title">
            What kind of content did you spend most of your time with today?
          </h2>
          <div className="reflect__chips">
            {CONTENT_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                className={'reflect__chip' + (content === opt ? ' reflect__chip--selected' : '')}
                onClick={() => setContent(opt)}
                aria-pressed={content === opt}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* QUESTION 2 */}
        <div className="reflect__q">
          <h2 className="reflect__q-title">Did you get anything out of it?</h2>
          <div className="reflect__chips">
            {VALUE_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                className={'reflect__chip' + (value === opt ? ' reflect__chip--selected' : '')}
                onClick={() => setValue(opt)}
                aria-pressed={value === opt}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* MOOD ROW */}
        <div className="reflect__mood">
          <span className="reflect__mood-label">How are you feeling?</span>
          <div className="reflect__mood-row">
            {MOODS.map((m) => (
              <button
                key={m.id}
                type="button"
                className={'reflect__mood-chip' + (mood === m.id ? ' reflect__mood-chip--selected' : '')}
                onClick={() => setMood(m.id)}
                aria-pressed={mood === m.id}
                aria-label={m.label}
              >
                <span className="reflect__mood-icon" aria-hidden>{m.icon}</span>
                <span className="reflect__mood-name">{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* NOTE */}
        <div className="reflect__note">
          <textarea
            className="reflect__note-input"
            placeholder="Any thought or idea you want to keep?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            maxLength={200}
          />
          {note.trim() && (
            <label className="reflect__idea-toggle">
              <input
                type="checkbox"
                checked={saveAsIdea}
                onChange={(e) => setSaveAsIdea(e.target.checked)}
              />
              <span className="reflect__idea-switch" aria-hidden>
                <span className="reflect__idea-knob" />
              </span>
              <span className="reflect__idea-label">Save as Idea</span>
            </label>
          )}
        </div>
      </div>

      <div className="bottom">
        <button type="button" className="pill" onClick={onDone}>Done</button>
        <button type="button" className="linkbtn" onClick={onSkip}>Skip for now</button>
      </div>
    </div>
  )
}
