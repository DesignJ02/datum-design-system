export default function RadiiPage() {
  const radii = [
    { token: '--radius-none', value: '0px',   label: 'none',  usage: 'Sharp edges' },
    { token: '--radius-xs',   value: '4px',   label: 'xs',    usage: 'Compact chips' },
    { token: '--radius-sm',   value: '6px',   label: 'sm',    usage: 'Small buttons, tags' },
    { token: '--radius-md',   value: '8px',   label: 'md',    usage: 'Default buttons, inputs' },
    { token: '--radius-lg',   value: '12px',  label: 'lg',    usage: 'Cards, panels' },
    { token: '--radius-xl',   value: '16px',  label: 'xl',    usage: 'Large cards, modals' },
    { token: '--radius-2xl',  value: '24px',  label: '2xl',   usage: 'Feature sections' },
    { token: '--radius-full', value: '9999px',label: 'full',  usage: 'Pills, avatars, toggles' },
  ]

  const shadows = [
    { token: '--shadow-sm',  value: '0 1px 3px rgba(0,0,0,0.4)',                       label: 'sm',  usage: 'Subtle lift' },
    { token: '--shadow-md',  value: '0 4px 12px rgba(0,0,0,0.4)',                      label: 'md',  usage: 'Cards, dropdowns' },
    { token: '--shadow-lg',  value: '0 8px 24px rgba(0,0,0,0.4)',                      label: 'lg',  usage: 'Modals, tooltips' },
    { token: '--shadow-xl',  value: '0 16px 48px rgba(0,0,0,0.5)',                     label: 'xl',  usage: 'Overlays' },
    { token: '--shadow-brand','value': '0 4px 20px rgba(231,39,87,0.35)',              label: 'brand', usage: 'Brand-colored glow' },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 960 }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px', marginBottom: 8 }}>Radii & Shadows</h1>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: 48, maxWidth: 520 }}>
        8 corner radius tokens and 5 shadow levels.
      </p>

      {/* Radii */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Corner Radius</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 56 }}>
        {radii.map(r => (
          <div key={r.token} style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '24px 20px' }}>
            <div style={{ width: 64, height: 64, background: 'rgba(231,39,87,0.15)', border: '1.5px solid rgba(231,39,87,0.4)', borderRadius: r.value, marginBottom: 16 }} />
            <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{r.label}</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-family-mono)', marginBottom: 4 }}>{r.value}</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{r.usage}</p>
          </div>
        ))}
      </div>

      {/* Shadows */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Shadows</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {shadows.map(s => (
          <div key={s.token} style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
            <div style={{ width: 80, height: 56, background: '#1A2240', borderRadius: 10, boxShadow: s.value }} />
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{s.label}</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>{s.usage}</p>
              <code style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-family-mono)', lineHeight: 1.5, wordBreak: 'break-all' }}>{s.value}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
