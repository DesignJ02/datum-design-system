import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

type Props = { initials: string; size: 'small' | 'medium' | 'large'; shape: 'circle' | 'square'; status: 'online' | 'away' | 'offline' | 'busy' | 'none' }
const sizes = { small: 32, medium: 44, large: 56 }
const statuses: Record<Props['status'], string> = { online: '#078D17', away: '#D1E727', offline: '#686868', busy: '#F31B4A', none: 'transparent' }
function DatumAvatar({ initials, size, shape, status }: Props) {
  const px = sizes[size]
  return <span title={status === 'none' ? initials : `${initials} · ${status}`} style={{ display: 'inline-flex', position: 'relative', alignItems: 'center', justifyContent: 'center', width: px, height: px, borderRadius: shape === 'circle' ? '50%' : 10, background: '#E72757', color: '#fff', fontSize: px / 3, fontWeight: 600, fontFamily: 'var(--font-family-primary)' }}>
    {initials}
    {status !== 'none' && <span style={{ position: 'absolute', right: 0, bottom: 0, width: Math.max(9, px / 4), height: Math.max(9, px / 4), borderRadius: '50%', background: statuses[status], border: '2px solid #131B2E' }} />}
  </span>
}
const meta = { title: 'Datum/Components/Avatar', component: DatumAvatar, tags: ['autodocs'], args: { initials: 'JS', size: 'medium', shape: 'circle', status: 'online' }, argTypes: { size: { control: 'inline-radio', options: Object.keys(sizes) }, shape: { control: 'inline-radio', options: ['circle', 'square'] }, status: { control: 'select', options: Object.keys(statuses) } } } satisfies Meta<typeof DatumAvatar>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const Team: Story = { render: () => <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>{(['online', 'away', 'busy', 'offline'] as const).map((status, i) => <DatumAvatar key={status} initials={['JS', 'AB', 'CM', 'DR'][i]} size="large" shape="circle" status={status} />)}</div> }
