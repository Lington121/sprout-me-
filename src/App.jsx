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
import ReflectScreen from './screens/ReflectScreen.jsx'
import ReflectSuccess from './screens/ReflectSuccess.jsx'
import InsightsScreen from './screens/InsightsScreen.jsx'
import SuggestionsScreen from './screens/SuggestionsScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import GrowthJournalScreen from './screens/GrowthJournalScreen.jsx'
import DailyLimitSettingsScreen from './screens/DailyLimitSettingsScreen.jsx'
import StyleSettingsScreen from './screens/StyleSettingsScreen.jsx'
import QuietHoursScreen from './screens/QuietHoursScreen.jsx'
import NotificationsScreen from './screens/NotificationsScreen.jsx'
import PrivacyDataScreen from './screens/PrivacyDataScreen.jsx'

const STEPS = {
  SPLASH:              'splash',
  ONB1:                'onb1',
  ONB2:                'onb2',
  ONB3:                'onb3',
  STYLE:               'style',
  TREE:                'tree',
  LIMIT:               'limit',
  MODE:                'mode',
  DONE:                'done',
  HOME:                'home',
  REFLECT:             'reflect',
  REFLECT_SUCCESS:     'reflect-success',
  INSIGHTS:            'insights',
  SUGGESTIONS:         'suggestions',
  PROFILE:             'profile',
  JOURNAL:             'journal',
  LIMIT_SETTINGS:      'limit-settings',
  STYLE_SETTINGS:      'style-settings',
  QUIET_HOURS:         'quiet-hours',
  NOTIFICATIONS:       'notifications',
  PRIVACY:             'privacy'
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

const TAB_STEP = {
  home:     STEPS.HOME,
  reflect:  STEPS.REFLECT,
  insights: STEPS.INSIGHTS,
  profile:  STEPS.PROFILE
}

const PROFILE_NAV = {
  tree:    STEPS.PROFILE,            // My Tree → stay on profile
  journal: STEPS.JOURNAL,
  limit:   STEPS.LIMIT_SETTINGS,
  style:   STEPS.STYLE_SETTINGS,
  quiet:   STEPS.QUIET_HOURS,
  notif:   STEPS.NOTIFICATIONS,
  privacy: STEPS.PRIVACY,
  help:    STEPS.PROFILE,            // no Help screen yet
  logout:  STEPS.SPLASH
}

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
  const [tab,   setTab]   = useState('home')
  const [style,      setStyle]      = useState('gentle')
  const [treeName,   setTreeName]   = useState('')
  const [limit,      setLimit]      = useState(45)
  const [customValue,setCustomValue]= useState(30)
  const [mode,       setMode]       = useState('simple')
  const [quietHours, setQuietHours] = useState({ enabled: true, start: '22:00', end: '07:00' })
  const [notifs,     setNotifs]     = useState({ reflect: true, growth: true, weekly: false, suggestions: true })

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
    setStyle('gentle')
    setTreeName('')
    setLimit(45)
    setCustomValue(30)
    setMode('simple')
    setTab('home')
  }

  const goHome         = () => { setStep(STEPS.HOME);      setTab('home') }
  const goReflect      = () => { setStep(STEPS.REFLECT);   setTab('reflect') }
  const goInsights     = () => { setStep(STEPS.INSIGHTS);  setTab('insights') }
  const goSuggestions  = () => { setStep(STEPS.SUGGESTIONS); setTab('insights') }
  const goProfile      = () => { setStep(STEPS.PROFILE);   setTab('profile') }
  const goBackToProfile = () => setStep(STEPS.PROFILE)

  const handleTab = (id) => {
    if (!TAB_STEP[id]) return
    setTab(id)
    setStep(TAB_STEP[id])
  }

  const handleProfileNav = (rowId) => {
    const next = PROFILE_NAV[rowId]
    if (!next) return
    if (rowId === 'logout') {
      reset()
      return
    }
    setStep(next)
  }

  const splashActive = step === STEPS.SPLASH
  const showTabBar = [
    STEPS.HOME, STEPS.REFLECT, STEPS.INSIGHTS, STEPS.SUGGESTIONS, STEPS.PROFILE
  ].includes(step)

  return (
    <div className="stage">
      <PhoneFrame
        statusLight={splashActive}
        tabBar={showTabBar ? <TabBar activeTab={tab} onTab={handleTab} /> : null}
      >
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
        {step === STEPS.HOME     && (
          <HomeScreen
            onReflect={goReflect}
            onInsights={goInsights}
            onSuggestions={goSuggestions}
            onProfile={goProfile}
          />
        )}
        {step === STEPS.REFLECT  && (
          <ReflectScreen
            onDone={() => setStep(STEPS.REFLECT_SUCCESS)}
            onSkip={goHome}
            onClose={goHome}
          />
        )}
        {step === STEPS.REFLECT_SUCCESS && (
          <ReflectSuccess
            onHome={goHome}
            onSuggestions={goSuggestions}
          />
        )}
        {step === STEPS.INSIGHTS && <InsightsScreen onHome={goHome} />}
        {step === STEPS.SUGGESTIONS && <SuggestionsScreen onHome={goHome} />}

        {step === STEPS.PROFILE && (
          <ProfileScreen
            treeName={treeName || undefined}
            growthStage={2}
            onNavigate={handleProfileNav}
            onTab={goHome}
          />
        )}
        {step === STEPS.JOURNAL && (
          <GrowthJournalScreen onBack={goBackToProfile} />
        )}
        {step === STEPS.LIMIT_SETTINGS && (
          <DailyLimitSettingsScreen
            initialValue={limit}
            initialCustom={customValue}
            onSave={({ limit: v, customValue: cv }) => { setLimit(v); setCustomValue(cv); goBackToProfile() }}
            onBack={goBackToProfile}
          />
        )}
        {step === STEPS.STYLE_SETTINGS && (
          <StyleSettingsScreen
            initial={style}
            onSave={(v) => { setStyle(v); goBackToProfile() }}
            onBack={goBackToProfile}
          />
        )}
        {step === STEPS.QUIET_HOURS && (
          <QuietHoursScreen
            initial={quietHours}
            onSave={(v) => { setQuietHours(v); goBackToProfile() }}
            onBack={goBackToProfile}
          />
        )}
        {step === STEPS.NOTIFICATIONS && (
          <NotificationsScreen
            initial={notifs}
            onSave={(v) => { setNotifs(v); goBackToProfile() }}
            onBack={goBackToProfile}
          />
        )}
        {step === STEPS.PRIVACY && (
          <PrivacyDataScreen
            onBack={goBackToProfile}
            onExport={() => { /* placeholder */ }}
            onDelete={() => { /* placeholder */ }}
          />
        )}
      </PhoneFrame>
    </div>
  )
}
