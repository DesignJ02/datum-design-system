'use client'
import { useState } from 'react'

const pill = (active: boolean): React.CSSProperties => ({
  padding: '5px 12px', borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: 'pointer', border: 'none',
  background: active ? 'var(--color-brand-primary)' : 'rgba(255,255,255,0.07)',
  color: active ? '#fff' : 'rgba(255,255,255,0.5)',
  fontFamily: 'var(--font-family-primary)', transition: 'all 0.12s',
})

const sectionLabel: React.CSSProperties = {
  fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.3)', marginBottom: 10,
}

const divider: React.CSSProperties = {
  borderTop: '1px solid rgba(255,255,255,0.07)', margin: '40px 0',
}

export default function ButtonPage() {
  const [type, setType] = useState('primary')
  const [size, setSize] = useState('md')
  const [text, setText] = useState('Button Text')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const bgMap: Record<string,string> = {
    primary: '#E72757', secondary: '#1B92F3',
    outline: 'transparent', ghost: 'transparent', danger: '#C70A33',
  }
  const colorMap: Record<string,string> = {
    primary: '#fff', secondary: '#fff', outline: '#E72757', ghost: 'rgba(255,255,255,0.8)', danger: '#fff',
  }
  const borderMap: Record<string,string> = {
    primary: 'none', secondary: 'none', outline: '1.5px solid #E72757',
    ghost: 'none', danger: 'none',
  }
  const sizeMap: Record<string,{padding:string,fontSize:number,borderRadius:number}> = {
    small: { padding: '6px 14px', fontSize: 12, borderRadius: 6 },
    md:    { padding: '10px 20px', fontSize: 14, borderRadius: 8 },
    big:   { padding: '14px 28px', fontSize: 16, borderRadius: 10 },
  }

  const s = sizeMap[size]
  const code = `<Button
  type="${type}"
  size="${size}"
  loading={${loading}}
  disabled={${disabled}}
>
  ${text}
</Button>`

  const props = [
    { name: 'type',     type: "'primary' | 'outline' | 'secondary' | 'ghost' | 'danger'", def: "'primary'" },
    { name: 'size',     type: "'small' | 'md' | 'big'", def: "'md'" },
    { name: 'children', type: 'string', def: "'Button Text'" },
    { name: 'loading',  type: 'boolean', def: 'false' },
    { name: 'disabled', type: 'boolean', def: 'false' },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 900 }}>
      {/* Header */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px' }}>Button</h1>
          <span style={{ fontSize: 11, fontWeight: 600, background: 'rgba(231,39,87,0.15)', color: 'var(--color-brand-primary)', border: '1px solid rgba(231,39,87,0.3)', borderRadius: 20, padding: '2px 10px' }}>V 1.0</span>
        </div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 520 }}>
          Button with 5 visual types × 3 sizes. Optional loading and disabled states.
        </p>
      </div>

      <div style={divider} />

      {/* Playground */}
      <div style={{ marginBottom: 40 }}>
        <p style={sectionLabel}>Playground</p>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
          {/* Controls */}
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <p style={sectionLabel}>Type</p>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {['primary','outline','secondary','ghost','danger'].map(t => (
                  <button key={t} style={pill(type===t)} onClick={() => setType(t)}>{t}</button>
                ))}
              </div>
            </div>
            <div>
              <p style={sectionLabel}>Size</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {['small','md','big'].map(t => (
                  <button key={t} style={pill(size===t)} onClick={() => setSize(t)}>{t}</button>
                ))}
              </div>
            </div>
            <div>
              <p style={sectionLabel}>Label</p>
              <input value={text} onChange={e => setText(e.target.value)}
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#fff', fontFamily: 'var(--font-family-primary)', outline: 'none', width: 130 }} />
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div>
                <p style={sectionLabel}>Loading</p>
                <button style={pill(loading)} onClick={() => setLoading(!loading)}>{loading ? 'on' : 'off'}</button>
              </div>
              <div>
                <p style={sectionLabel}>Disabled</p>
                <button style={pill(disabled)} onClick={() => setDisabled(!disabled)}>{disabled ? 'on' : 'off'}</button>
              </div>
            </div>
          </div>
          {/* Preview */}
          <div style={{ padding: '60px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160, background: '#131B2E' }}>
            <button
              disabled={disabled}
              style={{
                background: disabled ? 'rgba(255,255,255,0.08)' : bgMap[type],
                color: disabled ? 'rgba(255,255,255,0.3)' : colorMap[type],
                border: disabled ? '1px solid rgba(255,255,255,0.1)' : borderMap[type],
                borderRadius: s.borderRadius, padding: s.padding,
                fontSize: s.fontSize, fontWeight: 600,
                fontFamily: 'var(--font-family-primary)',
                cursor: disabled ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', gap: 8,
                opacity: disabled ? 0.5 : 1,
              }}
            >
              {loading && <span style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />}
              {text}
            </button>
          </div>
        </div>
      </div>

      {/* Code */}
      <div style={{ marginBottom: 40 }}>
        <p style={sectionLabel}>Code</p>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px' }}>
          <pre style={{ fontFamily: 'var(--font-family-mono)', fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, overflowX: 'auto', margin: 0 }}>{code}</pre>
        </div>
      </div>

      {/* Props */}
      <div style={{ marginBottom: 40 }}>
        <p style={sectionLabel}>Props</p>
        <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 120px', padding: '10px 20px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            {['Name','Type','Default'].map(h => <span key={h} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</span>)}
          </div>
          {props.map((p, i) => (
            <div key={p.name} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 120px', padding: '12px 20px', borderBottom: i < props.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none', alignItems: 'start' }}>
              <code style={{ fontSize: 13, color: '#E72757', fontFamily: 'var(--font-family-mono)' }}>{p.name}</code>
              <code style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-family-mono)', lineHeight: 1.6 }}>{p.type}</code>
              <code style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-family-mono)' }}>{p.def}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div>
        <p style={sectionLabel}>Usage guidelines</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(10,199,32,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#0AC720" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>When to use</span>
            </div>
            {['Use primary for the single most important action on a surface — one primary per view.','Use outline or secondary for supporting actions that sit alongside a primary.','Ghost works well in toolbars or dense layouts where visual weight needs to stay low.','Show the loading state while an async action is in progress to prevent double-submits.'].map(t => (
              <div key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 8, paddingLeft: 4 }}>· {t}</div>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(199,10,51,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 12, color: '#C70A33', fontWeight: 700, lineHeight: 1 }}>×</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>When not to use</span>
            </div>
            {["Don't place two primary buttons side by side — it dilutes hierarchy.","Avoid using a button for navigation; use a link instead.","Don't use danger unless the action is destructive and irreversible."].map(t => (
              <div key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 8, paddingLeft: 4 }}>· {t}</div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
