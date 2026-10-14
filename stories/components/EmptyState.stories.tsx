import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

type Props = { title: string; description: string; actionLabel: string; tone: 'brand' | 'neutral' | 'success' }
const tones = { brand: '#E72757', neutral: '#1B92F3', success: '#0AC720' }
function DatumEmptyState({ title, description, actionLabel, tone }: Props) {
  return <section style={{ width: 320, textAlign: 'center', border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.025)', padding: 28, borderRadius: 12, fontFamily: 'var(--font-family-primary)' }}>
    <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: '50%', background: `${tones[tone]}22`, margin: '0 auto 16px', display: 'grid', placeItems: 'center', color: tones[tone], fontSize: 20 }}>↗</div>
    <h3 style={{ color: '#fff', fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{title}</h3>
    <p style={{ color: 'rgba(255,255,255,.48)', fontSize: 12, lineHeight: 1.6, marginBottom: 18 }}>{description}</p>
    <button style={{ border: 0, borderRadius: 8, background: tones[tone], color: '#fff', padding: '9px 14px', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>{actionLabel}</button>
  </section>
}
const meta = { title: 'Datum/Components/Empty State', component: DatumEmptyState, tags: ['autodocs'], args: { title: 'No files yet', description: 'Upload your first file to get started.', actionLabel: 'Upload file', tone: 'brand' }, argTypes: { tone: { control: 'inline-radio', options: ['brand', 'neutral', 'success'] } } } satisfies Meta<typeof DatumEmptyState>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const NoResults: Story = { args: { title: 'No results found', description: 'Try adjusting your search or filters.', actionLabel: 'Clear filters', tone: 'neutral' } }
