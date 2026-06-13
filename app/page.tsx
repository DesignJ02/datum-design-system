'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ minHeight: 'calc(100vh - 56px)', background: 'var(--bg-page)', padding: '72px 64px 64px' }}>

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'rgba(231,39,87,0.12)', border: '1px solid rgba(231,39,87,0.25)',
        borderRadius: 9999, padding: '4px 12px', fontSize: 12,
        color: 'var(--color-brand-primary)', fontWeight: 500, marginBottom: 32,
      }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-brand-primary)', display: 'inline-block' }} />
        IA Capstone · v1.0
      </div>

      {/* Heading */}
      <h1 style={{
        fontSize: 'clamp(64px, 10vw, 120px)',
        fontWeight: 700,
        letterSpacing: '-4px',
        lineHeight: 0.95,
        color: '#fff',
        marginBottom: 32,
        textTransform: 'lowercase',
      }}>
        sprue.
      </h1>

      <p style={{
        fontSize: 18,
        color: 'rgba(255,255,255,0.45)',
        maxWidth: 480,
        lineHeight: 1.7,
        marginBottom: 48,
        fontWeight: 400,
      }}>
        Tokens, variables and components — built in Figma, documented for teams who care about consistency and craft.
      </p>

      {/* CTA */}
      <div style={{ display: 'flex', gap: 12 }}>
        <Link href="/foundations/colors" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--color-brand-primary)', color: '#fff',
          padding: '12px 24px', borderRadius: 8,
          fontWeight: 600, fontSize: 14, transition: 'opacity 0.15s',
        }}>
          Explore Foundations →
        </Link>
        <Link href="/components" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.06)', color: '#fff',
          padding: '12px 24px', borderRadius: 8,
          fontWeight: 600, fontSize: 14,
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          Browse Components
        </Link>
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
        gap: 1, marginTop: 96, maxWidth: 640,
        border: '1px solid var(--border-muted)',
        borderRadius: 12, overflow: 'hidden',
        background: 'var(--border-muted)',
      }}>
        {[
          { value: '90', label: 'Base color tokens' },
          { value: '9',  label: 'Color palettes' },
          { value: '138',label: 'Semantic tokens' },
          { value: '9',  label: 'Components' },
        ].map((s) => (
          <div key={s.label} style={{
            background: 'var(--bg-sidebar)',
            padding: '28px 24px', textAlign: 'center',
          }}>
            <div style={{
              fontSize: 36, fontWeight: 700, color: 'var(--color-brand-primary)',
              letterSpacing: '-1.5px', lineHeight: 1, marginBottom: 6,
            }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
