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

const options = ['Free plan', 'Pro plan', 'Enterprise']

export default function RadioPage() {
  const [selected, setSelected] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [size, setSize] = useState('md')

  const sz = size === 'sm' ? 16 : size === 'md' ? 20 : 24
  const dot = size === 'sm' ? 7 : size === 'md' ? 9 : 11

  const code = `<RadioGroup
  options={['Free plan', 'Pro plan', 'Enterprise']}
  value="${options[selected]}"
  size="${size}"
  disabled={${disabled}}
  onChange={(val) => setValue(val)}
/>`

  const props = [
    { name: 'options',  type: 'string[]',  def: '[]' },
    { name: 'value',    type: 'string',    def: "undefined" },
    { name: 'size',     type: "'sm' | 'md' | 'lg'", def: "'md'" },
    { name: 'disabled', type: 'boolean',   def: 'false' },
    { name: 'onChange', type: '(value: string) => void', def: 'undefined' },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 900 }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px' }}>Radio Button</h1>
          <span style={{ fontSize: 11, fontWeight: 600, background: 'rgba(231,39,87,0.15)', color: 'var(--color-brand-primary)', border: '1px solid rgba(231,39,87,0.3)', borderRadius: 20, padding: '2px 10px' }}>V 1.0</span>
        </div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 520 }}>
          Single-selection option group. Supports 3 sizes and disabled state.
        </p>
      </div>

      <div style={divStyle} />

      <div style={{ marginBottom: 40 }}>
        <p style={sL}>Playground</p>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <p style={sL}>Selected</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {options.map((o, i) => <button key={o} style={pill(selected===i)} onClick={() => setSelected(i)}>{o}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Size</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {['sm','md','lg'].map(t => <button key={t} style={pill(size===t)} onClick={() => setSize(t)}>{t}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Disabled</p>
              <button style={pill(disabled)} onClick={() => setDisabled(!disabled)}>{disabled ? 'on' : 'off'}</button>
            </div>
          </div>
          <div style={{ padding: '48px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160, background: '#131B2E' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, opacity: disabled ? 0.4 : 1 }}>
              {options.map((o, i) => (
                <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer' }}
                  onClick={() => !disabled && setSelected(i)}>
                  <div style={{
                    width: sz, height: sz, borderRadius: '50%',
                    border: `2px solid ${selected === i ? '#E72757' : 'rgba(255,255,255,0.25)'}`,
                    background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    transition: 'border-color 0.15s',
                  }}>
                    {selected === i && <div style={{ width: dot, height: dot, borderRadius: '50%', background: '#E72757' }} />}
                  </div>
                  <span style={{ fontSize: 14, color: selected === i ? '#fff' : 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-family-primary)', fontWeight: selected === i ? 500 : 400 }}>{o}</span>
                </div>
              ))}
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
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 140px', padding: '10px 20px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            {['Name','Type','Default'].map(h => <span key={h} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</span>)}
          </div>
          {props.map((p, i) => (
            <div key={p.name} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 140px', padding: '12px 20px', borderBottom: i < props.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none', alignItems: 'start' }}>
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
            {['Use when only one option from a visible list can be selected at a time.','Prefer radio when options are 2–5 items; use a select/dropdown for longer lists.','Pre-select the most common or recommended option when appropriate.'].map(t => (
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
            {["Don't use radio buttons when multiple selections are valid — use Checkbox instead.","Avoid radio for a single yes/no choice; a Toggle is more appropriate."].map(t => (
              <div key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 8, paddingLeft: 4 }}>· {t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
