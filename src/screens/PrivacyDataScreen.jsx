import React from 'react'
import PillButton from '../components/PillButton.jsx'

export default function PrivacyDataScreen({ onBack, onExport, onDelete }) {
  return (
    <div className="screen screen--settings">
      <div className="profile__top">
        <span className="profile__eyebrow">Privacy &amp; Data</span>
        <button type="button" className="reflect__close" onClick={onBack} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M11 4 L6 9 L11 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body settings__body">
        <h1 className="settings__title">Your reflections, your space.</h1>
        <p className="settings__lede">
          A few transparent notes on how Sprout Me handles your data.
        </p>

        <div className="privacy__list">
          <div className="privacy__item">
            <div className="privacy__dot" aria-hidden />
            <div>
              <div className="privacy__item-title">Stays on your device</div>
              <p className="privacy__item-body">
                Your reflections, notes, and tree growth live on this device. They are not sent to a server.
              </p>
            </div>
          </div>
          <div className="privacy__item">
            <div className="privacy__dot" aria-hidden />
            <div>
              <div className="privacy__item-title">No accounts required</div>
              <p className="privacy__item-body">
                You do not need to sign up to use Sprout Me. Nothing about you is collected.
              </p>
            </div>
          </div>
          <div className="privacy__item">
            <div className="privacy__dot" aria-hidden />
            <div>
              <div className="privacy__item-title">No ads, no trackers</div>
              <p className="privacy__item-body">
                We do not run advertising, retargeting, or third-party analytics in your reflection space.
              </p>
            </div>
          </div>
        </div>

        <div className="settings__card" style={{ marginTop: 24 }}>
          <div className="privacy__action">
            <div>
              <div className="settings__row-title">Export your data</div>
              <p className="privacy__action-body">Download a small file with your saved ideas and reflections.</p>
            </div>
            <button type="button" className="ghost-btn" onClick={onExport}>Export</button>
          </div>
          <div className="settings__divider" />
          <div className="privacy__action">
            <div>
              <div className="settings__row-title privacy__danger-title">Delete all data</div>
              <p className="privacy__action-body">Removes every reflection, note, and your tree. This cannot be undone.</p>
            </div>
            <button type="button" className="ghost-btn ghost-btn--danger" onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
