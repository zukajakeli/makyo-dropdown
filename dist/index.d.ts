import React, { ReactNode, CSSProperties } from 'react';

interface DropdownOption {
    value: string | number;
    label: string;
    disabled?: boolean;
    icon?: ReactNode;
    description?: string;
}
interface DropdownProps {
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
interface DropdownState {
    isOpen: boolean;
    searchTerm: string;
    focusedIndex: number;
    selectedValues: (string | number)[];
}
interface Position {
    top: number;
    left: number;
    width: number;
}

declare const Dropdown: React.FC<DropdownProps>;

declare const filterOptions: (options: DropdownOption[], searchTerm: string) => DropdownOption[];
declare const getSelectedOptions: (options: DropdownOption[], value: string | number | (string | number)[] | undefined) => DropdownOption[];
declare const calculatePosition: (triggerElement: HTMLElement, menuElement: HTMLElement, offset: number) => Position;
declare const getNextFocusIndex: (currentIndex: number, optionsLength: number, direction: "up" | "down") => number;
declare const scrollIntoView: (element: HTMLElement, container: HTMLElement) => void;

export { Dropdown, calculatePosition, filterOptions, getNextFocusIndex, getSelectedOptions, scrollIntoView };
export type { DropdownOption, DropdownProps, DropdownState, Position };
