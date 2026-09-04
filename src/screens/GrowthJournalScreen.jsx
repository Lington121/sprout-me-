import React from 'react'
import TreeSprout from '../illustrations/TreeSprout.jsx'

const ENTRIES = [
  {
    id: 1,
    date: 'Today',
    stage: 3,
    title: 'Educational and calm',
    body: 'Most of today was reading long-form. Felt grounded after.'
  },
  {
    id: 2,
    date: 'Yesterday',
    stage: 2,
    title: 'Mixed but lighter',
    body: 'A bit of everything. I noticed the urge to switch tabs.'
  },
  {
    id: 3,
    date: '2 days ago',
    stage: 2,
    title: 'Just needed a break',
    body: 'Took a break after a long day. Nothing to fix.'
  },
  {
    id: 4,
    date: '3 days ago',
    stage: 2,
    title: 'Curious and inspired',
    body: 'Watched a few short tutorials on photography.'
  },
  {
    id: 5,
    date: '5 days ago',
    stage: 1,
    title: 'A quiet day',
    body: 'Less screen time than usual. Felt easy.'
  }
]

function MiniTree({ stage }) {
  const fill = '#17C662'
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <ellipse cx="18" cy="32" rx="9" ry="1.5" fill="#0E7A3B" opacity="0.10" />
      <rect x="16.5" y="22" width="3" height="10" rx="1" fill="#2E3A33" />
      <circle cx="18" cy="14" r={6 + stage * 1.2} fill={fill} />
      <circle cx="12" cy="18" r={3 + stage * 0.8} fill={fill} />
      <circle cx="24" cy="18" r={3 + stage * 0.8} fill={fill} />
      <circle cx="20" cy="10" r="2" fill="#3FE08A" />
    </svg>
  )
}

export default function GrowthJournalScreen({ onBack, hasEntries = true }) {
  return (
    <div className="screen screen--journal">
      <div className="profile__top">
        <span className="profile__eyebrow">Growth Journal</span>
        <button type="button" className="reflect__close" onClick={onBack} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M11 4 L6 9 L11 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body journal__body">
        {hasEntries ? (
          <ol className="journal__list">
            {ENTRIES.map((e, i) => (
              <li key={e.id} className="journal__item">
                <div className="journal__rail" aria-hidden>
                  <span className="journal__dot" />
                  {i < ENTRIES.length - 1 && <span className="journal__line" />}
                </div>
                <div className="journal__content">
                  <div className="journal__date">{e.date}</div>
                  <div className="journal__card">
                    <div className="journal__card-head">
                      <h3 className="journal__card-title">{e.title}</h3>
                      <MiniTree stage={e.stage} />
                    </div>
                    <p className="journal__card-body">{e.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="journal__empty">
            <div className="journal__empty-illus">
              <TreeSprout size={140} />
            </div>
            <h2 className="journal__empty-title">Your journal is new</h2>
            <p className="journal__empty-body">
              Each reflection will quietly appear here. Nothing to organize.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
