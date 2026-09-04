import React from 'react'
import PillButton from '../components/PillButton.jsx'
import Dots from '../components/Dots.jsx'
import TreeFull from '../illustrations/TreeFull.jsx'
import PersonWithPlant from '../illustrations/PersonWithPlant.jsx'

const slides = [
  {
    illustration: 'tree',
    headline: 'Turn scrolling into growth.',
    body: 'Sprout Me helps you notice your habits, one gentle pause at a time.',
    button: 'Next'
  },
  {
    illustration: 'person',
    headline: 'Reflect in seconds, watch your tree grow.',
    body: 'A short check-in is all it takes. Each moment of awareness feeds your tree.',
    button: 'Next'
  },
  {
    illustration: 'tree',
    headline: 'Your awareness, visualized.',
    body: 'No streaks to break, no scores to chase. Just quiet proof that you\u2019re growing.',
    button: 'Get Started'
  }
]

export default function Onboarding({ index, onNext }) {
  const slide = slides[index]
  return (
    <div className="screen">
      <div className="screen__body">
        <div className="illus">
          {slide.illustration === 'tree'
            ? <TreeFull size={280} />
            : <PersonWithPlant size={300} />}
        </div>
        <div className="copy">
          <h1 className="headline">{slide.headline}</h1>
          <p className="supporting">{slide.body}</p>
        </div>
      </div>
      <div className="bottom">
        <PillButton onClick={onNext}>{slide.button}</PillButton>
        <Dots count={slides.length} active={index} />
      </div>
    </div>
  )
}

export { slides }
