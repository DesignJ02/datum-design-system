export default function SpacingPage() {
  const spacing = [
    { token: '--space-1',  value: '4px',   label: 'space-1'  },
    { token: '--space-2',  value: '8px',   label: 'space-2'  },
    { token: '--space-3',  value: '12px',  label: 'space-3'  },
    { token: '--space-4',  value: '16px',  label: 'space-4'  },
    { token: '--space-5',  value: '20px',  label: 'space-5'  },
    { token: '--space-6',  value: '24px',  label: 'space-6'  },
    { token: '--space-8',  value: '32px',  label: 'space-8'  },
    { token: '--space-10', value: '40px',  label: 'space-10' },
    { token: '--space-12', value: '48px',  label: 'space-12' },
    { token: '--space-16', value: '64px',  label: 'space-16' },
    { token: '--space-20', value: '80px',  label: 'space-20' },
    { token: '--space-24', value: '96px',  label: 'space-24' },
  ]

  const padding = [
    { token: '--padding-xs',  value: '4px 8px',    label: 'xs'  },
    { token: '--padding-sm',  value: '6px 12px',   label: 'sm'  },
    { token: '--padding-md',  value: '10px 20px',  label: 'md'  },
    { token: '--padding-lg',  value: '14px 28px',  label: 'lg'  },
    { token: '--padding-xl',  value: '18px 36px',  label: 'xl'  },
  ]

  const stroke = [
    { token: '--stroke-1', value: '1px',  label: 'Default border' },
    { token: '--stroke-2', value: '2px',  label: 'Focus ring' },
    { token: '--stroke-4', value: '4px',  label: 'Heavy border' },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 960 }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px', marginBottom: 8 }}>Spacing</h1>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: 48, maxWidth: 520 }}>
        4px base unit. Spacing, padding and stroke tokens.
      </p>

      {/* Spacing Scale */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Spacing Scale</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 56 }}>
        {spacing.map(s => (
          <div key={s.token} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <code style={{ fontSize: 12, color: '#E72757', fontFamily: 'var(--font-family-mono)', width: 100, flexShrink: 0 }}>{s.label}</code>
            <div style={{ background: 'var(--color-brand-primary)', height: 16, width: s.value, borderRadius: 3, flexShrink: 0, minWidth: 4 }} />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-family-mono)' }}>{s.value}</span>
          </div>
        ))}
      </div>

      {/* Padding */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Padding</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 56 }}>
        {padding.map(p => (
          <div key={p.token} style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '20px 16px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', border: '1px dashed rgba(231,39,87,0.4)', borderRadius: 6, padding: p.value, marginBottom: 12 }}>
              <div style={{ width: 24, height: 24, background: 'rgba(231,39,87,0.2)', borderRadius: 4 }} />
            </div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{p.label}</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-family-mono)' }}>{p.value}</p>
          </div>
        ))}
      </div>

      {/* Stroke */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Stroke</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {stroke.map(s => (
          <div key={s.token} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <code style={{ fontSize: 12, color: '#E72757', fontFamily: 'var(--font-family-mono)', width: 100, flexShrink: 0 }}>{s.token}</code>
            <div style={{ width: 120, height: 40, borderRadius: 6, border: `${s.value} solid rgba(255,255,255,0.4)`, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-family-mono)' }}>{s.value}</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
