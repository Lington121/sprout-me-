import React from 'react'
import TreeFull from '../illustrations/TreeFull.jsx'

function describe(state) {
  const style = state.style === 'gentle' ? 'Gentle' : 'Strict'
  const limit =
    state.limit === 'custom'
      ? `${state.customValue} min (custom)`
      : `${state.limit} min`
  const mode = state.mode === 'smart' ? 'Smart Mode' : 'Simple Mode'
  const name = state.treeName?.trim() ? `"${state.treeName.trim()}"` : 'unnamed'
  return `Style: ${style} support
Tree: ${name}
Daily limit: ${limit}
Mode: ${mode}`
}

export default function Done({ state, onReset, onGoHome }) {
  return (
    <div className="screen">
      <div className="screen__body done" style={{ alignItems: 'center' }}>
        <div className="illus" style={{ minHeight: 220 }}>
          <TreeFull size={220} />
        </div>
        <h1 className="headline" style={{ fontSize: 24 }}>{"You're all set."}</h1>
        <p className="supporting" style={{ maxWidth: 320 }}>
          A calm, simple plan, made for you. Your tree will grow as you do.
        </p>
        <div className="done__summary">{describe(state)}</div>
        <button type="button" className="pill done__home-btn" onClick={onGoHome}>
          Go to Home
        </button>
        <button type="button" className="linkbtn" onClick={onReset}>
          Start over
        </button>
      </div>
    </div>
  )
}
