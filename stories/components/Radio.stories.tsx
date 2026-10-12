import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

function RadioGroup({ options = ['Option A', 'Option B', 'Option C'], disabled = false }: { options?: string[]; disabled?: boolean }) {
  const [selected, setSelected] = useState(options[0])
  return <fieldset style={{ border: 0, padding: 0, display: 'grid', gap: 12, color: 'rgba(255,255,255,.8)', fontSize: 13, fontFamily: 'var(--font-family-primary)' }}>
    <legend style={{ marginBottom: 14, color: '#fff', fontWeight: 600 }}>Choose an option</legend>
    {options.map(option => <label key={option} style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: disabled ? .45 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <input type="radio" name="datum-radio" value={option} checked={selected === option} disabled={disabled} onChange={() => setSelected(option)} style={{ width: 18, height: 18, accentColor: '#E72757' }} />
      {option}
    </label>)}
  </fieldset>
}
const meta = { title: 'Datum/Components/Radio Button', component: RadioGroup, tags: ['autodocs'], args: { options: ['Starter', 'Growth', 'Enterprise'], disabled: false } } satisfies Meta<typeof RadioGroup>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const Disabled: Story = { args: { disabled: true } }
