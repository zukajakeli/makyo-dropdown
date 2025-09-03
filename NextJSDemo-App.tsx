'use client';

import React, { useState } from 'react';
import { Dropdown } from 'makyo-dropdown';
import type { DropdownOption } from 'makyo-dropdown';

const App: React.FC = () => {
  // Sample data
  const basicOptions: DropdownOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' },
  ];

  const countryOptions: DropdownOption[] = [
    { value: 'us', label: 'United States', icon: <span>🇺🇸</span> },
    { value: 'uk', label: 'United Kingdom', icon: <span>🇬🇧</span> },
    { value: 'ca', label: 'Canada', icon: <span>🇨🇦</span> },
    { value: 'de', label: 'Germany', icon: <span>🇩🇪</span> },
    { value: 'fr', label: 'France', icon: <span>🇫🇷</span> },
    { value: 'jp', label: 'Japan', icon: <span>🇯🇵</span> },
    { value: 'au', label: 'Australia', icon: <span>🇦🇺</span> },
  ];

  const categoryOptions: DropdownOption[] = Array.from(
    { length: 100 },
    (_, i) => ({
      value: `category-${i + 1}`,
      label: `Category ${i + 1}`,
      description: `Description for category ${i + 1}`,
    })
  );

  const actionOptions: DropdownOption[] = [
    {
      value: 'edit',
      label: 'Edit',
      icon: <span>✏️</span>,
      description: 'Edit this item',
    },
    {
      value: 'delete',
      label: 'Delete',
      icon: <span>🗑️</span>,
      description: 'Delete this item',
    },
    {
      value: 'share',
      label: 'Share',
      icon: <span>📤</span>,
      description: 'Share with others',
    },
    {
      value: 'archive',
      label: 'Archive',
      icon: <span>📁</span>,
      description: 'Move to archive',
    },
  ];

  // State for each dropdown
  const [basicValue, setBasicValue] = useState<string | number | undefined>(
    undefined
  );
  const [countryValue, setCountryValue] = useState<string | number | undefined>(
    undefined
  );
  const [multipleValue, setMultipleValue] = useState<(string | number)[]>([]);
  const [searchableValue, setSearchableValue] = useState<
    string | number | undefined
  >(undefined);
  const [portalValue, setPortalValue] = useState<string | number | undefined>(
    undefined
  );
  const [loadingValue, setLoadingValue] = useState<string | number | undefined>(
    undefined
  );
  const [disabledValue, setDisabledValue] = useState<
    string | number | undefined
  >(undefined);
  const [actionValue, setActionValue] = useState<string | number | undefined>(
    undefined
  );

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Makyo Dropdown Component Demo
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            A comprehensive showcase of the Makyo Dropdown component with
            various configurations and use cases. Interactive, accessible, and
            fully customizable.
          </p>
          <div className='mt-6'>
            <a
              href='https://zukajakeli.github.io/makyo-dropdown/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors'>
              📖 View Documentation
            </a>
          </div>
        </div>

        {/* Demo Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {/* Basic Dropdown */}
          <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <div className='w-3 h-3 bg-green-500 rounded-full mr-3'></div>
              <h2 className='text-xl font-semibold text-gray-900'>
                Basic Dropdown
              </h2>
            </div>
            <p className='text-gray-600 mb-4'>
              Simple single-selection dropdown with fruit options.
            </p>
            <Dropdown
              options={basicOptions}
              value={basicValue}
              onChange={(value) => setBasicValue(value as string | number)}
              placeholder='Select a fruit...'
              className='mb-3'
            />
            <div className='text-sm text-gray-500'>
              <strong>Selected:</strong>{' '}
              {basicValue ? String(basicValue) : 'None'}
            </div>
          </div>

          {/* With Icons */}
          <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <div className='w-3 h-3 bg-blue-500 rounded-full mr-3'></div>
              <h2 className='text-xl font-semibold text-gray-900'>
                With Icons
              </h2>
            </div>
            <p className='text-gray-600 mb-4'>
              Dropdown with country flags and labels.
            </p>
            <Dropdown
              options={countryOptions}
              value={countryValue}
              onChange={(value) => setCountryValue(value as string | number)}
              placeholder='Select a country...'
              className='mb-3'
            />
            <div className='text-sm text-gray-500'>
              <strong>Selected:</strong>{' '}
              {countryValue ? String(countryValue) : 'None'}
            </div>
          </div>

          {/* Multiple Selection */}
          <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <div className='w-3 h-3 bg-purple-500 rounded-full mr-3'></div>
              <h2 className='text-xl font-semibold text-gray-900'>
                Multiple Selection
              </h2>
            </div>
            <p className='text-gray-600 mb-4'>
              Select multiple fruits at once.
            </p>
            <Dropdown
              options={basicOptions}
              value={multipleValue}
              onChange={(value) =>
                setMultipleValue(value as (string | number)[])
              }
              placeholder='Select multiple fruits...'
              multiple={true}
              className='mb-3'
            />
            <div className='text-sm text-gray-500'>
              <strong>Selected:</strong>{' '}
              {multipleValue.length > 0 ? multipleValue.join(', ') : 'None'}
            </div>
          </div>

          {/* Searchable */}
          <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <div className='w-3 h-3 bg-yellow-500 rounded-full mr-3'></div>
              <h2 className='text-xl font-semibold text-gray-900'>
                Searchable
              </h2>
            </div>
            <p className='text-gray-600 mb-4'>
              Search through 100 categories with filtering.
            </p>
            <Dropdown
              options={categoryOptions}
              value={searchableValue}
              onChange={(value) => setSearchableValue(value as string | number)}
              placeholder='Search categories...'
              searchable={true}
              searchPlaceholder='Type to search...'
              className='mb-3'
            />
            <div className='text-sm text-gray-500'>
              <strong>Selected:</strong>{' '}
              {searchableValue ? String(searchableValue) : 'None'}
            </div>
          </div>

          {/* Portal Mode */}
          <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <div className='w-3 h-3 bg-red-500 rounded-full mr-3'></div>
              <h2 className='text-xl font-semibold text-gray-900'>
                Portal Mode
              </h2>
            </div>
            <p className='text-gray-600 mb-4'>
              Dropdown rendered in a portal to avoid z-index issues.
            </p>
            <div className='relative'>
              <div className='absolute inset-0 bg-red-500 opacity-20 z-50 pointer-events-none p-2 rounded'>
                <span className='text-red-900 text-xs font-semibold'>
                  High z-index overlay
                </span>
              </div>
              <div className='relative z-10 bg-white p-2 rounded'>
                <Dropdown
                  options={basicOptions}
                  value={portalValue}
                  onChange={(value) => setPortalValue(value as string | number)}
                  placeholder='Portal dropdown...'
                  usePortal={true}
                  className='mb-3'
                />
              </div>
            </div>
            <div className='text-sm text-gray-500'>
              <strong>Selected:</strong>{' '}
              {portalValue ? String(portalValue) : 'None'}
            </div>
          </div>

          {/* Loading State */}
          <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <div className='w-3 h-3 bg-orange-500 rounded-full mr-3'></div>
              <h2 className='text-xl font-semibold text-gray-900'>
                Loading State
              </h2>
            </div>
            <p className='text-gray-600 mb-4'>
              Dropdown showing loading indicator.
            </p>
            <Dropdown
              options={basicOptions}
              value={loadingValue}
              onChange={(value) => setLoadingValue(value as string | number)}
              placeholder='Loading options...'
              loading={true}
              loadingText='Loading data...'
              className='mb-3'
            />
            <div className='text-sm text-gray-500'>
              <strong>Selected:</strong>{' '}
              {loadingValue ? String(loadingValue) : 'None'}
            </div>
          </div>

          {/* Disabled State */}
          <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <div className='w-3 h-3 bg-gray-400 rounded-full mr-3'></div>
              <h2 className='text-xl font-semibold text-gray-900'>
                Disabled State
              </h2>
            </div>
            <p className='text-gray-600 mb-4'>Dropdown in disabled state.</p>
            <Dropdown
              options={basicOptions}
              value={disabledValue}
              onChange={(value) => setDisabledValue(value as string | number)}
              placeholder='Disabled dropdown...'
              disabled={true}
              className='mb-3'
            />
            <div className='text-sm text-gray-500'>
              <strong>Status:</strong> Disabled
            </div>
          </div>

          {/* With Descriptions */}
          <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <div className='w-3 h-3 bg-teal-500 rounded-full mr-3'></div>
              <h2 className='text-xl font-semibold text-gray-900'>
                With Descriptions
              </h2>
            </div>
            <p className='text-gray-600 mb-4'>
              Actions with icons and descriptions.
            </p>
            <Dropdown
              options={actionOptions}
              value={actionValue}
              onChange={(value) => setActionValue(value as string | number)}
              placeholder='Choose an action...'
              className='mb-3'
            />
            <div className='text-sm text-gray-500'>
              <strong>Selected:</strong>{' '}
              {actionValue ? String(actionValue) : 'None'}
            </div>
          </div>

          {/* Custom Styling */}
          <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <div className='w-3 h-3 bg-pink-500 rounded-full mr-3'></div>
              <h2 className='text-xl font-semibold text-gray-900'>
                Custom Styling
              </h2>
            </div>
            <p className='text-gray-600 mb-4'>
              Dropdown with custom CSS classes.
            </p>
            <Dropdown
              options={basicOptions}
              value={basicValue}
              onChange={(value) => setBasicValue(value as string | number)}
              placeholder='Custom styled dropdown...'
              className='mb-3 border-2 border-pink-300 rounded-lg focus-within:border-pink-500'
              style={{ backgroundColor: '#fef7ff' }}
            />
            <div className='text-sm text-gray-500'>
              <strong>Selected:</strong>{' '}
              {basicValue ? String(basicValue) : 'None'}
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        <div className='mt-16 bg-gray-900 rounded-xl p-8 text-white'>
          <h2 className='text-2xl font-bold mb-4'>Installation & Usage</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-lg font-semibold mb-3 text-green-400'>
                Install
              </h3>
              <div className='bg-gray-800 rounded-lg p-4 font-mono text-sm'>
                npm install makyo-dropdown
              </div>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-3 text-blue-400'>
                Import
              </h3>
              <div className='bg-gray-800 rounded-lg p-4 font-mono text-sm'>
                {`import { Dropdown } from 'makyo-dropdown';`}
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <h3 className='text-lg font-semibold mb-3 text-yellow-400'>
              Basic Usage
            </h3>
            <div className='bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              {`const [value, setValue] = useState();

<Dropdown
  options={[
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' }
  ]}
  value={value}
  onChange={setValue}
  placeholder="Select fruit..."
/>`}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-12 text-center'>
          <p className='text-gray-600'>
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
          <div className='mt-4 space-x-6'>
            <a
              href='https://github.com/zukajakeli/makyo-dropdown'
              target='_blank'
              rel='noopener noreferrer'
              className='text-indigo-600 hover:text-indigo-800 font-medium'>
              GitHub Repository
            </a>
            <a
              href='https://zukajakeli.github.io/makyo-dropdown/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-indigo-600 hover:text-indigo-800 font-medium'>
              Storybook Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
