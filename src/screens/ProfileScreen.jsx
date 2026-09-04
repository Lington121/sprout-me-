import React from 'react'
import TreeFull from '../illustrations/TreeFull.jsx'

const MENU = [
  { id: 'tree',     label: 'My Tree',          icon: 'tree' },
  { id: 'journal',  label: 'Growth Journal',   icon: 'journal' },
  { id: 'limit',    label: 'Daily Limit',      icon: 'limit' },
  { id: 'style',    label: 'Style',            icon: 'style' },
  { id: 'quiet',    label: 'Quiet Hours',      icon: 'quiet' },
  { id: 'notif',    label: 'Notifications',    icon: 'bell' },
  { id: 'privacy',  label: 'Privacy & Data',   icon: 'shield' },
  { id: 'help',     label: 'Help',             icon: 'help' },
  { id: 'logout',   label: 'Log Out',          icon: 'logout', danger: true }
]

function MenuIcon({ name }) {
  const s = { width: 20, height: 20, viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'tree':
      return <svg {...s}><circle cx="10" cy="7" r="4.5" /><rect x="9" y="11" width="2" height="6" rx="0.5" /></svg>
    case 'journal':
      return <svg {...s}><path d="M5 4h8a2 2 0 0 1 2 2v10H7a2 2 0 0 1-2-2V4Z" /><path d="M5 14a2 2 0 0 1 2-2h8" /></svg>
    case 'limit':
      return <svg {...s}><circle cx="10" cy="10" r="7.5" /><path d="M10 5.5v4.5l3 2" /></svg>
    case 'style':
      return <svg {...s}><path d="M10 3 L12 8 L17 8.5 L13 12 L14.5 17 L10 14 L5.5 17 L7 12 L3 8.5 L8 8 Z" /></svg>
    case 'quiet':
      return <svg {...s}><path d="M14 9a4 4 0 1 1-4-4" /><path d="M14 5a8 8 0 0 1-4 14" /></svg>
    case 'bell':
      return <svg {...s}><path d="M5 13c0-3 1-4 1-6a4 4 0 1 1 8 0c0 2 1 3 1 6Z" /><path d="M8 16a2 2 0 0 0 4 0" /></svg>
    case 'shield':
      return <svg {...s}><path d="M10 3 L16 5 V10 C16 14 13 16.5 10 17 C7 16.5 4 14 4 10 V5 Z" /></svg>
    case 'help':
      return <svg {...s}><circle cx="10" cy="10" r="7.5" /><path d="M8 8a2 2 0 1 1 3 1.7c-0.7 0.4-1 0.9-1 1.6" /><circle cx="10" cy="14" r="0.6" fill="currentColor" stroke="none" /></svg>
    case 'logout':
      return <svg {...s}><path d="M8 4H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" /><path d="M13 7 L17 10 L13 13" /><path d="M17 10H8" /></svg>
    default:
      return null
  }
}

export default function ProfileScreen({
  treeName,
  growthStage = 2,
  onNavigate,
  onTab
}) {
  return (
    <div className="screen screen--profile">
      {/* TOP */}
      <div className="profile__top">
        <span className="profile__eyebrow">Profile</span>
        <button type="button" className="reflect__close" onClick={onTab} aria-label="Back to home">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M11 4 L6 9 L11 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body profile__body">
        {/* AVATAR BLOCK */}
        <div className="profile__hero">
          <div className="profile__avatar">
            <TreeFull size={120} />
          </div>
          <h1 className="profile__name">{treeName || 'Your tree'}</h1>
          <div className="profile__stage">Growth stage {growthStage}</div>
          <div className="profile__status">Growing steadily</div>
        </div>

        {/* MENU */}
        <div className="profile__menu">
          {MENU.map((row) => (
            <button
              key={row.id}
              type="button"
              className={'profile__row' + (row.danger ? ' profile__row--danger' : '')}
              onClick={() => onNavigate(row.id)}
            >
              <span className="profile__row-icon" aria-hidden>
                <MenuIcon name={row.icon} />
              </span>
              <span className="profile__row-label">{row.label}</span>
              <span className="profile__row-chev" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3 L9 7 L5 11"/>
                </svg>
              </span>
            </button>
          ))}
        </div>

        <p className="profile__version">Sprout Me · v0.1.0</p>
      </div>
    </div>
  )
}
