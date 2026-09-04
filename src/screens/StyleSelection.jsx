import React from 'react'
import PillButton from '../components/PillButton.jsx'
import OptionRow from '../components/OptionRow.jsx'

const options = [
  {
    id: 'gentle',
    title: 'Gentle',
    sub: 'Soft reminders that help you pause \u2014 never pressure, never guilt.'
  },
  {
    id: 'strict',
    title: 'Strict',
    sub: 'Clearer limits with firmer nudges when you reach them.'
  }
]

export default function StyleSelection({ value, onChange, onNext }) {
  return (
    <div className="screen">
      <div className="screen__body">
        <h1 className="title" style={{ marginTop: 8 }}>
          How would you like Sprout Me to support you?
        </h1>
        <div className="options">
          {options.map((o) => (
            <OptionRow
              key={o.id}
              selected={value === o.id}
              onClick={() => onChange(o.id)}
              title={o.title}
              sub={o.sub}
            />
          ))}
        </div>
      </div>
      <div className="bottom">
        <PillButton onClick={onNext} disabled={!value}>
          Continue
        </PillButton>
      </div>
    </div>
  )
}
