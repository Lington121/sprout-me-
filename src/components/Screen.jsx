import React from 'react'

export default function Screen({ children, className = '', ...rest }) {
  return (
    <div className={'screen ' + className} {...rest}>
      {children}
    </div>
  )
}
