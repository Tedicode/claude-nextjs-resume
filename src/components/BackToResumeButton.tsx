type Props = {
  onClick: () => void
  style?: React.CSSProperties
}

export default function BackToResumeButton({ onClick, style }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#777',
        background: 'none',
        border: '0.5px solid #bbb',
        padding: '6px 14px',
        cursor: 'pointer',
        borderRadius: '2px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'color 0.15s, border-color 0.15s',
        ...style,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.color = '#111'
        ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#888'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.color = '#777'
        ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#bbb'
      }}
    >
      ← Back to resume
    </button>
  )
}
