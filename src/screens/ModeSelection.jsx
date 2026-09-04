import React from 'react'
import PillButton from '../components/PillButton.jsx'
import OptionRow from '../components/OptionRow.jsx'

const options = [
  {
    id: 'smart',
    title: 'Smart Mode',
    sub: 'Adapts to how you actually scroll.'
  },
  {
    id: 'simple',
    title: 'Simple Mode',
    sub: 'Same gentle nudges, every day.'
  }
]

export default function ModeSelection({ value, onChange, onNext }) {
  return (
    <div className="screen">
      <div className="screen__body">
        <h1 className="title" style={{ marginTop: 8 }}>Choose your mode.</h1>
        <p className="supporting supporting--top">
          Smart Mode learns from your patterns and adapts nudges over time.
          Simple Mode keeps things straightforward and predictable.
        </p>
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
