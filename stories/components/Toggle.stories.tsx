import React from 'react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

function DatumToggle({ label = 'Enable notifications', defaultChecked = true, disabled = false }: { label?: string; defaultChecked?: boolean; disabled?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked)
  return <label style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,.8)', fontSize: 14, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1 }}>
    <input type="checkbox" checked={checked} disabled={disabled} onChange={event => setChecked(event.target.checked)} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
    <span aria-hidden="true" style={{ width: 44, height: 24, borderRadius: 999, background: checked ? '#E72757' : 'rgba(255,255,255,.16)', position: 'relative', transition: 'background .15s' }}>
      <span style={{ position: 'absolute', top: 3, left: checked ? 23 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left .15s' }} />
    </span>{label}
  </label>
}
const meta = { title: 'Datum/Components/Toggle', component: DatumToggle, tags: ['autodocs'], args: { label: 'Enable notifications', defaultChecked: true, disabled: false } } satisfies Meta<typeof DatumToggle>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const Disabled: Story = { args: { disabled: true } }
