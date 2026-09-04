import React, { useEffect, useState } from 'react'
import PhoneFrame from './components/PhoneFrame.jsx'
import Splash from './screens/Splash.jsx'
import Onboarding from './screens/Onboarding.jsx'
import StyleSelection from './screens/StyleSelection.jsx'
import CreateTree from './screens/CreateTree.jsx'
import DailyLimit from './screens/DailyLimit.jsx'
import ModeSelection from './screens/ModeSelection.jsx'
import Done from './screens/Done.jsx'

const STEPS = {
  SPLASH: 'splash',
  ONB1: 'onb1',
  ONB2: 'onb2',
  ONB3: 'onb3',
  STYLE: 'style',
  TREE: 'tree',
  LIMIT: 'limit',
  MODE: 'mode',
  DONE: 'done'
}

const ONB_ORDER = [STEPS.ONB1, STEPS.ONB2, STEPS.ONB3]

export default function App() {
  const [step, setStep] = useState(STEPS.SPLASH)
  const [style, setStyle] = useState(null)
  const [treeName, setTreeName] = useState('')
  const [limit, setLimit] = useState(null)
  const [customValue, setCustomValue] = useState(30)
  const [mode, setMode] = useState(null)

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
  }

  const splashActive = step === STEPS.SPLASH

  return (
    <div className="stage">
      <PhoneFrame statusLight={splashActive}>
        {step === STEPS.SPLASH    && <Splash />}
        {step === STEPS.ONB1     && <Onboarding key="onb1" index={0} onNext={nextOnb} />}
        {step === STEPS.ONB2     && <Onboarding key="onb2" index={1} onNext={nextOnb} />}
        {step === STEPS.ONB3     && <Onboarding key="onb3" index={2} onNext={nextOnb} />}
        {step === STEPS.STYLE    && (
          <StyleSelection
            value={style}
            onChange={setStyle}
            onNext={() => setStep(STEPS.TREE)}
          />
        )}
        {step === STEPS.TREE     && (
          <CreateTree
            name={treeName}
            onNameChange={setTreeName}
            onNext={() => setStep(STEPS.LIMIT)}
          />
        )}
        {step === STEPS.LIMIT    && (
          <DailyLimit
            value={limit}
            onChange={setLimit}
            customValue={customValue}
            setCustomValue={setCustomValue}
            onNext={() => setStep(STEPS.MODE)}
          />
        )}
        {step === STEPS.MODE     && (
          <ModeSelection
            value={mode}
            onChange={setMode}
            onNext={() => setStep(STEPS.DONE)}
          />
        )}
        {step === STEPS.DONE     && (
          <Done state={{ style, treeName, limit, customValue, mode }} onReset={reset} />
        )}
      </PhoneFrame>
    </div>
  )
}
