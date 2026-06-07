export default function ColorsPage() {
  const palettes = [
    { name: 'Crimson', key: 'crimson', shades: [
      { shade: '50',  hex: '#FDE8ED' }, { shade: '100', hex: '#FAC5D1' }, { shade: '200', hex: '#F59DAF' },
      { shade: '300', hex: '#EF7490' }, { shade: '400', hex: '#EB5574' }, { shade: '500', hex: '#E72757' },
      { shade: '600', hex: '#CF2250' }, { shade: '700', hex: '#A61C40' }, { shade: '800', hex: '#7D1530' },
      { shade: '900', hex: '#530D20' },
    ]},
    { name: 'Blue Selection', key: 'blue-sel', shades: [
      { shade: '50',  hex: '#E3F1FD' }, { shade: '100', hex: '#BAD9FA' }, { shade: '200', hex: '#8EC0F7' },
      { shade: '300', hex: '#61A6F4' }, { shade: '400', hex: '#3E92F3' }, { shade: '500', hex: '#1B92F3' },
      { shade: '600', hex: '#1782DA' }, { shade: '700', hex: '#1269B0' }, { shade: '800', hex: '#0D5186' },
      { shade: '900', hex: '#08385B' },
    ]},
    { name: 'Grey', key: 'grey', shades: [
      { shade: '50',  hex: '#F7F7F8' }, { shade: '100', hex: '#EEEEF0' }, { shade: '200', hex: '#D9D9DE' },
      { shade: '300', hex: '#B9B9C2' }, { shade: '400', hex: '#9191A0' }, { shade: '500', hex: '#6E6E7E' },
      { shade: '600', hex: '#585866' }, { shade: '700', hex: '#434350' }, { shade: '800', hex: '#2E2E38' },
      { shade: '900', hex: '#1A1A22' },
    ]},
    { name: 'Green', key: 'green', shades: [
      { shade: '50',  hex: '#E3FCEA' }, { shade: '100', hex: '#BAF8CB' }, { shade: '200', hex: '#8CF4A9' },
      { shade: '300', hex: '#5CEF87' }, { shade: '400', hex: '#34EB6D' }, { shade: '500', hex: '#0AC720' },
      { shade: '600', hex: '#079E1B' }, { shade: '700', hex: '#057815' }, { shade: '800', hex: '#03530F' },
      { shade: '900', hex: '#023009' },
    ]},
    { name: 'Orange', key: 'orange', shades: [
      { shade: '50',  hex: '#FEF0E3' }, { shade: '100', hex: '#FCD7B9' }, { shade: '200', hex: '#FABB8B' },
      { shade: '300', hex: '#F89E5D' }, { shade: '400', hex: '#F68938' }, { shade: '500', hex: '#F37C1B' },
      { shade: '600', hex: '#DA6F18' }, { shade: '700', hex: '#B05913' }, { shade: '800', hex: '#86430E' },
      { shade: '900', hex: '#5C2E09' },
    ]},
    { name: 'Teal', key: 'teal', shades: [
      { shade: '50',  hex: '#E0F7F6' }, { shade: '100', hex: '#B3EBE9' }, { shade: '200', hex: '#82DEDB' },
      { shade: '300', hex: '#4FD0CD' }, { shade: '400', hex: '#27C5C1' }, { shade: '500', hex: '#00B8B4' },
      { shade: '600', hex: '#00A4A0' }, { shade: '700', hex: '#008C88' }, { shade: '800', hex: '#006B68' },
      { shade: '900', hex: '#004B49' },
    ]},
    { name: 'Yellow', key: 'yellow', shades: [
      { shade: '50',  hex: '#FEFDE3' }, { shade: '100', hex: '#FDFAB9' }, { shade: '200', hex: '#FBF68B' },
      { shade: '300', hex: '#FAF25D' }, { shade: '400', hex: '#F8EE38' }, { shade: '500', hex: '#F7EA1B' },
      { shade: '600', hex: '#DED218' }, { shade: '700', hex: '#B2A813' }, { shade: '800', hex: '#867F0E' },
      { shade: '900', hex: '#5A5509' },
    ]},
    { name: 'Red', key: 'red', shades: [
      { shade: '50',  hex: '#FDE3E3' }, { shade: '100', hex: '#FAB9B9' }, { shade: '200', hex: '#F78B8B' },
      { shade: '300', hex: '#F45D5D' }, { shade: '400', hex: '#F23838' }, { shade: '500', hex: '#C70A33' },
      { shade: '600', hex: '#B2072E' }, { shade: '700', hex: '#8F0525' }, { shade: '800', hex: '#6B031B' },
      { shade: '900', hex: '#470212' },
    ]},
    { name: 'Blue', key: 'blue', shades: [
      { shade: '50',  hex: '#E3EAF4' }, { shade: '100', hex: '#B9CAE4' }, { shade: '200', hex: '#8CA8D3' },
      { shade: '300', hex: '#5E85C1' }, { shade: '400', hex: '#396AB5' }, { shade: '500', hex: '#154EA8' },
      { shade: '600', hex: '#124797' }, { shade: '700', hex: '#0E3979' }, { shade: '800', hex: '#0A2B5B' },
      { shade: '900', hex: '#061D3D' },
    ]},
  ]

  const semantic = [
    { token: '--color-brand-primary',   value: '#E72757', usage: 'Primary brand actions, highlights' },
    { token: '--color-brand-secondary', value: '#1B92F3', usage: 'Secondary brand, links' },
    { token: '--color-surface-default', value: '#0D0D0D', usage: 'Main page background' },
    { token: '--color-surface-raised',  value: '#131B2E', usage: 'Cards, raised surfaces' },
    { token: '--color-text-primary',    value: '#FFFFFF', usage: 'Primary body text' },
    { token: '--color-text-secondary',  value: 'rgba(255,255,255,0.45)', usage: 'Secondary/muted text' },
    { token: '--color-border-default',  value: 'rgba(255,255,255,0.07)', usage: 'Default borders' },
    { token: '--color-success',         value: '#0AC720', usage: 'Success states' },
    { token: '--color-error',           value: '#C70A33', usage: 'Error/danger states' },
    { token: '--color-warning',         value: '#F37C1B', usage: 'Warning states' },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 960 }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px', marginBottom: 8 }}>Colors</h1>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: 48, maxWidth: 520 }}>
        9 base palettes × 10 shades each. 90 tokens total, mapped to semantic roles.
      </p>

      {/* Base Palettes */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>Base Palettes</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 56 }}>
        {palettes.map(p => (
          <div key={p.key}>
            <p style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>{p.name}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 4 }}>
              {p.shades.map(s => (
                <div key={s.shade}>
                  <div style={{ height: 40, borderRadius: 6, background: s.hex, marginBottom: 4 }} />
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>{s.shade}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Semantic Tokens */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Semantic Tokens</p>
      <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 80px 1fr', padding: '10px 20px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {['Token', 'Value', 'Usage'].map(h => <span key={h} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</span>)}
        </div>
        {semantic.map((s, i) => (
          <div key={s.token} style={{ display: 'grid', gridTemplateColumns: '220px 80px 1fr', padding: '12px 20px', borderBottom: i < semantic.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none', alignItems: 'center' }}>
            <code style={{ fontSize: 12, color: '#E72757', fontFamily: 'var(--font-family-mono)' }}>{s.token}</code>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: s.value, border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }} />
            </div>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{s.usage}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
