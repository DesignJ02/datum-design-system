'use client'
import { useState } from 'react'

const pill = (active: boolean): React.CSSProperties => ({
  padding: '5px 12px', borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: 'pointer', border: 'none',
  background: active ? 'var(--color-brand-primary)' : 'rgba(255,255,255,0.07)',
  color: active ? '#fff' : 'rgba(255,255,255,0.5)',
  fontFamily: 'var(--font-family-primary)', transition: 'all 0.12s',
})
const sL: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }
const div: React.CSSProperties = { borderTop: '1px solid rgba(255,255,255,0.07)', margin: '40px 0' }

const statusColor: Record<string,string> = { online: '#0AC720', busy: '#E72757', away: '#F37C1B', offline: 'rgba(255,255,255,0.25)' }
const sizePx: Record<string,number> = { xs: 24, s: 32, m: 44, l: 56 }

export default function AvatarPage() {
  const [type, setType] = useState('initials')
  const [size, setSize] = useState('m')
  const [status, setStatus] = useState('online')
  const [showStatus, setShowStatus] = useState(true)
  const [initials, setInitials] = useState('JS')

  const sz = sizePx[size]
  const fontSize = sz < 32 ? 9 : sz < 44 ? 12 : sz < 56 ? 15 : 18
  const dotSize = sz < 32 ? 7 : sz < 56 ? 10 : 13
  const dotOffset = Math.round(sz * 0.04)

  const code = `<Avatar
  type="${type}"
  size="${size}"
  status="${status}"
  showStatus={${showStatus}}
  initials="${initials}"
/>`

  const props = [
    { name: 'type',       type: "'image' | 'icon' | 'initials'", def: "'initials'" },
    { name: 'size',       type: "'xs' | 's' | 'm' | 'l'",       def: "'m'" },
    { name: 'status',     type: "'online' | 'busy' | 'away' | 'offline'", def: "'online'" },
    { name: 'showStatus', type: 'boolean',                        def: 'true' },
    { name: 'initials',   type: 'string',                         def: "'JS'" },
    { name: 'src',        type: 'string',                         def: 'undefined' },
    { name: 'alt',        type: 'string',                         def: "'Avatar'" },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 900 }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px' }}>Avatar</h1>
          <span style={{ fontSize: 11, fontWeight: 600, background: 'rgba(231,39,87,0.15)', color: 'var(--color-brand-primary)', border: '1px solid rgba(231,39,87,0.3)', borderRadius: 20, padding: '2px 10px' }}>V 1.0</span>
        </div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 520 }}>
          User avatar with 3 display types × 4 sizes. Optional status indicator.
        </p>
      </div>

      <div style={div} />

      {/* Playground */}
      <div style={{ marginBottom: 40 }}>
        <p style={sL}>Playground</p>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <p style={sL}>Type</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {['initials','icon','image'].map(t => <button key={t} style={pill(type===t)} onClick={() => setType(t)}>{t}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Size</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {['xs','s','m','l'].map(t => <button key={t} style={pill(size===t)} onClick={() => setSize(t)}>{t}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Status</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {['online','busy','away','offline'].map(t => <button key={t} style={pill(status===t)} onClick={() => setStatus(t)}>{t}</button>)}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div>
                <p style={sL}>Show Status</p>
                <button style={pill(showStatus)} onClick={() => setShowStatus(!showStatus)}>{showStatus ? 'on' : 'off'}</button>
              </div>
              {type === 'initials' && (
                <div>
                  <p style={sL}>Initials</p>
                  <input value={initials} onChange={e => setInitials(e.target.value.slice(0,2).toUpperCase())}
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#fff', fontFamily: 'var(--font-family-primary)', outline: 'none', width: 60 }} />
                </div>
              )}
            </div>
          </div>
          <div style={{ padding: '60px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160, background: '#131B2E' }}>
            <div style={{ position: 'relative', width: sz, height: sz }}>
              <div style={{ width: sz, height: sz, borderRadius: '50%', background: '#E72757', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize, fontWeight: 600, color: '#fff', overflow: 'hidden' }}>
                {type === 'initials' && initials}
                {type === 'icon' && (
                  <svg width={sz * 0.5} height={sz * 0.5} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.8)" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                )}
                {type === 'image' && (
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #E72757, #1B92F3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: fontSize * 0.8, color: 'rgba(255,255,255,0.6)' }}>IMG</div>
                )}
              </div>
              {showStatus && (
                <div style={{ position: 'absolute', bottom: dotOffset, right: dotOffset, width: dotSize, height: dotSize, borderRadius: '50%', background: statusColor[status], border: `2px solid #131B2E` }} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Code */}
      <div style={{ marginBottom: 40 }}>
        <p style={sL}>Code</p>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px' }}>
          <pre style={{ fontFamily: 'var(--font-family-mono)', fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, overflowX: 'auto', margin: 0 }}>{code}</pre>
        </div>
      </div>

      {/* Props */}
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

      {/* Usage */}
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
            {['Use initials when a profile photo is not available.','Show status indicators in real-time collaboration contexts like chat or presence lists.','Use the "l" size for profile pages; "xs" or "s" in data tables and lists.'].map(t => (
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
            {["Don't show status indicators in contexts where presence is irrelevant.","Avoid using avatars as decorative elements; they should always represent a real entity."].map(t => (
              <div key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 8, paddingLeft: 4 }}>· {t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
