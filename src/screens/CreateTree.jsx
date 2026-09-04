import React from 'react'
import PillButton from '../components/PillButton.jsx'
import TreeSprout from '../illustrations/TreeSprout.jsx'

export default function CreateTree({ name, onNameChange, onNext }) {
  return (
    <div className="screen">
      <div className="screen__body">
        <h1 className="title" style={{ marginTop: 8 }}>This is your tree.</h1>
        <div className="treewrap">
          <TreeSprout size={200} />
          <input
            className="input"
            type="text"
            placeholder="Give it a name (optional)"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            maxLength={32}
            aria-label="Tree name"
          />
        </div>
      </div>
      <div className="bottom">
        <PillButton onClick={onNext}>Create Tree</PillButton>
      </div>
    </div>
  )
}
