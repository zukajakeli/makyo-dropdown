import { DropdownOption, Position } from '../types';
export declare const filterOptions: (options: DropdownOption[], searchTerm: string) => DropdownOption[];
export declare const getSelectedOptions: (options: DropdownOption[], value: string | number | (string | number)[] | undefined) => DropdownOption[];
export declare const calculatePosition: (triggerElement: HTMLElement, menuElement: HTMLElement, offset: number) => Position;
export declare const getNextFocusIndex: (currentIndex: number, optionsLength: number, direction: "up" | "down") => number;
export declare const scrollIntoView: (element: HTMLElement, container: HTMLElement) => void;
