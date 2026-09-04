import React from 'react'
import TreeSprout from '../illustrations/TreeSprout.jsx'

const SUGGESTIONS = [
  {
    id: 1,
    title: 'Try a "one window" evening',
    body: 'Pick one thing to read or watch — and stay with it for 20 minutes before switching apps.'
  },
  {
    id: 2,
    title: 'Notice the reaching moment',
    body: 'When you unlock your phone, pause for one breath. Ask: do I actually want to open this?'
  },
  {
    id: 3,
    title: 'A read instead of a reel',
    body: 'Swap one short-video session for a long-form article on a topic you care about.'
  },
  {
    id: 4,
    title: 'A short walk, no phone',
    body: 'Ten minutes outside without notifications. Let your attention rest.'
  }
]

export default function SuggestionsScreen({ onHome, hasItems = true }) {
  return (
    <div className="screen screen--suggestions">
      <div className="insights__top">
        <span className="insights__eyebrow">Suggestions</span>
        <button type="button" className="reflect__close" onClick={onHome} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M11 4 L6 9 L11 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body suggestions__body">
        {hasItems ? (
          <>
            <p className="suggestions__intro">
              Small, optional ideas — based on what you have been reflecting on.
            </p>
            <div className="suggestions__list">
              {SUGGESTIONS.map((s) => (
                <button key={s.id} type="button" className="suggestions__card">
                  <h3 className="suggestions__card-title">{s.title}</h3>
                  <p className="suggestions__card-body">{s.body}</p>
                  <div className="suggestions__card-cta" aria-hidden>
                    Try this
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M3 7 H11 M7 3 L11 7 L7 11"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="suggestions__empty">
            <div className="suggestions__empty-illus">
              <TreeSprout size={160} />
            </div>
            <h2 className="suggestions__empty-title">Nothing here yet</h2>
            <p className="suggestions__empty-body">
              Suggestions appear after a few reflections. Take your time.
            </p>
            <button type="button" className="pill suggestions__empty-btn" onClick={onHome}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
