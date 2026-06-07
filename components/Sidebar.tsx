'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const foundationsNav = [
  { label: 'Colors', href: '/foundations/colors' },
  { label: 'Typography', href: '/foundations/typography' },
  { label: 'Spacing', href: '/foundations/spacing' },
  { label: 'Radii & Shadows', href: '/foundations/radii' },
]

const componentsNav = [
  { label: 'Overview', href: '/components' },
  { label: 'Button', href: '/components/button' },
  { label: 'Input', href: '/components/input' },
  { label: 'Checkbox', href: '/components/checkbox' },
  { label: 'Radio Button', href: '/components/radio' },
  { label: 'Toggle', href: '/components/toggle' },
  { label: 'Tag & Badge', href: '/components/tag' },
  { label: 'Avatar', href: '/components/avatar' },
  { label: 'Tooltip', href: '/components/tooltip' },
  { label: 'Empty State', href: '/components/empty-state' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const isFoundations = pathname.startsWith('/foundations')
  const nav = isFoundations ? foundationsNav : componentsNav
  const sectionLabel = isFoundations ? 'Foundations' : 'Components'

  return (
    <aside
      style={{
        width: 220,
        minHeight: '100vh',
        background: 'var(--bg-sidebar)',
        borderRight: '1px solid var(--border-muted)',
        position: 'sticky',
        top: 56,
        height: 'calc(100vh - 56px)',
        overflowY: 'auto',
        flexShrink: 0,
        paddingTop: 24,
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-dim)',
          padding: '0 20px',
          marginBottom: 8,
        }}
      >
        {sectionLabel}
      </div>

      <nav style={{ padding: '0 10px' }}>
        {nav.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'block',
                padding: '8px 10px',
                borderRadius: 6,
                fontSize: 14,
                color: active ? '#fff' : 'rgba(255,255,255,0.45)',
                fontWeight: active ? 500 : 400,
                background: active ? 'rgba(255,255,255,0.07)' : 'transparent',
                marginBottom: 1,
                transition: 'all 0.12s',
                borderLeft: active ? '2px solid var(--color-brand-primary)' : '2px solid transparent',
              }}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          fontSize: 11,
          color: 'var(--text-dim)',
        }}
      >
        Made by Jatin Srivastava
      </div>
    </aside>
  )
}
