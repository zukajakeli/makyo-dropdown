# React Dropdown Component

A modern, accessible dropdown component built with React and TypeScript.

## Features

- ✅ **Single & Multiple Selection**: Support for both selection modes
- ✅ **Search Functionality**: Built-in search with customizable placeholder
- ✅ **Keyboard Navigation**: Full keyboard support (Arrow keys, Enter, Escape, Tab)
- ✅ **Icons & Descriptions**: Rich option content support
- ✅ **Loading States**: Built-in loading indicators
- ✅ **Portal Support**: Render dropdown in portal for z-index compatibility
- ✅ **Accessibility**: ARIA attributes and keyboard navigation
- ✅ **TypeScript**: Full type safety
- ✅ **Customizable**: Flexible styling options

## Installation

```bash
npm install makyo-dropdown
```

## Basic Usage

```tsx
import { Dropdown } from 'makyo-dropdown';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

function App() {
  const [value, setValue] = useState();

  return (
    <Dropdown
      options={options}
      value={value}
      onChange={setValue}
      placeholder='Select fruit...'
    />
  );
}
```

## Multiple Selection

```tsx
<Dropdown
  options={options}
  value={selectedValues}
  onChange={setSelectedValues}
  multiple={true}
  placeholder='Select multiple...'
/>
```

## Searchable Dropdown

```tsx
<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  searchable={true}
  searchPlaceholder='Search options...'
  placeholder='Select option...'
/>
```

## With Icons

```tsx
const optionsWithIcons = [
  { value: 'home', label: 'Home', icon: <HomeIcon /> },
  { value: 'settings', label: 'Settings', icon: <SettingsIcon /> },
];

<Dropdown
  options={optionsWithIcons}
  value={value}
  onChange={setValue}
  placeholder='Select action...'
/>;
```

## With Descriptions

```tsx
const optionsWithDescriptions = [
  {
    value: 'basic',
    label: 'Basic Plan',
    description: 'Perfect for individuals',
  },
  {
    value: 'pro',
    label: 'Pro Plan',
    description: 'Great for small teams',
  },
];

<Dropdown
  options={optionsWithDescriptions}
  value={value}
  onChange={setValue}
  placeholder='Choose plan...'
/>;
```

## Custom Styling

```tsx
<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  className='border-purple-500 rounded-xl bg-purple-50'
  placeholder='Custom styled...'
/>
```

## API Reference

### DropdownProps

| Property            | Type                                       | Default        | Description                     |
| ------------------- | ------------------------------------------ | -------------- | ------------------------------- |
| `options`           | `DropdownOption[]`                         | -              | Array of dropdown options       |
| `value`             | `string \| number \| (string \| number)[]` | -              | Current selected value(s)       |
| `onChange`          | `(value) => void`                          | -              | Callback when selection changes |
| `placeholder`       | `string`                                   | `'Select...'`  | Placeholder text                |
| `disabled`          | `boolean`                                  | `false`        | Whether dropdown is disabled    |
| `multiple`          | `boolean`                                  | `false`        | Enable multiple selection       |
| `searchable`        | `boolean`                                  | `false`        | Enable search functionality     |
| `searchPlaceholder` | `string`                                   | `'Search...'`  | Search input placeholder        |
| `usePortal`         | `boolean`                                  | `true`         | Render dropdown in portal       |
| `className`         | `string`                                   | -              | Additional CSS classes          |
| `style`             | `CSSProperties`                            | -              | Inline styles                   |
| `zIndex`            | `number`                                   | `1000`         | Z-index for dropdown menu       |
| `loading`           | `boolean`                                  | `false`        | Show loading state              |
| `loadingText`       | `string`                                   | `'Loading...'` | Loading state text              |

### DropdownOption

| Property      | Type               | Description                      |
| ------------- | ------------------ | -------------------------------- |
| `value`       | `string \| number` | Unique identifier for the option |
| `label`       | `string`           | Display text for the option      |
| `disabled`    | `boolean`          | Whether option is disabled       |
| `icon`        | `ReactNode`        | Icon to display with option      |
| `description` | `string`           | Additional description text      |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Build package
npm run build

# Run tests
npm test
```

## License

MIT
