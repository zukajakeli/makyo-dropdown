import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../src/components/Dropdown';
import { DropdownOption } from '../src/types';

const basicOptions: DropdownOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

const optionsWithIcons: DropdownOption[] = [
  { value: 'home', label: 'Home', icon: <span>🏠</span> },
  { value: 'profile', label: 'Profile', icon: <span>👤</span> },
  { value: 'settings', label: 'Settings', icon: <span>⚙️</span> },
  { value: 'logout', label: 'Logout', icon: <span>🚪</span> },
];

const optionsWithDescriptions: DropdownOption[] = [
  {
    value: 'basic',
    label: 'Basic Plan',
    description: 'Perfect for individuals',
  },
  { value: 'pro', label: 'Pro Plan', description: 'Great for small teams' },
  {
    value: 'enterprise',
    label: 'Enterprise Plan',
    description: 'For large organizations',
  },
];

const longOptionsList: DropdownOption[] = Array.from(
  { length: 100 },
  (_, i) => ({
    value: `option-${i}`,
    label: `Option ${i + 1}`,
    description: `Description for option ${i + 1}`,
  })
);

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    options: { control: false },
    value: { control: false },
    onChange: { control: false },
    multiple: { control: 'boolean' },
    searchable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    usePortal: { control: 'boolean' },
    loading: { control: 'boolean' },
    placeholder: { control: 'text' },
    searchPlaceholder: { control: 'text' },
    loadingText: { control: 'text' },
    zIndex: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState<
      string | number | (string | number)[] | undefined
    >(undefined);
    return (
      <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    options: basicOptions,
    placeholder: 'Select a fruit...',
  },
};

export const MultipleSelection: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | (string | number)[]>(
      []
    );
    return (
      <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} multiple={true} />
      </div>
    );
  },
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    multiple: true,
  },
};

export const Searchable: Story = {
  render: (args) => {
    const [value, setValue] = useState<
      string | number | (string | number)[] | undefined
    >(undefined);
    return (
      <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    options: longOptionsList,
    placeholder: 'Search for an option...',
    searchable: true,
    searchPlaceholder: 'Type to search...',
  },
};

export const WithIcons: Story = {
  render: (args) => {
    const [value, setValue] = useState<
      string | number | (string | number)[] | undefined
    >(undefined);
    return (
      <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    options: optionsWithIcons,
    placeholder: 'Select an action...',
  },
};

export const WithDescriptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<
      string | number | (string | number)[] | undefined
    >(undefined);
    return (
      <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    options: optionsWithDescriptions,
    placeholder: 'Choose a plan...',
  },
};

export const Loading: Story = {
  render: (args) => {
    const [value, setValue] = useState<
      string | number | (string | number)[] | undefined
    >(undefined);
    return (
      <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    options: [],
    placeholder: 'Loading...',
    loading: true,
    loadingText: 'Loading options...',
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState<
      string | number | (string | number)[] | undefined
    >('apple');
    return (
      <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    options: basicOptions,
    placeholder: 'Select a fruit...',
    disabled: true,
  },
};

export const CustomStyling: Story = {
  render: (args) => {
    const [value, setValue] = useState<
      string | number | (string | number)[] | undefined
    >(undefined);
    return (
      <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    options: basicOptions,
    placeholder: 'Custom styled dropdown...',
    className: 'border-purple-500 rounded-xl bg-purple-50',
  },
};

export const WithPortal: Story = {
  render: (args) => {
    const [value, setValue] = useState<
      string | number | (string | number)[] | undefined
    >(undefined);
    return (
      <div className='relative'>
        <div className='absolute inset-0 bg-blue-500 opacity-20 z-50 pointer-events-none'>
          <div className='p-4 text-blue-900 font-semibold'>
            High z-index element (z-50)
          </div>
        </div>
        <div className='w-full relative z-10 bg-white p-4 rounded border'>
          <h3 className='mb-2 font-semibold'>Dropdown with Portal</h3>
          <Dropdown {...args} value={value} onChange={setValue} />
        </div>
      </div>
    );
  },
  args: {
    options: basicOptions,
    placeholder: 'Select with portal...',
    usePortal: true,
    zIndex: 9999,
  },
};

export const AllFeatures: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | (string | number)[]>(
      []
    );
    return (
      <div className='w-full'>
        <Dropdown {...args} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    options: longOptionsList.map((opt, index) => ({
      ...opt,
      icon: index % 3 === 0 ? '🎯' : index % 3 === 1 ? '⭐' : '🚀',
    })),
    placeholder: 'All features enabled...',
    multiple: true,
    searchable: true,
    searchPlaceholder: 'Search options...',
    usePortal: true,
    zIndex: 1000,
  },
};
