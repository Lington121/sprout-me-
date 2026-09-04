import React, { useEffect, useState } from 'react'
import PhoneFrame from './components/PhoneFrame.jsx'
import Splash from './screens/Splash.jsx'
import Onboarding from './screens/Onboarding.jsx'
import StyleSelection from './screens/StyleSelection.jsx'
import CreateTree from './screens/CreateTree.jsx'
import DailyLimit from './screens/DailyLimit.jsx'
import ModeSelection from './screens/ModeSelection.jsx'
import Done from './screens/Done.jsx'
import HomeScreen from './screens/HomeScreen.jsx'

const STEPS = {
  SPLASH:  'splash',
  ONB1:    'onb1',
  ONB2:    'onb2',
  ONB3:    'onb3',
  STYLE:   'style',
  TREE:    'tree',
  LIMIT:   'limit',
  MODE:    'mode',
  DONE:    'done',
  HOME:    'home'
}

const ONB_ORDER = [STEPS.ONB1, STEPS.ONB2, STEPS.ONB3]

const TABS = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10 L3 19 L10 19 L10 14 L13 14 L13 19 L20 19 L20 10 L11 3 Z"/>
      </svg>
    )
  },
  {
    id: 'reflect',
    label: 'Reflect',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M11 7 L11 11 L14 13"/>
      </svg>
    )
  },
  {
    id: 'insights',
    label: 'Insights',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 8 12 13 15 19 7"/>
        <line x1="3" y1="20" x2="19" y2="20"/>
      </svg>
    )
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="11" cy="7" r="3.5"/>
        <path d="M3 19c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
      </svg>
    )
  }
]

function TabBar({ activeTab, onTab }) {
  return (
    <div className="tabbar" role="navigation" aria-label="Main navigation">
      {TABS.map(t => (
        <button
          key={t.id}
          type="button"
          className={'tabbar__item' + (activeTab === t.id ? ' tabbar__item--active' : '')}
          onClick={() => onTab(t.id)}
          aria-label={t.label}
          aria-current={activeTab === t.id ? 'page' : undefined}
        >
          {t.icon}
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const [step, setStep] = useState(STEPS.SPLASH)
  const [tab,   setTab] = useState('home')
  const [style,      setStyle]      = useState(null)
  const [treeName,   setTreeName]   = useState('')
  const [limit,      setLimit]      = useState(null)
  const [customValue,setCustomValue]= useState(30)
  const [mode,       setMode]       = useState(null)

  useEffect(() => {
    if (step === STEPS.SPLASH) {
      const t = setTimeout(() => setStep(STEPS.ONB1), 1800)
      return () => clearTimeout(t)
    }
  }, [step])

  const nextOnb = () => {
    const idx = ONB_ORDER.indexOf(step)
    if (idx === -1) return
    setStep(ONB_ORDER[idx + 1] ?? STEPS.STYLE)
  }

  const reset = () => {
    setStep(STEPS.SPLASH)
    setStyle(null)
    setTreeName('')
    setLimit(null)
    setCustomValue(30)
    setMode(null)
    setTab('home')
  }

  const goHome = () => {
    setStep(STEPS.HOME)
    setTab('home')
  }

  const handleTab = (id) => {
    setTab(id)
    if (id !== 'home') setStep(STEPS.HOME)
  }

  const splashActive = step === STEPS.SPLASH
  const showTabBar = step === STEPS.HOME
  const activeTab = tab

  return (
    <div className="stage">
      <PhoneFrame statusLight={splashActive} tabBar={showTabBar ? <TabBar activeTab={activeTab} onTab={handleTab} /> : null}>
        {step === STEPS.SPLASH    && <Splash />}
        {step === STEPS.ONB1     && <Onboarding key="onb1" index={0} onNext={nextOnb} />}
        {step === STEPS.ONB2     && <Onboarding key="onb2" index={1} onNext={nextOnb} />}
        {step === STEPS.ONB3     && <Onboarding key="onb3" index={2} onNext={nextOnb} />}
        {step === STEPS.STYLE    && (
          <StyleSelection
            value={style} onChange={setStyle}
            onNext={() => setStep(STEPS.TREE)}
          />
        )}
        {step === STEPS.TREE     && (
          <CreateTree
            name={treeName} onNameChange={setTreeName}
            onNext={() => setStep(STEPS.LIMIT)}
          />
        )}
        {step === STEPS.LIMIT    && (
          <DailyLimit
            value={limit} onChange={setLimit}
            customValue={customValue} setCustomValue={setCustomValue}
            onNext={() => setStep(STEPS.MODE)}
          />
        )}
        {step === STEPS.MODE     && (
          <ModeSelection
            value={mode} onChange={setMode}
            onNext={() => setStep(STEPS.DONE)}
          />
        )}
        {step === STEPS.DONE     && (
          <Done
            state={{ style, treeName, limit, customValue, mode }}
            onReset={reset}
            onGoHome={goHome}
          />
        )}
        {step === STEPS.HOME     && <HomeScreen />}
      </PhoneFrame>
    </div>
  )
}
