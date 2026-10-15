import type { Preview } from '@storybook/react-vite'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    layout: 'padded',
    backgrounds: {
      default: 'Datum paper',
      values: [
        { name: 'Datum paper', value: '#F8F8FA' },
        { name: 'Surface', value: '#FFFFFF' },
        { name: 'Soft grey', value: '#F3F3F3' },
        { name: 'Ink', value: '#19191F' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}
export default preview
