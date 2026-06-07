'use client'
import { useState } from 'react'

const pill = (active: boolean): React.CSSProperties => ({
  padding: '5px 12px', borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: 'pointer', border: 'none',
  background: active ? 'var(--color-brand-primary)' : 'rgba(255,255,255,0.07)',
  color: active ? '#fff' : 'rgba(255,255,255,0.5)',
  fontFamily: 'var(--font-family-primary)', transition: 'all 0.12s',
})
const sL: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }
const divStyle: React.CSSProperties = { borderTop: '1px solid rgba(255,255,255,0.07)', margin: '40px 0' }

type Variant = 'brand' | 'success' | 'error' | 'warning' | 'info' | 'default'

const variantMap: Record<Variant, { bg: string; color: string }> = {
  brand:   { bg: 'rgba(231,39,87,0.18)',   color: '#E72757' },
  success: { bg: 'rgba(10,199,32,0.18)',   color: '#0AC720' },
  error:   { bg: 'rgba(199,10,51,0.18)',   color: '#F65578' },
  warning: { bg: 'rgba(243,124,27,0.2)',   color: '#F37C1B' },
  info:    { bg: 'rgba(27,146,243,0.18)',  color: '#1B92F3' },
  default: { bg: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' },
}

export default function TagPage() {
  const [variant, setVariant] = useState<Variant>('brand')
  const [size, setSize] = useState('md')
  const [label, setLabel] = useState('Status')
  const [showDot, setShowDot] = useState(false)

  const sz = { sm: { padding: '2px 8px', fontSize: 10, radius: 4 }, md: { padding: '4px 12px', fontSize: 12, radius: 6 }, lg: { padding: '6px 16px', fontSize: 14, radius: 8 } }[size]!
  const { bg, color } = variantMap[variant]

  const code = `<Tag
  variant="${variant}"
  size="${size}"
  showDot={${showDot}}
>
  ${label}
</Tag>`

  const props = [
    { name: 'variant',  type: "'brand' | 'success' | 'error' | 'warning' | 'info' | 'default'", def: "'default'" },
    { name: 'size',     type: "'sm' | 'md' | 'lg'", def: "'md'" },
    { name: 'children', type: 'string',  def: 'undefined' },
    { name: 'showDot',  type: 'boolean', def: 'false' },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 900 }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px' }}>Tag & Badge</h1>
          <span style={{ fontSize: 11, fontWeight: 600, background: 'rgba(231,39,87,0.15)', color: 'var(--color-brand-primary)', border: '1px solid rgba(231,39,87,0.3)', borderRadius: 20, padding: '2px 10px' }}>V 1.0</span>
        </div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 520 }}>
          Pill-shaped label in 6 semantic variants × 3 sizes. Optional dot indicator.
        </p>
      </div>

      <div style={divStyle} />

      <div style={{ marginBottom: 40 }}>
        <p style={sL}>Playground</p>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <p style={sL}>Variant</p>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {(Object.keys(variantMap) as Variant[]).map(v => <button key={v} style={pill(variant===v)} onClick={() => setVariant(v)}>{v}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Size</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {['sm','md','lg'].map(t => <button key={t} style={pill(size===t)} onClick={() => setSize(t)}>{t}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Dot</p>
              <button style={pill(showDot)} onClick={() => setShowDot(!showDot)}>{showDot ? 'on' : 'off'}</button>
            </div>
            <div>
              <p style={sL}>Label</p>
              <input value={label} onChange={e => setLabel(e.target.value)}
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#fff', fontFamily: 'var(--font-family-primary)', outline: 'none', width: 120 }} />
            </div>
          </div>
          <div style={{ padding: '60px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160, background: '#131B2E' }}>
            <span style={{
              background: bg, color,
              fontSize: sz.fontSize, fontWeight: 500,
              padding: sz.padding, borderRadius: sz.radius,
              fontFamily: 'var(--font-family-primary)',
              display: 'inline-flex', alignItems: 'center', gap: 5,
            }}>
              {showDot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block' }} />}
              {label}
            </span>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <p style={sL}>Code</p>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px' }}>
          <pre style={{ fontFamily: 'var(--font-family-mono)', fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, overflowX: 'auto', margin: 0 }}>{code}</pre>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <p style={sL}>Props</p>
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

      <div>
        <p style={sL}>Usage guidelines</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(10,199,32,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#0AC720" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>When to use</span>
            </div>
            {['Use to display a status, category, or count at a glance.','Use semantic variants (success, error, warning) consistently with their meaning.','Add a dot indicator to convey live status like "Online" or "Active".'].map(t => (
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
            {["Don't use tags as interactive buttons — they are purely informational.","Avoid long text inside tags; keep labels to 1–2 words for scannability."].map(t => (
              <div key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 8, paddingLeft: 4 }}>· {t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
