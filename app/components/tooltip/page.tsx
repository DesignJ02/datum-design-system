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

export default function TooltipPage() {
  const [placement, setPlacement] = useState('top')
  const [theme, setTheme] = useState('dark')
  const [content, setContent] = useState('This is a tooltip')
  const [visible, setVisible] = useState(true)

  const isDark = theme === 'dark'
  const tooltipBg = isDark ? '#1A1A2E' : '#fff'
  const tooltipColor = isDark ? 'rgba(255,255,255,0.85)' : '#111'
  const tooltipBorder = isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'

  const arrowOffset = -4
  const arrowStyle: React.CSSProperties = {
    width: 8, height: 8, background: tooltipBg,
    border: tooltipBorder,
    position: 'absolute',
    transform: 'rotate(45deg)',
  }

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    background: tooltipBg,
    color: tooltipColor,
    border: tooltipBorder,
    borderRadius: 8,
    padding: '7px 12px',
    fontSize: 12, fontWeight: 500,
    fontFamily: 'var(--font-family-primary)',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
    pointerEvents: 'none',
    ...(placement === 'top'    ? { bottom: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' } :
        placement === 'bottom' ? { top:    'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' } :
        placement === 'left'   ? { right:  'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)' } :
                                 { left:   'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)' }),
  }

  const code = `<Tooltip
  content="${content}"
  placement="${placement}"
  theme="${theme}"
>
  <button>Hover me</button>
</Tooltip>`

  const props = [
    { name: 'content',   type: 'string',  def: 'undefined' },
    { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", def: "'top'" },
    { name: 'theme',     type: "'dark' | 'light'", def: "'dark'" },
    { name: 'delay',     type: 'number',  def: '200' },
    { name: 'children',  type: 'ReactNode', def: 'undefined' },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 900 }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px' }}>Tooltip</h1>
          <span style={{ fontSize: 11, fontWeight: 600, background: 'rgba(231,39,87,0.15)', color: 'var(--color-brand-primary)', border: '1px solid rgba(231,39,87,0.3)', borderRadius: 20, padding: '2px 10px' }}>V 1.0</span>
        </div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 520 }}>
          Contextual label on hover. 4 placement directions × 2 themes.
        </p>
      </div>

      <div style={divStyle} />

      <div style={{ marginBottom: 40 }}>
        <p style={sL}>Playground</p>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <p style={sL}>Placement</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {['top','bottom','left','right'].map(t => <button key={t} style={pill(placement===t)} onClick={() => setPlacement(t)}>{t}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Theme</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {['dark','light'].map(t => <button key={t} style={pill(theme===t)} onClick={() => setTheme(t)}>{t}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Content</p>
              <input value={content} onChange={e => setContent(e.target.value)}
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#fff', fontFamily: 'var(--font-family-primary)', outline: 'none', width: 200 }} />
            </div>
            <div>
              <p style={sL}>Visible</p>
              <button style={pill(visible)} onClick={() => setVisible(!visible)}>{visible ? 'on' : 'off'}</button>
            </div>
          </div>
          <div style={{ padding: '80px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200, background: '#131B2E' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              {visible && (
                <div style={tooltipStyle}>
                  {content}
                </div>
              )}
              <button
                style={{
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 8, padding: '10px 20px', fontSize: 14, color: '#fff',
                  fontFamily: 'var(--font-family-primary)', cursor: 'pointer',
                }}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
              >
                Hover me
              </button>
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
            {['Use to provide supplementary information for icon-only buttons or ambiguous UI.','Choose "top" placement by default; switch when space is constrained.','Keep tooltip text short — one line is ideal.'].map(t => (
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
            {["Don't put critical information in tooltips — users on touch devices won't see them.","Avoid tooltips on disabled elements; the user needs to know why it's disabled, not just what it does."].map(t => (
              <div key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 8, paddingLeft: 4 }}>· {t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
