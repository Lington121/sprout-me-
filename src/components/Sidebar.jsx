import React from 'react'

export default function Sidebar({ items = [], activeId, onSelect }) {
  return (
    <nav className="sidebar" role="navigation" aria-label="Primary">
      <ul className="sidebar__list">
        {items.map((item) => {
          const active = item.id === activeId
          return (
            <li key={item.id} className="sidebar__item-wrap">
              <button
                type="button"
                className={'sidebar__item' + (active ? ' sidebar__item--active' : '')}
                onClick={() => onSelect && onSelect(item.id)}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
              >
                <span className="sidebar__icon" aria-hidden>{item.icon}</span>
                <span className="sidebar__label">{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
