import React from 'react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

type Props = { label: string; disabled: boolean; defaultChecked: boolean }
function DatumCheckbox({ label, disabled, defaultChecked }: Props) {
  const [checked, setChecked] = useState(defaultChecked)
  return <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,.8)', fontSize: 13, opacity: disabled ? .45 : 1, cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-family-primary)' }}>
    <input type="checkbox" checked={checked} disabled={disabled} onChange={e => setChecked(e.target.checked)} style={{ width: 18, height: 18, accentColor: '#E72757' }} />{label}
  </label>
}
const meta = { title: 'Datum/Components/Checkbox', component: DatumCheckbox, tags: ['autodocs'], args: { label: 'Remember this choice', disabled: false, defaultChecked: false } } satisfies Meta<typeof DatumCheckbox>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const States: Story = { render: () => <div style={{ display: 'grid', gap: 16 }}><DatumCheckbox label="Unchecked" defaultChecked={false} disabled={false} /><DatumCheckbox label="Checked" defaultChecked={true} disabled={false} /><DatumCheckbox label="Disabled" defaultChecked={true} disabled={true} /></div> }
