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

const variants = {
  default: { emoji: '📂', iconBg: 'rgba(231,39,87,0.15)', iconColor: '#E72757', btnBg: '#E72757' },
  success: { emoji: '✅', iconBg: 'rgba(10,199,32,0.15)',  iconColor: '#0AC720', btnBg: '#078D17' },
  error:   { emoji: '⚠️', iconBg: 'rgba(199,10,51,0.15)',  iconColor: '#F65578', btnBg: '#C70A33' },
  info:    { emoji: '💡', iconBg: 'rgba(27,146,243,0.15)', iconColor: '#1B92F3', btnBg: '#1B92F3' },
}
type Variant = keyof typeof variants

export default function EmptyStatePage() {
  const [variant, setVariant] = useState<Variant>('default')
  const [title, setTitle] = useState('No files yet')
  const [description, setDescription] = useState('Upload your first file to get started.')
  const [btnLabel, setBtnLabel] = useState('Upload file')
  const [showBtn, setShowBtn] = useState(true)

  const v = variants[variant]

  const code = `<EmptyState
  variant="${variant}"
  title="${title}"
  description="${description}"
  action={{ label: "${btnLabel}", onClick: handleAction }}
/>`

  const props = [
    { name: 'variant',     type: "'default' | 'success' | 'error' | 'info'", def: "'default'" },
    { name: 'title',       type: 'string',  def: 'undefined' },
    { name: 'description', type: 'string',  def: 'undefined' },
    { name: 'action',      type: '{ label: string; onClick: () => void }', def: 'undefined' },
    { name: 'icon',        type: 'ReactNode', def: 'undefined' },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 900 }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px' }}>Empty State</h1>
          <span style={{ fontSize: 11, fontWeight: 600, background: 'rgba(231,39,87,0.15)', color: 'var(--color-brand-primary)', border: '1px solid rgba(231,39,87,0.3)', borderRadius: 20, padding: '2px 10px' }}>V 1.0</span>
        </div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 520 }}>
          Guides users when no content is available. 4 semantic variants with optional CTA.
        </p>
      </div>

      <div style={divStyle} />

      <div style={{ marginBottom: 40 }}>
        <p style={sL}>Playground</p>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <p style={sL}>Variant</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {(Object.keys(variants) as Variant[]).map(t => <button key={t} style={pill(variant===t)} onClick={() => setVariant(t)}>{t}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Title</p>
              <input value={title} onChange={e => setTitle(e.target.value)}
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#fff', fontFamily: 'var(--font-family-primary)', outline: 'none', width: 160 }} />
            </div>
            <div>
              <p style={sL}>CTA Label</p>
              <input value={btnLabel} onChange={e => setBtnLabel(e.target.value)}
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#fff', fontFamily: 'var(--font-family-primary)', outline: 'none', width: 120 }} />
            </div>
            <div>
              <p style={sL}>Show CTA</p>
              <button style={pill(showBtn)} onClick={() => setShowBtn(!showBtn)}>{showBtn ? 'on' : 'off'}</button>
            </div>
          </div>
          <div style={{ padding: '60px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 220, background: '#131B2E' }}>
            <div style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: '36px 40px', textAlign: 'center', maxWidth: 300,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: v.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, margin: '0 auto 16px',
              }}>
                {v.emoji}
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, fontFamily: 'var(--font-family-primary)' }}>{title}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: showBtn ? 20 : 0, lineHeight: 1.6, fontFamily: 'var(--font-family-primary)' }}>{description}</div>
              {showBtn && (
                <button style={{
                  background: v.btnBg, color: '#fff', border: 'none',
                  fontSize: 13, fontWeight: 600, padding: '8px 20px', borderRadius: 7,
                  fontFamily: 'var(--font-family-primary)', cursor: 'pointer',
                }}>
                  {btnLabel}
                </button>
              )}
            </div>
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
          <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr 120px', padding: '10px 20px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            {['Name','Type','Default'].map(h => <span key={h} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</span>)}
          </div>
          {props.map((p, i) => (
            <div key={p.name} style={{ display: 'grid', gridTemplateColumns: '130px 1fr 120px', padding: '12px 20px', borderBottom: i < props.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none', alignItems: 'start' }}>
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
            {['Use whenever a list, table, or page section has no content to show.','Include a CTA when there is a clear next step the user can take to populate the space.','Use the error variant to communicate a failed load — pair with a Retry action.'].map(t => (
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
            {["Don't use empty state as a loading indicator — use a skeleton or spinner instead.","Avoid placing multiple empty states on a single page; it signals a deeper UX issue."].map(t => (
              <div key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 8, paddingLeft: 4 }}>· {t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
