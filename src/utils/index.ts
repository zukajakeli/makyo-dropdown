import { DropdownOption, Position } from '../types';

export const filterOptions = (
  options: DropdownOption[],
  searchTerm: string
): DropdownOption[] => {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return options;

  return options.filter(
    (option) =>
      option.label.toLowerCase().includes(term) ||
      (option.description && option.description.toLowerCase().includes(term))
  );
};

export const getSelectedOptions = (
  options: DropdownOption[],
  value: string | number | (string | number)[] | undefined
): DropdownOption[] => {
  if (!value) return [];
  const values = Array.isArray(value) ? value : [value];
  return options.filter((option) => values.includes(option.value));
};

export const calculatePosition = (
  triggerElement: HTMLElement,
  menuElement: HTMLElement,
  offset: number
): Position => {
  const triggerRect = triggerElement.getBoundingClientRect();
  const menuRect = menuElement.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const spaceBelow = viewportHeight - triggerRect.bottom;
  const spaceAbove = triggerRect.top;

  let top =
    spaceBelow >= menuRect.height + offset || spaceBelow >= spaceAbove
      ? triggerRect.bottom + offset
      : triggerRect.top - menuRect.height - offset;

  let left = triggerRect.left;

  if (left + menuRect.width > viewportWidth)
    left = viewportWidth - menuRect.width - 8;
  if (left < 8) left = 8;
  if (top + menuRect.height > viewportHeight)
    top = viewportHeight - menuRect.height - 8;
  if (top < 8) top = 8;

  return {
    top: Math.max(0, top),
    left: Math.max(0, left),
    width: triggerRect.width,
  };
};

export const getNextFocusIndex = (
  currentIndex: number,
  optionsLength: number,
  direction: 'up' | 'down'
): number => {
  return direction === 'down'
    ? currentIndex < optionsLength - 1
      ? currentIndex + 1
      : 0
    : currentIndex > 0
    ? currentIndex - 1
    : optionsLength - 1;
};

export const scrollIntoView = (
  element: HTMLElement,
  container: HTMLElement
): void => {
  const elementTop = element.offsetTop;
  const elementBottom = elementTop + element.offsetHeight;
  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.offsetHeight;

  if (elementTop < containerTop) {
    container.scrollTop = elementTop;
  } else if (elementBottom > containerBottom) {
    container.scrollTop = elementBottom - container.offsetHeight;
  }
};
