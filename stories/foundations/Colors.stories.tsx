import type { Meta, StoryObj } from '@storybook/react'

const palettes: Record<string, string[]> = {
  Crimson: ['#400C19', '#5A1123', '#73162E', '#A72042', '#E72757', '#E16181', '#E98CA3', '#F1B6C5', '#F5CCD6', '#F9E1E7'],
  'Selection Blue': ['#042C4E', '#06406F', '#07518D', '#0A72C7', '#1B92F3', '#55AEF6', '#86C5F9', '#B6DCFB', '#CFE8FC', '#E7F3FE'],
  Grey: ['#000000', '#272727', '#343434', '#4E4E4E', '#686868', '#828282', '#9B9B9B', '#DADADA', '#F3F3F3', '#FFFFFF'],
  Orange: ['#48260A', '#703B0F', '#8D4307', '#C75F0A', '#F37C1B', '#F69E55', '#F9BA86', '#FBD5B6', '#F9E4D2', '#FEF1E7'],
  Yellow: ['#454E04', '#636F06', '#7D8D07', '#B1C70A', '#D1E727', '#E3F655', '#EBF986', '#F3FBB6', '#F7FCCF', '#FAFCE9'],
  Teal: ['#044E3E', '#066F59', '#078D70', '#0AC79E', '#1BF3C4', '#55F6D3', '#86F9E0', '#B6FBEC', '#CFFCF3', '#E7FEF9'],
  Green: ['#044E0D', '#066F12', '#078D17', '#0AC720', '#1BF334', '#55F668', '#86F993', '#B6FBBE', '#CFFCD4', '#E7FEE9'],
  Blue: ['#04144E', '#061D6F', '#07248D', '#0A33C7', '#1B4AF3', '#5578F6', '#869FF9', '#B6C5FB', '#CFD8FC', '#E7ECFE'],
  Red: ['#4E0414', '#6F061D', '#8D0724', '#C70A33', '#F31B4A', '#F65578', '#F9869F', '#FBB6C5', '#FCCFD8', '#FEE7EC'],
}
function ColorFoundations() {
  return <div style={{ width: '100%', maxWidth: 900, display: 'grid', gap: 28 }}>
    {Object.entries(palettes).map(([name, colors]) => <section key={name}>
      <h3 style={{ color: '#fff', fontSize: 16, marginBottom: 12 }}>{name}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(64px, 1fr))', gap: 8 }}>
        {colors.map((color, index) => <div key={color} style={{ minWidth: 0 }}>
          <button onClick={() => navigator.clipboard?.writeText(color)} title={`Copy ${color}`} style={{ display: 'block', width: '100%', height: 52, borderRadius: 7, border: '1px solid rgba(255,255,255,.1)', background: color, cursor: 'copy' }} />
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.45)', marginTop: 6, fontFamily: 'var(--font-family-mono)' }}>{index === 4 ? '500' : index < 4 ? String((9-index)*100) : String((9-index)*100)} · {color}</div>
        </div>)}
      </div>
    </section>)}
  </div>
}
const meta = { title: 'Datum/Foundations/Colors', component: ColorFoundations, parameters: { layout: 'padded' }, tags: ['autodocs'] } satisfies Meta<typeof ColorFoundations>
export default meta
type Story = StoryObj<typeof meta>
export const Palettes: Story = {}
