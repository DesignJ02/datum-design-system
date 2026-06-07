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

export default function InputPage() {
  const [state, setState] = useState('default')
  const [type, setType] = useState('text')
  const [label, setLabel] = useState('Email address')
  const [placeholder, setPlaceholder] = useState('you@example.com')
  const [helperText, setHelperText] = useState('We will never share your email.')
  const [value, setValue] = useState('')

  const borderColor = state === 'error' ? '#C70A33' : state === 'focus' ? '#fff' : 'rgba(255,255,255,0.12)'
  const boxShadow = state === 'focus' ? '0 0 0 3px rgba(255,255,255,0.05)' : state === 'error' ? '0 0 0 3px rgba(199,10,51,0.15)' : 'none'
  const helperColor = state === 'error' ? '#F65578' : 'rgba(255,255,255,0.35)'

  const code = `<Input
  type="${type}"
  label="${label}"
  placeholder="${placeholder}"
  helperText="${helperText}"
  state="${state}"
/>`

  const props = [
    { name: 'type',        type: "'text' | 'number' | 'password' | 'email'", def: "'text'" },
    { name: 'label',       type: 'string',  def: 'undefined' },
    { name: 'placeholder', type: 'string',  def: 'undefined' },
    { name: 'helperText',  type: 'string',  def: 'undefined' },
    { name: 'state',       type: "'default' | 'focus' | 'error' | 'disabled'", def: "'default'" },
    { name: 'value',       type: 'string',  def: "''" },
    { name: 'onChange',    type: '(val: string) => void', def: 'undefined' },
  ]

  return (
    <div style={{ padding: '48px 56px 80px', maxWidth: 900 }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-0.8px' }}>Input</h1>
          <span style={{ fontSize: 11, fontWeight: 600, background: 'rgba(231,39,87,0.15)', color: 'var(--color-brand-primary)', border: '1px solid rgba(231,39,87,0.3)', borderRadius: 20, padding: '2px 10px' }}>V 1.0</span>
        </div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 520 }}>
          Text input with default, focus, error and disabled states. Optional label and helper text.
        </p>
      </div>

      <div style={divStyle} />

      {/* Playground */}
      <div style={{ marginBottom: 40 }}>
        <p style={sL}>Playground</p>
        <div style={{ background: '#0F1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <p style={sL}>State</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {['default','focus','error','disabled'].map(t => <button key={t} style={pill(state===t)} onClick={() => setState(t)}>{t}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Type</p>
              <div style={{ display: 'flex', gap: 4 }}>
                {['text','number','password','email'].map(t => <button key={t} style={pill(type===t)} onClick={() => setType(t)}>{t}</button>)}
              </div>
            </div>
            <div>
              <p style={sL}>Label</p>
              <input value={label} onChange={e => setLabel(e.target.value)}
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '5px 10px', fontSize: 12, color: '#fff', fontFamily: 'var(--font-family-primary)', outline: 'none', width: 160 }} />
            </div>
          </div>
          <div style={{ padding: '48px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160, background: '#131B2E' }}>
            <div style={{ width: '100%', maxWidth: 320 }}>
              {label && <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: state === 'error' ? '#F65578' : 'rgba(255,255,255,0.7)', marginBottom: 6, fontFamily: 'var(--font-family-primary)' }}>{label}</label>}
              <input
                type={type}
                placeholder={placeholder}
                value={value}
                disabled={state === 'disabled'}
                onChange={e => setValue(e.target.value)}
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: state === 'disabled' ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.06)',
                  border: `1.5px solid ${borderColor}`,
                  borderRadius: 8, padding: '10px 14px', fontSize: 14,
                  color: state === 'disabled' ? 'rgba(255,255,255,0.25)' : '#fff',
                  fontFamily: 'var(--font-family-primary)', outline: 'none',
                  boxShadow, transition: 'all 0.15s',
                  cursor: state === 'disabled' ? 'not-allowed' : 'text',
                }}
              />
              {helperText && <p style={{ fontSize: 11, color: helperColor, marginTop: 6, fontFamily: 'var(--font-family-primary)' }}>{state === 'error' ? 'This field has an error. ' + helperText : helperText}</p>}
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
            {['Always pair with a label so the purpose is clear, even when using placeholder text.','Use helper text for format hints or validation feedback (e.g. "Must be at least 8 characters").','Show the error state immediately after blur if validation fails, not on every keystroke.'].map(t => (
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
            {["Don't use placeholder text as a substitute for a label — it disappears when the user types.","Avoid using error state for warnings that don't require correction before submission."].map(t => (
              <div key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 8, paddingLeft: 4 }}>· {t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
