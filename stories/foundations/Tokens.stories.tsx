import type { Meta, StoryObj } from '@storybook/react'

const tokens = [
  { group: 'Typography', name: '--font-size-display', value: '64px', preview: 'Display text' },
  { group: 'Typography', name: '--font-size-h1', value: '56px', preview: 'Heading one' },
  { group: 'Typography', name: '--font-size-h2', value: '48px', preview: 'Heading two' },
  { group: 'Typography', name: '--font-size-body-base', value: '20px', preview: 'Body base' },
  { group: 'Spacing', name: '--space-8', value: '8px', preview: '8px' },
  { group: 'Spacing', name: '--space-16', value: '16px', preview: '16px' },
  { group: 'Spacing', name: '--space-28', value: '28px', preview: '28px' },
  { group: 'Spacing', name: '--space-44', value: '44px', preview: '44px' },
  { group: 'Radius', name: '--radius-8', value: '8px', preview: '8px' },
  { group: 'Radius', name: '--radius-16', value: '16px', preview: '16px' },
  { group: 'Radius', name: '--radius-24', value: '24px', preview: '24px' },
  { group: 'Radius', name: '--radius-full', value: '9999px', preview: 'Full' },
  { group: 'Elevation', name: '--shadow-sm', value: '0 2px 4px rgba(0,0,0,.08)', preview: 'Small shadow' },
  { group: 'Elevation', name: '--shadow-lg', value: '0 8px 16px rgba(0,0,0,.12)', preview: 'Large shadow' },
]
function TokenReference() {
  return <div style={{ width: '100%', maxWidth: 860, display: 'grid', gap: 8 }}>
    {tokens.map(token => <div key={token.name} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, alignItems: 'center', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: 14, background: 'rgba(255,255,255,.025)' }}>
      <span style={{ fontSize: 12, color: '#E72757', fontFamily: 'var(--font-family-mono)' }}>{token.name}</span>
      <span style={{ fontSize: 12, color: 'rgba(255,255,255,.55)' }}>{token.value}</span>
      <span style={{ fontSize: 13, color: '#fff', fontSize: token.group === 'Typography' ? Number.parseInt(token.value, 10) > 40 ? 18 : 14 : 13 }}>{token.preview}</span>
    </div>)}
  </div>
}
const meta = { title: 'Datum/Foundations/Tokens', component: TokenReference, parameters: { layout: 'padded' }, tags: ['autodocs'] } satisfies Meta<typeof TokenReference>
export default meta
type Story = StoryObj<typeof meta>
export const Reference: Story = {}
