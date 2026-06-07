export default function TypographyPage() {
  const scale = [
    { name: 'Display', token: '--font-size-display', size: '64px', weight: '700', lineHeight: '1.0', usage: 'Hero headings' },
    { name: 'H1',      token: '--font-size-h1',      size: '48px', weight: '700', lineHeight: '1.1', usage: 'Page titles' },
    { name: 'H2',      token: '--font-size-h2',      size: '36px', weight: '700', lineHeight: '1.2', usage: 'Section headings' },
    { name: 'H3',      token: '--font-size-h3',      size: '28px', weight: '600', lineHeight: '1.3', usage: 'Card headings' },
    { name: 'H4',      token: '--font-size-h4',      size: '22px', weight: '600', lineHeight: '1.4', usage: 'Sub-headings' },
    { name: 'Body L',  token: '--font-size-body-l',  size: '18px', weight: '400', lineHeight: '1.6', usage: 'Large body text' },
    { name: 'Body M',  token: '--font-size-body-m',  size: '16px', weight: '400', lineHeight: '1.6', usage: 'Default body text' },
    { name: 'Body S',  token: '--font-size-body-s',  size: '14px', weight: '400', lineHeight: '1.65', usage: 'Small body text' },
    { name: 'Caption', token: '--font-size-caption',  size: '12px', weight: '400', lineHeight: '1.5', usage: 'Labels, captions' },
    { name: 'Overline',token: '--font-size-overline', size: '11px', weight: '600', lineHeight: '1.4', usage: 'Section labels (uppercase)' },
  ]

  const weights = [
    { name: 'Regular', value: 400 }, { name: 'Medium', value: 500 },
    { name: 'SemiBold', value: 600 }, { name: 'Bold', value: 700 },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 960 }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px', marginBottom: 8 }}>Typography</h1>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: 48, maxWidth: 520 }}>
        General Sans for UI text · DM Mono for code and tokens.
      </p>

      {/* Typefaces */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Typefaces</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 56 }}>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '28px 32px' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Primary — General Sans</p>
          <p style={{ fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 12, fontFamily: 'General Sans, sans-serif' }}>Aa Bb Cc</p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', fontFamily: 'General Sans, sans-serif', lineHeight: 1.6 }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789 !@#$%^&*()</p>
        </div>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '28px 32px' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Mono — DM Mono</p>
          <p style={{ fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 12, fontFamily: 'DM Mono, monospace' }}>Aa Bb Cc</p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Mono, monospace', lineHeight: 1.6 }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789 !@#$%^&*()</p>
        </div>
      </div>

      {/* Type Scale */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Type Scale</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden', marginBottom: 56 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 60px 70px 90px', padding: '10px 20px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {['Name','Preview','Size','Weight','Usage'].map(h => <span key={h} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</span>)}
        </div>
        {scale.map((s, i) => (
          <div key={s.name} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 60px 70px 90px', padding: '16px 20px', borderBottom: i < scale.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-family-mono)' }}>{s.name}</span>
            <span style={{ fontSize: s.size, fontWeight: Number(s.weight), color: '#fff', lineHeight: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>The quick brown fox</span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-family-mono)' }}>{s.size}</span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-family-mono)' }}>{s.weight}</span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{s.usage}</span>
          </div>
        ))}
      </div>

      {/* Weights */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Weights</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {weights.map(w => (
          <div key={w.name} style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '24px 20px' }}>
            <p style={{ fontSize: 32, fontWeight: w.value, color: '#fff', marginBottom: 8, lineHeight: 1 }}>Ag</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{w.name}</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-family-mono)' }}>{w.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
