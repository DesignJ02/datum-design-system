import React from 'react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

type InputProps = {
  label: string
  placeholder: string
  helperText: string
  state: 'default' | 'focus' | 'error' | 'disabled'
  type: 'text' | 'number' | 'password' | 'email'
}
function DatumInput({ label, placeholder, helperText, state, type }: InputProps) {
  const [value, setValue] = useState('')
  const isError = state === 'error'
  return <div style={{ width: 320, fontFamily: 'var(--font-family-primary)' }}>
    <label style={{ display: 'block', fontSize: 12, color: isError ? '#F65578' : 'rgba(255,255,255,.7)', marginBottom: 6 }}>{label}</label>
    <input type={type} value={value} placeholder={placeholder} disabled={state === 'disabled'}
      onChange={event => setValue(event.target.value)}
      style={{
        boxSizing: 'border-box', width: '100%', background: state === 'disabled' ? 'rgba(255,255,255,.03)' : 'rgba(255,255,255,.06)',
        border: `1.5px solid ${isError ? '#C70A33' : state === 'focus' ? '#fff' : 'rgba(255,255,255,.12)'}`,
        borderRadius: 8, padding: '10px 14px', color: state === 'disabled' ? 'rgba(255,255,255,.25)' : '#fff',
        fontSize: 14, outline: 'none', boxShadow: state === 'focus' ? '0 0 0 3px rgba(255,255,255,.05)' : isError ? '0 0 0 3px rgba(199,10,51,.15)' : 'none',
      }} />
    {helperText && <p style={{ fontSize: 11, marginTop: 6, color: isError ? '#F65578' : 'rgba(255,255,255,.35)' }}>{isError ? 'Please check this field.' : helperText}</p>}
  </div>
}
const meta = {
  title: 'Datum/Components/Input',
  component: DatumInput,
  tags: ['autodocs'],
  args: { label: 'Email address', placeholder: 'you@example.com', helperText: 'We will never share your email.', state: 'default', type: 'email' },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'focus', 'error', 'disabled'] },
    type: { control: 'select', options: ['text', 'number', 'password', 'email'] },
  },
} satisfies Meta<typeof DatumInput>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const States: Story = {
  render: () => <div style={{ display: 'grid', gap: 24 }}>
    {(['default', 'focus', 'error', 'disabled'] as const).map(state => <DatumInput key={state} label={state[0].toUpperCase() + state.slice(1)} placeholder="Enter value..." helperText="Supporting text for this field." type="text" state={state} />)}
  </div>,
}
