import React, { useEffect, useState } from 'react'
import TreeGrowth from '../illustrations/TreeGrowth.jsx'

const MESSAGES = [
  'Your tree just grew.',
  'Thanks for checking in with yourself.',
  'A quiet moment, well kept.',
  'Your awareness is taking root.'
]

export default function ReflectSuccess({ onHome, onSuggestions }) {
  const [showTree, setShowTree] = useState(false)
  const [msg] = useState(() => MESSAGES[Math.floor(Math.random() * MESSAGES.length)])

  useEffect(() => {
    const t = setTimeout(() => setShowTree(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="screen screen--success">
      <div className="screen__body success__body">
        <div className={'success__tree-wrap' + (showTree ? ' success__tree-wrap--shown' : '')}>
          <div className="success__glow" aria-hidden />
          <div className="success__ring" aria-hidden />
          <div className="success__ring success__ring--outer" aria-hidden />
          <TreeGrowth size={240} />
        </div>

        <h1 className="success__title">{msg}</h1>
        <p className="success__sub">
          Each pause matters more than you think.
        </p>
      </div>

      <div className="bottom">
        <button type="button" className="pill" onClick={onHome}>Back to Home</button>
        <button type="button" className="linkbtn" onClick={onSuggestions}>See Suggestions</button>
      </div>
    </div>
  )
}
