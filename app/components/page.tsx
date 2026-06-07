import Link from 'next/link'

const components = [
  {
    name: 'Button',
    href: '/components/button',
    description: 'Primary, secondary, outlined, ghost and destructive variants × 3 sizes.',
    preview: (
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ background: '#E72757', color: '#fff', padding: '9px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, fontFamily: 'General Sans, sans-serif' }}>Primary</div>
        <div style={{ background: 'transparent', color: '#E72757', padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, border: '1.5px solid #A72042', fontFamily: 'General Sans, sans-serif' }}>Outlined</div>
        <div style={{ background: '#1B92F3', color: '#fff', padding: '9px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600, fontFamily: 'General Sans, sans-serif' }}>Secondary</div>
      </div>
    ),
  },
  {
    name: 'Avatar',
    href: '/components/avatar',
    description: 'Circle or square, initials or image, 6 sizes, 4 status indicators.',
    preview: (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {[['JS','#E72757'],['AB','#1B92F3'],['CM','#0AC720'],['DR','#F37C1B']].map(([i,c]) => (
          <div key={i} style={{ width: 44, height: 44, borderRadius: '50%', background: c, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: '#fff', position: 'relative' }}>
            {i}
            <div style={{ position: 'absolute', bottom: 1, right: 1, width: 10, height: 10, borderRadius: '50%', background: '#078D17', border: '2px solid #131B2E' }} />
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Tag & Badge',
    href: '/components/tag',
    description: 'Pill-shaped tags in semantic variants — success, error, warning, brand.',
    preview: (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ background: 'rgba(231,39,87,0.18)', color: '#E72757', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 9999 }}>Brand</span>
        <span style={{ background: 'rgba(10,199,32,0.18)', color: '#0AC720', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 9999 }}>Success</span>
        <span style={{ background: 'rgba(199,10,51,0.18)', color: '#F65578', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 9999 }}>Error</span>
        <span style={{ background: 'rgba(209,231,39,0.18)', color: '#D1E727', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 9999 }}>Warning</span>
        <span style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 9999 }}>Default</span>
      </div>
    ),
  },
  {
    name: 'Input',
    href: '/components/input',
    description: 'Text input with default, focus, error and disabled states.',
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 280 }}>
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'General Sans, sans-serif' }}>Enter value...</div>
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1.5px solid #fff', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#fff', fontFamily: 'General Sans, sans-serif', boxShadow: '0 0 0 3px rgba(255,255,255,0.06)' }}>Focused state</div>
        <div style={{ background: 'rgba(199,10,51,0.06)', border: '1.5px solid #C70A33', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#F65578', fontFamily: 'General Sans, sans-serif' }}>Error state</div>
      </div>
    ),
  },
  {
    name: 'Checkbox',
    href: '/components/checkbox',
    description: 'Checked, unchecked, indeterminate and disabled states.',
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[
          { label: 'Unchecked', checked: false },
          { label: 'Checked', checked: true },
          { label: 'Indeterminate', indeterminate: true },
        ].map(({ label, checked, indeterminate }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${checked || indeterminate ? '#E72757' : 'rgba(255,255,255,0.2)'}`, background: checked || indeterminate ? '#E72757' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {checked && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              {indeterminate && <div style={{ width: 8, height: 2, background: '#fff', borderRadius: 1 }} />}
            </div>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Radio Button',
    href: '/components/radio',
    description: 'Single-select option group with interactive group example.',
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {['Unselected','Selected','Option C'].map((label, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${i === 1 ? '#E72757' : 'rgba(255,255,255,0.2)'}`, background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {i === 1 && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#E72757' }} />}
            </div>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Toggle',
    href: '/components/toggle',
    description: 'On/off switch with interactive settings example.',
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[{ on: false, label: 'Off' }, { on: true, label: 'On' }, { on: true, label: 'On (disabled)', disabled: true }].map(({ on, label, disabled }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, opacity: disabled ? 0.4 : 1 }}>
            <div style={{ width: 44, height: 24, borderRadius: 9999, background: on ? '#E72757' : 'rgba(255,255,255,0.15)', position: 'relative' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#fff', position: 'absolute', top: 3, left: on ? 23 : 3, transition: 'left 0.2s' }} />
            </div>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Tooltip',
    href: '/components/tooltip',
    description: '4 placement directions, dark and light variants.',
    preview: (
      <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ background: '#fff', color: '#111', fontSize: 11, fontWeight: 500, padding: '6px 10px', borderRadius: 7, marginBottom: 8, whiteSpace: 'nowrap' }}>Light tooltip</div>
          <div style={{ width: 32, height: 32, borderRadius: 7, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', margin: '0 auto' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ background: '#111', color: '#fff', fontSize: 11, fontWeight: 500, padding: '6px 10px', borderRadius: 7, marginBottom: 8, whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.1)' }}>Dark tooltip</div>
          <div style={{ width: 32, height: 32, borderRadius: 7, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', margin: '0 auto' }} />
        </div>
      </div>
    ),
  },
  {
    name: 'Empty State',
    href: '/components/empty-state',
    description: 'Guides users when no content is available. 3 semantic variants.',
    preview: (
      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '20px 24px', textAlign: 'center', width: '100%', maxWidth: 240 }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(231,39,87,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, margin: '0 auto 12px' }}>📂</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 6 }}>No files yet</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 14, lineHeight: 1.5 }}>Upload your first file to get started.</div>
        <div style={{ background: '#E72757', color: '#fff', fontSize: 11, fontWeight: 600, padding: '6px 14px', borderRadius: 6, display: 'inline-block' }}>Upload file</div>
      </div>
    ),
  },
]

export default function ComponentsPage() {
  return (
    <div style={{ padding: '56px 48px 80px', minHeight: 'calc(100vh - 56px)' }}>
      {/* Heading */}
      <h1 style={{
        fontSize: 'clamp(48px, 8vw, 96px)',
        fontWeight: 700,
        letterSpacing: '-3px',
        lineHeight: 0.95,
        color: '#fff',
        textTransform: 'lowercase',
        marginBottom: 16,
      }}>
        components
      </h1>
      <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 56, maxWidth: 500, lineHeight: 1.65 }}>
        Interactive documentation for every component — live previews, variants and design token references.
      </p>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {components.map((comp) => (
          <Link
            key={comp.name}
            href={comp.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--bg-sidebar)',
              border: '1px solid var(--border-muted)',
              borderRadius: 14,
              overflow: 'hidden',
              transition: 'border-color 0.15s, transform 0.15s',
              cursor: 'pointer',
            }}
          >
            {/* Preview area */}
            <div style={{
              background: 'var(--bg-card)',
              minHeight: 160,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 28,
            }}>
              {comp.preview}
            </div>
            {/* Info */}
            <div style={{ padding: '18px 20px 20px' }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 5 }}>
                {comp.name}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {comp.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
