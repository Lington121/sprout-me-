import React from 'react'
import TreeFull from '../illustrations/TreeFull.jsx'
import TreeSprout from '../illustrations/TreeSprout.jsx'

const SAVED_NOTES = [
  'Try one long-form read tomorrow instead of short clips.',
  'Notice when you reach for the phone out of habit vs intention.',
  'A 10-minute walk replaces a 30-minute scroll beautifully.'
]

export default function InsightsScreen({ onHome }) {
  const days = ['M','T','W','T','F','S','S']
  const reflected = [true, true, false, true, true, true, false]

  return (
    <div className="screen screen--insights">
      <div className="insights__top">
        <span className="insights__eyebrow">This week with your tree</span>
        <button type="button" className="reflect__close" onClick={onHome} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M11 4 L6 9 L11 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body insights__body">
        {/* HERO COMPARISON */}
        <div className="insights__hero">
          <div className="insights__hero-side">
            <div className="insights__hero-label">Start of week</div>
            <TreeSprout size={120} />
          </div>
          <div className="insights__hero-arrow" aria-hidden>
            <svg width="40" height="14" viewBox="0 0 40 14" fill="none" stroke="#17C662" strokeWidth="1.6" strokeLinecap="round">
              <path d="M0 7 H36 M30 2 L36 7 L30 12"/>
            </svg>
          </div>
          <div className="insights__hero-side">
            <div className="insights__hero-label">Now</div>
            <TreeFull size={140} />
          </div>
        </div>

        {/* STATS */}
        <div className="insights__stats">
          <div className="insights__stat">
            <div className="insights__stat-val">5</div>
            <div className="insights__stat-label">Days reflected</div>
          </div>
          <div className="insights__stat-div" aria-hidden />
          <div className="insights__stat">
            <div className="insights__stat-val">7</div>
            <div className="insights__stat-label">Day streak</div>
          </div>
          <div className="insights__stat-div" aria-hidden />
          <div className="insights__stat">
            <div className="insights__stat-val">2</div>
            <div className="insights__stat-label">Growth stage</div>
          </div>
        </div>

        {/* PATTERN INSIGHT */}
        <div className="insights__card">
          <div className="insights__card-eyebrow">Content pattern</div>
          <p className="insights__card-text">
            You leaned more toward educational content this week — about 60% of your reflected time.
          </p>
        </div>

        {/* STREAK CALENDAR */}
        <div className="insights__card">
          <div className="insights__card-eyebrow">Streak &amp; consistency</div>
          <div className="insights__week">
            {days.map((d, i) => (
              <div key={i} className="insights__day">
                <div className={'insights__dot' + (reflected[i] ? ' insights__dot--filled' : '')} />
                <div className="insights__day-label">{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SAVED NOTES */}
        <div className="insights__card">
          <div className="insights__card-eyebrow">Your saved ideas</div>
          <ul className="insights__notes">
            {SAVED_NOTES.map((n, i) => (
              <li key={i} className="insights__note">
                <span className="insights__note-bullet" aria-hidden>•</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* STORY */}
        <div className="insights__story">
          <p>
            A week of small, honest check-ins. The tree is wider, the canopy fuller — a quiet
            reflection of the time you took to notice.
          </p>
          <p>Keep going at your own pace.</p>
        </div>
      </div>

      <div className="bottom">
        <button type="button" className="pill" onClick={onHome}>Back to Home</button>
      </div>
    </div>
  )
}
