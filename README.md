# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with the following features:
- HMR (Hot Module Replacement)
- Storybook for component development and documentation
- TailwindCSS for styling
- shadcn/ui component library
- Dark mode support
- RTL (Right-to-Left) layout toggle
- TypeScript support
- ESLint configuration

## Available Plugins and Libraries

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Storybook

This project uses Storybook for component development and documentation. To start Storybook:

```bash
npm run storybook
```

## Styling and Components

### TailwindCSS
The project is configured with TailwindCSS for utility-first CSS. Configuration can be found in `tailwind.config.js`.

### shadcn/ui
We use shadcn/ui for beautifully designed components. Components can be added using:

```bash
npx shadcn-ui add [component-name]
```

## Theming

### Dark Mode
Dark mode is implemented using TailwindCSS. Toggle using the theme switcher in the navigation.

### RTL Support
RTL layout support is included for right-to-left languages. Toggle direction using the RTL switcher.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
