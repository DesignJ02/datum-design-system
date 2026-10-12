import type { Preview } from '@storybook/react-vite'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
    backgrounds: {
      default: 'Datum canvas',
      values: [
        { name: 'Datum canvas', value: '#080808' },
        { name: 'Component surface', value: '#131B2E' },
        { name: 'Light', value: '#FFFFFF' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}
export default preview
