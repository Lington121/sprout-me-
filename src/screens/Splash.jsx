import React from 'react'
import SproutLogo from '../illustrations/SproutLogo.jsx'

export default function Splash() {
  return (
    <div className="screen screen--splash">
      <div className="splash__logo">
        <SproutLogo size={104} color="#ffffff" />
        <div className="splash__word">Sprout Me</div>
      </div>
    </div>
  )
}
