import { ReactNode, CSSProperties } from 'react';

export interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
  description?: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string | number | (string | number)[];
  onChange: (value: string | number | (string | number)[]) => void;
  placeholder?: string;
  disabled?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  usePortal?: boolean;
  className?: string;
  style?: CSSProperties;
  zIndex?: number;
  loading?: boolean;
  loadingText?: string;
}

export interface DropdownState {
  isOpen: boolean;
  searchTerm: string;
  focusedIndex: number;
  selectedValues: (string | number)[];
}

export interface Position {
  top: number;
  left: number;
  width: number;
}
