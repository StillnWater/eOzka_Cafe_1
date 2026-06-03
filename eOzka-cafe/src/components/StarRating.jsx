import React from 'react'

const StarRating = ({ value, onChange, readonly = false }) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = star <= value
        return (
          <span
            key={star}
            className={readonly ? '' : `star-interactive ${isActive ? 'active' : ''}`}
            style={{
              color: isActive ? 'var(--accent)' : 'var(--text-muted)',
              fontSize: readonly ? '1.2rem' : '2rem',
              cursor: readonly ? 'default' : 'pointer',
              userSelect: 'none'
            }}
            onClick={() => !readonly && onChange && onChange(star)}
          >
            ★
          </span>
        )
      })}
    </div>
  )
}

export default StarRating