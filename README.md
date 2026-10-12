# Datum Design System

Datum is a dark-first design system documented in Next.js, with Storybook stories for browsing foundations and testing component states.

## Run the existing website

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Run Storybook

Install dependencies after checking out the Storybook branch:

```bash
npm install
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006).

Build the static Storybook documentation:

```bash
npm run build-storybook
```

The generated static site is written to `storybook-static/`. Deploy that directory with a static hosting provider, or use it as the build artifact for your preferred Storybook hosting workflow.

## Storybook contents

- **Introduction** — how Datum is structured and how to navigate the library.
- **Foundations / Colors** — primitive palette swatches with click-to-copy hex values.
- **Foundations / Tokens** — selected typography, spacing, radius, and elevation tokens.
- **Components** — controls and previews for Button, Input, Avatar, Checkbox, Radio Button, Toggle, Tag & Badge, Tooltip, and Empty State.

The stories are isolated previews based on Datum's current documented behavior and visual tokens. They do not replace the existing Next.js component documentation pages.
