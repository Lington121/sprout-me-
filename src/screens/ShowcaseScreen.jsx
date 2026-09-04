import React, { useState } from 'react'
import CardSlider from '../components/CardSlider.jsx'
import Sidebar from '../components/Sidebar.jsx'
import LiquidNav from '../components/LiquidNav.jsx'
import TreeFull from '../illustrations/TreeFull.jsx'

const SECTIONS = [
  { id: 'home',     label: 'Home',     icon: <SidebarIcon kind="home" /> },
  { id: 'reflect',  label: 'Reflect',  icon: <SidebarIcon kind="reflect" /> },
  { id: 'insights', label: 'Insights', icon: <SidebarIcon kind="insights" /> },
  { id: 'profile',  label: 'Profile',  icon: <SidebarIcon kind="profile" /> }
]

const TABS = [
  {
    id: 'home',
    label: 'Home',
    icon: <LiquidIcon kind="home" />
  },
  {
    id: 'reflect',
    label: 'Reflect',
    icon: <LiquidIcon kind="reflect" />,
    center: true
  },
  {
    id: 'insights',
    label: 'Insights',
    icon: <LiquidIcon kind="insights" />
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <LiquidIcon kind="profile" />
  }
]

const SLIDES = [
  {
    id: 's1',
    eyebrow: 'Stage 1',
    title: 'Sprout',
    body: 'A small green beginning. Awareness takes root.',
    cta: 'See how it grew'
  },
  {
    id: 's2',
    eyebrow: 'Stage 2',
    title: 'Sapling',
    body: 'Leaves appear one by one. Each reflection adds one more.',
    cta: 'Open growth journal'
  },
  {
    id: 's3',
    eyebrow: 'Stage 3',
    title: 'Canopy',
    body: 'A fuller, rounder shape. Calm has a structure now.',
    cta: 'Reflect again'
  },
  {
    id: 's4',
    eyebrow: 'Stage 4',
    title: 'Mature tree',
    body: 'Quiet, full, alive. The tree you grew with attention.',
    cta: 'View weekly summary'
  }
]

function SidebarIcon({ kind }) {
  const s = { width: 18, height: 18, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (kind) {
    case 'home':
      return <svg width="18" height="18" viewBox="0 0 18 18" {...s}><path d="M2 8 L9 2 L16 8 L16 16 L2 16 Z"/><path d="M7 16 V11 H11 V16"/></svg>
    case 'reflect':
      return <svg width="18" height="18" viewBox="0 0 18 18" {...s}><circle cx="9" cy="9" r="7"/><path d="M9 5 V9 L12 11"/></svg>
    case 'insights':
      return <svg width="18" height="18" viewBox="0 0 18 18" {...s}><polyline points="2 14 6 10 10 12 16 5"/><line x1="2" y1="16" x2="16" y2="16"/></svg>
    case 'profile':
      return <svg width="18" height="18" viewBox="0 0 18 18" {...s}><circle cx="9" cy="6" r="3"/><path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6"/></svg>
    default:
      return null
  }
}

function LiquidIcon({ kind }) {
  const s = { width: 22, height: 22, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (kind) {
    case 'home':
      return <svg {...s} viewBox="0 0 22 22"><path d="M3 10 L3 19 L10 19 L10 14 L13 14 L13 19 L20 19 L20 10 L11 3 Z"/></svg>
    case 'reflect':
      return <svg {...s} viewBox="0 0 22 22"><circle cx="11" cy="11" r="8"/><path d="M11 7 L11 11 L14 13"/></svg>
    case 'insights':
      return <svg {...s} viewBox="0 0 22 22"><polyline points="3 17 8 12 13 15 19 7"/><line x1="3" y1="20" x2="19" y2="20"/></svg>
    case 'profile':
      return <svg {...s} viewBox="0 0 22 22"><circle cx="11" cy="7" r="3.5"/><path d="M3 19c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
    default:
      return null
  }
}

export default function ShowcaseScreen({ onHome }) {
  const [activeSection, setActiveSection] = useState('home')
  const [activeTab, setActiveTab] = useState('reflect')

  return (
    <div className="screen screen--showcase">
      <div className="profile__top">
        <span className="profile__eyebrow">Showcase</span>
        <button type="button" className="reflect__close" onClick={onHome} aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M11 4 L6 9 L11 14"/>
          </svg>
        </button>
      </div>

      <div className="screen__body showcase__body">
        <div className="showcase__layout">
          {/* SIDEBAR */}
          <Sidebar
            items={SECTIONS}
            activeId={activeSection}
            onSelect={setActiveSection}
          />

          {/* MAIN CONTENT */}
          <div className="showcase__main">
            <div className="showcase__header">
              <h1 className="showcase__title">Component showcase</h1>
              <p className="showcase__lede">Card slider · Sidebar · Liquid navigation</p>
            </div>

            <section className="showcase__section">
              <h2 className="showcase__h2">Hero card slider</h2>
              <CardSlider items={SLIDES} />
            </section>

            <section className="showcase__section">
              <h2 className="showcase__h2">Tree preview</h2>
              <div className="showcase__tree-card">
                <TreeFull size={140} />
                <div>
                  <div className="showcase__tree-eyebrow">Your tree</div>
                  <div className="showcase__tree-name">Stage 3 · Canopy</div>
                  <p className="showcase__tree-body">
                    Dark surfaces let the green breathe. The card becomes a quiet stage.
                  </p>
                </div>
              </div>
            </section>

            <section className="showcase__section showcase__section--last">
              <h2 className="showcase__h2">Liquid navigation</h2>
              <p className="showcase__hint">Hover or focus a tab to slide the pill. The Reflect button is centered and elevated.</p>
              <LiquidNav
                items={TABS}
                activeId={activeTab}
                onSelect={setActiveTab}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
