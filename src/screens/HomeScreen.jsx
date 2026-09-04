import React, { useState } from 'react'
import TreeFull from '../illustrations/TreeFull.jsx'

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

const MESSAGES = [
  'Your tree is growing quietly.',
  'New leaves appeared today.',
  "You're on a 4-day streak.",
  'A moment of stillness, well spent.',
  'Your reflections are taking root.'
]
const randMsg = () => MESSAGES[Math.floor(Math.random() * MESSAGES.length)]

export default function HomeScreen() {
  const [nudgeOpen, setNudgeOpen] = useState(false)
  const msg = randMsg()

  return (
    <div className="screen home">
      {/* ===== TOP BAR ===== */}
      <div className="home__topbar">
        <span className="home__greeting">{getGreeting()}</span>
        <button type="button" className="home__profile" aria-label="Settings">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="12" cy="8" r="3.5"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            <path d="M16.5 8.5 L19 6 M21.5 8.5 L19 6 M19 6v2.5"/>
          </svg>
        </button>
      </div>

      {/* ===== HERO TREE ===== */}
      <div className="home__hero">
        <div className="home__tree-wrap">
          <div className="home__tree-glow" aria-hidden />
          <TreeFull size={220} />
        </div>
      </div>

      {/* ===== STATUS CARD ===== */}
      <div className="home__status-card">
        <p className="home__status-msg">{msg}</p>
        <div className="home__progress" aria-hidden>
          {[0,1,2,3,4].map(i => (
            <div
              key={i}
              className={'home__dot' + (i < 3 ? ' home__dot--filled' : '')}
            />
          ))}
        </div>
      </div>

      {/* ===== LIMIT + INTENTION ROW ===== */}
      <div className="home__meta">
        <div className="home__chip home__chip--limit">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M6 3.5v2.5l1.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          23 min left today
        </div>
        <div className="home__chip home__chip--intention">
          Today\u2019s focus: Stay present
        </div>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div className="home__stats">
        <div className="home__stat">
          <div className="home__stat-val">4</div>
          <div className="home__stat-label">Days reflected this week</div>
        </div>
        <div className="home__stat-div" aria-hidden />
        <div className="home__stat">
          <div className="home__stat-val">7</div>
          <div className="home__stat-label">Day streak</div>
        </div>
        <div className="home__stat-div" aria-hidden />
        <div className="home__stat">
          <div className="home__stat-val">2</div>
          <div className="home__stat-label">Growth stage</div>
        </div>
      </div>

      {/* ===== PRIMARY ACTION ===== */}
      <div className="home__primary">
        <button type="button" className="pill home__reflect-btn">
          Reflect
        </button>
      </div>

      {/* ===== SECONDARY ACTIONS ===== */}
      <div className="home__secondary">
        <button type="button" className="home__secondary-btn">Suggestions</button>
        <button type="button" className="home__secondary-btn">Insights</button>
      </div>

      {/* ===== AI NUDGE CARD ===== */}
      <div className="home__nudge">
        <button
          type="button"
          className="home__nudge-toggle"
          onClick={() => setNudgeOpen(o => !o)}
          aria-expanded={nudgeOpen}
        >
          <span className="home__nudge-label">A quiet thought</span>
          <span className="home__nudge-chevron" aria-hidden>{nudgeOpen ? '\u25B2' : '\u25BC'}</span>
        </button>
        {nudgeOpen && (
          <div className="home__nudge-body">
            Would you like a short idea based on what you\u2019ve been reflecting on?
            <button type="button" className="home__nudge-cta">Sure, show me</button>
          </div>
        )}
      </div>
    </div>
  )
}
