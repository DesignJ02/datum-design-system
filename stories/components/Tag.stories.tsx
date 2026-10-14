import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const variants = ['brand', 'success', 'error', 'warning', 'default'] as const
type Variant = typeof variants[number]
const palette: Record<Variant, { bg: string; fg: string }> = {
  brand: { bg: 'rgba(231,39,87,.16)', fg: '#E72757' },
  success: { bg: 'rgba(10,199,32,.16)', fg: '#55F668' },
  error: { bg: 'rgba(199,10,51,.18)', fg: '#F65578' },
  warning: { bg: 'rgba(209,231,39,.15)', fg: '#D1E727' },
  default: { bg: 'rgba(255,255,255,.08)', fg: 'rgba(255,255,255,.7)' },
}
function DatumTag({ label, variant }: { label: string; variant: Variant }) {
  const color = palette[variant]
  return <span style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 9999, padding: '4px 12px', background: color.bg, color: color.fg, fontSize: 12, fontWeight: 500, fontFamily: 'var(--font-family-primary)' }}>{label}</span>
}
const meta = { title: 'Datum/Components/Tag & Badge', component: DatumTag, tags: ['autodocs'], args: { label: 'In progress', variant: 'brand' }, argTypes: { variant: { control: 'inline-radio', options: variants } } } satisfies Meta<typeof DatumTag>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const SemanticVariants: Story = { render: () => <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{variants.map(variant => <DatumTag key={variant} label={variant} variant={variant} />)}</div> }
