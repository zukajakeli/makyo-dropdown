import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { DropdownProps, DropdownOption, Position } from '../types';
import {
  filterOptions,
  getSelectedOptions,
  calculatePosition,
  getNextFocusIndex,
  scrollIntoView,
} from '../utils';
import '../styles/globals.css';

const ChevronDownIcon = () => (
  <svg
    className='w-4 h-4'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M19 9l-7 7-7-7'
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    className='w-4 h-4'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className='w-4 h-4'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M5 13l4 4L19 7'
    />
  </svg>
);

const SmallXIcon = () => (
  <svg
    className='w-3 h-3'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
);

const LoadingIcon = () => (
  <svg className='w-4 h-4 animate-spin' fill='none' viewBox='0 0 24 24'>
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    />
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    />
  </svg>
);

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  disabled = false,
  multiple = false,
  searchable = false,
  searchPlaceholder = 'Search...',
  usePortal = true,
  className,
  style,
  zIndex = 1000,
  loading = false,
  loadingText = 'Loading...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [menuPosition, setMenuPosition] = useState<Position>({
    top: 0,
    left: 0,
    width: 0,
  });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const selectedOptions = getSelectedOptions(options, value);
  const filteredOptions = filterOptions(options, searchTerm, false);

  const updatePosition = useCallback(() => {
    if (triggerRef.current && menuRef.current && isOpen && usePortal) {
      const newPosition = calculatePosition(
        triggerRef.current,
        menuRef.current,
        4
      );
      setMenuPosition(newPosition);
    }
  }, [isOpen, usePortal]);

  useEffect(() => {
    if (isOpen && usePortal) {
      // Set initial position
      requestAnimationFrame(updatePosition);

      // Only update on resize, not on scroll to prevent jumping
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isOpen, usePortal, updatePosition]);

  useEffect(() => {
    if (isOpen && searchable && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleOpen = useCallback(() => {
    if (disabled) return;
    setIsOpen(true);
    setFocusedIndex(-1);
  }, [disabled]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setSearchTerm('');
    setFocusedIndex(-1);
  }, []);

  const handleToggle = useCallback(() => {
    isOpen ? handleClose() : handleOpen();
  }, [isOpen, handleOpen, handleClose]);

  const handleOptionSelect = useCallback(
    (option: DropdownOption) => {
      if (option.disabled) return;

      if (multiple) {
        const currentValues = Array.isArray(value)
          ? value
          : value
          ? [value]
          : [];
        const newValues = currentValues.includes(option.value)
          ? currentValues.filter((v) => v !== option.value)
          : [...currentValues, option.value];
        onChange(newValues);
      } else {
        onChange(option.value);
        handleClose();
      }
    },
    [multiple, value, onChange, handleClose]
  );

  const handleRemoveOption = useCallback(
    (optionValue: string | number, e: React.MouseEvent) => {
      e.stopPropagation();
      if (multiple && Array.isArray(value)) {
        const newValues = value.filter((v) => v !== optionValue);
        onChange(newValues);
      }
    },
    [multiple, value, onChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          if (!isOpen) {
            e.preventDefault();
            handleOpen();
          } else if (
            focusedIndex >= 0 &&
            focusedIndex < filteredOptions.length
          ) {
            e.preventDefault();
            handleOptionSelect(filteredOptions[focusedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          handleClose();
          triggerRef.current?.focus();
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (!isOpen) {
            handleOpen();
          } else {
            const nextIndex = getNextFocusIndex(
              focusedIndex,
              filteredOptions.length,
              'down'
            );
            setFocusedIndex(nextIndex);
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (isOpen) {
            const nextIndex = getNextFocusIndex(
              focusedIndex,
              filteredOptions.length,
              'up'
            );
            setFocusedIndex(nextIndex);
          }
          break;
        case 'Tab':
          if (isOpen) handleClose();
          break;
      }
    },
    [
      isOpen,
      focusedIndex,
      filteredOptions,
      handleOpen,
      handleClose,
      handleOptionSelect,
    ]
  );

  useEffect(() => {
    if (
      focusedIndex >= 0 &&
      optionRefs.current[focusedIndex] &&
      menuRef.current
    ) {
      scrollIntoView(optionRefs.current[focusedIndex]!, menuRef.current);
    }
  }, [focusedIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        triggerRef.current &&
        menuRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, handleClose]);

  const renderSelectedValues = () => {
    if (loading) {
      return (
        <div className='flex items-center space-x-2'>
          <LoadingIcon />
          <span className='text-gray-600'>{loadingText}</span>
        </div>
      );
    }

    if (selectedOptions.length === 0) {
      return <span className='text-gray-500'>{placeholder}</span>;
    }

    if (multiple && selectedOptions.length > 1) {
      return (
        <div className='flex flex-wrap gap-1'>
          {selectedOptions.map((option) => (
            <span
              key={option.value}
              className='inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full'>
              {option.icon && <span className='mr-1'>{option.icon}</span>}
              {option.label}
              <button
                type='button'
                onClick={(e) => handleRemoveOption(option.value, e)}
                className='ml-1 p-0.5 rounded-full border border-gray-300 hover:border-gray-400 focus:outline-none transition-colors'>
                <SmallXIcon />
              </button>
            </span>
          ))}
        </div>
      );
    }

    const option = selectedOptions[0];
    return (
      <div className='flex items-center'>
        {option.icon && <span className='mr-2'>{option.icon}</span>}
        <span>{option.label}</span>
      </div>
    );
  };

  const renderSingleOption = (option: DropdownOption, index: number) => {
    const isSelected = selectedOptions.some(
      (selected) => selected.value === option.value
    );
    const isFocused = index === focusedIndex;

    return (
      <div
        key={option.value}
        ref={(el) => (optionRefs.current[index] = el)}
        className={clsx(
          'px-3 py-2 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-gray-900',
          {
            'bg-blue-50 text-blue-900': isFocused && !isSelected,
            'bg-blue-100 text-blue-900': isSelected && !multiple,
            'bg-green-100 text-green-900': isSelected && multiple,
            'opacity-50 cursor-not-allowed': option.disabled,
          }
        )}
        onClick={() => !option.disabled && handleOptionSelect(option)}
        onMouseEnter={() => setFocusedIndex(index)}>
        <div className='flex items-center flex-1'>
          {option.icon && <span className='mr-2'>{option.icon}</span>}
          <div>
            <div className='font-medium text-gray-900'>{option.label}</div>
            {option.description && !searchable && (
              <div className='text-sm text-gray-600'>{option.description}</div>
            )}
          </div>
        </div>
        {multiple && isSelected && <CheckIcon />}
      </div>
    );
  };

  const renderOptionsList = () => {
    if (loading) {
      return (
        <div className='px-3 py-2 text-center text-gray-600'>
          <LoadingIcon />
          <span className='ml-2'>{loadingText}</span>
        </div>
      );
    }

    if (filteredOptions.length === 0) {
      return (
        <div className='px-3 py-2 text-center text-gray-600'>
          No results found
        </div>
      );
    }

    return filteredOptions.map((option, index) =>
      renderSingleOption(option, index)
    );
  };

  const menu = (
    <div
      ref={menuRef}
      className={clsx(
        'bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden animate-scale-in text-gray-900',
        usePortal ? 'fixed' : 'absolute'
      )}
      style={
        usePortal
          ? {
              top: menuPosition.top,
              left: menuPosition.left,
              minWidth: menuPosition.width,
              zIndex,
              maxWidth: '320px',
            }
          : {
              top: '100%',
              left: 0,
              right: 0,
              zIndex,
              maxWidth: '320px',
              marginTop: '4px',
            }
      }>
      {searchable && (
        <div className='p-2 border-b border-gray-200'>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-gray-400'>
              <SearchIcon />
            </div>
            <input
              ref={searchRef}
              type='text'
              className='w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none text-gray-900 placeholder-gray-500'
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      )}
      <div className='max-h-48 overflow-y-auto dropdown-scrollbar'>
        {renderOptionsList()}
      </div>
    </div>
  );

  return (
    <div className={clsx('relative', className)} style={style}>
      <button
        ref={triggerRef}
        type='button'
        className={clsx(
          'w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none transition-colors',
          { 'cursor-not-allowed opacity-50': disabled }
        )}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup='listbox'>
        <div className='flex items-center justify-between'>
          <div className='flex-1 min-w-0'>{renderSelectedValues()}</div>
          <ChevronDownIcon />
        </div>
      </button>
      {isOpen && (usePortal ? createPortal(menu, document.body) : menu)}
    </div>
  );
};
