import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

function TooltipPreview({ message = 'Helpful contextual information', theme = 'dark', placement = 'top' }: { message?: string; theme?: 'dark' | 'light'; placement?: 'top' | 'bottom' | 'left' | 'right' }) {
  const [visible, setVisible] = useState(false)
  const light = theme === 'light'
  const tip = visible ? <span role="tooltip" style={{ position: 'absolute', whiteSpace: 'nowrap', zIndex: 1, background: light ? '#fff' : '#202020', color: light ? '#111' : '#fff', border: light ? '1px solid #ddd' : '1px solid rgba(255,255,255,.12)', borderRadius: 7, padding: '7px 10px', fontSize: 11, boxShadow: '0 8px 20px rgba(0,0,0,.22)', ...(placement === 'top' ? { bottom: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' } : placement === 'bottom' ? { top: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' } : placement === 'left' ? { right: 'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)' } : { left: 'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)' }) }}>{message}</span> : null
  return <div style={{ minWidth: 300, minHeight: 140, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 28, overflow: 'visible' }}>
    <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} onFocus={() => setVisible(true)} onBlur={() => setVisible(false)} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: 8, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', color: '#fff' }} aria-label={message} tabIndex={0}>
      i{tip}
    </div>
  </div>
}
const meta = { title: 'Datum/Components/Tooltip', component: TooltipPreview, tags: ['autodocs'], args: { message: 'Helpful contextual information', theme: 'dark', placement: 'top' }, argTypes: { theme: { control: 'inline-radio', options: ['dark', 'light'] }, placement: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] } } } satisfies Meta<typeof TooltipPreview>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const Placements: Story = { render: () => <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>{(['top', 'bottom', 'left', 'right'] as const).map(placement => <TooltipPreview key={placement} placement={placement} theme="dark" message={placement} />)}</div> }
