import type { Meta, StoryObj } from '@storybook/react'

const buttonTypes = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const
const sizes = {
  small: { padding: '6px 14px', fontSize: 12, borderRadius: 6 },
  md: { padding: '10px 20px', fontSize: 14, borderRadius: 8 },
  big: { padding: '14px 28px', fontSize: 16, borderRadius: 10 },
}
const styles: Record<string, { background: string; color: string; border: string }> = {
  primary: { background: '#E72757', color: '#fff', border: 'none' },
  secondary: { background: '#1B92F3', color: '#fff', border: 'none' },
  outline: { background: 'transparent', color: '#E72757', border: '1.5px solid #A72042' },
  ghost: { background: 'transparent', color: 'rgba(255,255,255,.8)', border: 'none' },
  danger: { background: '#C70A33', color: '#fff', border: 'none' },
}
type Props = { label: string; variant: typeof buttonTypes[number]; size: keyof typeof sizes; disabled: boolean; loading: boolean }
function DatumButton({ label, variant, size, disabled, loading }: Props) {
  const color = styles[variant]
  return <button disabled={disabled || loading} style={{
    ...color, ...sizes[size], fontFamily: 'var(--font-family-primary)', fontWeight: 600,
    cursor: disabled || loading ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1,
    transition: 'opacity .15s', display: 'inline-flex', alignItems: 'center', gap: 8,
  }}>{loading && <span aria-hidden="true">◌</span>}{label}</button>
}
const meta = {
  title: 'Datum/Components/Button',
  component: DatumButton,
  tags: ['autodocs'],
  args: { label: 'Button Text', variant: 'primary', size: 'md', disabled: false, loading: false },
  argTypes: {
    variant: { control: 'inline-radio', options: buttonTypes },
    size: { control: 'inline-radio', options: Object.keys(sizes) },
  },
} satisfies Meta<typeof DatumButton>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const AllVariants: Story = {
  render: () => <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    {buttonTypes.map(variant => <DatumButton key={variant} label={variant} variant={variant} size="md" disabled={false} loading={false} />)}
  </div>,
}
export const AllSizes: Story = {
  render: () => <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
    {(Object.keys(sizes) as (keyof typeof sizes)[]).map(size => <DatumButton key={size} label={size} variant="primary" size={size} disabled={false} loading={false} />)}
  </div>,
}
export const States: Story = {
  render: () => <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    <DatumButton label="Default" variant="primary" size="md" disabled={false} loading={false} />
    <DatumButton label="Loading" variant="primary" size="md" disabled={false} loading={true} />
    <DatumButton label="Disabled" variant="primary" size="md" disabled={true} loading={false} />
  </div>,
}
