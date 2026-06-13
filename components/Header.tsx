'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isFoundations = pathname.startsWith('/foundations')
  const isComponents = pathname.startsWith('/components')

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        background: 'var(--bg-header)',
        borderBottom: '1px solid var(--border-muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 28px',
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            background: 'var(--color-brand-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13,
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.5px',
            flexShrink: 0,
          }}
        >
          S
        </div>
        <span
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '-0.3px',
          }}
        >
          Sprue
        </span>
      </Link>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Link
          href="/foundations/colors"
          style={{
            padding: '6px 14px',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: isFoundations ? 600 : 400,
            color: isFoundations ? '#fff' : 'rgba(255,255,255,0.5)',
            background: isFoundations ? 'rgba(255,255,255,0.08)' : 'transparent',
            transition: 'all 0.15s',
          }}
        >
          Foundations
        </Link>
        <Link
          href="/components"
          style={{
            padding: '6px 14px',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: isComponents ? 600 : 400,
            color: isComponents ? '#fff' : 'rgba(255,255,255,0.5)',
            background: isComponents ? 'rgba(255,255,255,0.08)' : 'transparent',
            transition: 'all 0.15s',
          }}
        >
          Components
        </Link>
      </nav>

      {/* Version */}
      <div style={{ fontSize: 12, color: 'var(--text-dim)', fontFamily: 'var(--font-family-mono)' }}>
        v1.0
      </div>
    </header>
  )
}
