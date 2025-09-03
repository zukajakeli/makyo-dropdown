import { DropdownOption, Position } from '../types';

export const filterOptions = (
  options: DropdownOption[],
  searchTerm: string,
  searchDescriptions: boolean = true
): DropdownOption[] => {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return options;

  return options.filter(
    (option) =>
      option.label.toLowerCase().includes(term) ||
      (searchDescriptions &&
        option.description &&
        option.description.toLowerCase().includes(term))
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
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  // Get menu dimensions, but use a stable fallback if not available
  const menuHeight = menuElement.offsetHeight || 200; // fallback height
  const menuWidth = Math.max(triggerRect.width, 200); // minimum width

  const spaceBelow = viewportHeight - triggerRect.bottom - offset;
  const spaceAbove = triggerRect.top - offset;

  // Determine if dropdown should open upward or downward
  const openUpward = spaceBelow < menuHeight && spaceAbove > spaceBelow;

  // Calculate position relative to viewport with scroll offset
  let top = openUpward
    ? triggerRect.top + window.scrollY - menuHeight - offset
    : triggerRect.bottom + window.scrollY + offset;

  let left = triggerRect.left + window.scrollX;

  // Adjust horizontal position to stay within viewport
  if (left + menuWidth > viewportWidth - 8) {
    left = Math.max(8, viewportWidth - menuWidth - 8) + window.scrollX;
  }
  if (left < 8 + window.scrollX) {
    left = 8 + window.scrollX;
  }

  // Adjust vertical position to stay within viewport
  if (top + menuHeight > viewportHeight + window.scrollY - 8) {
    top = Math.max(
      8 + window.scrollY,
      viewportHeight + window.scrollY - menuHeight - 8
    );
  }
  if (top < 8 + window.scrollY) {
    top = 8 + window.scrollY;
  }

  return {
    top: Math.round(top),
    left: Math.round(left),
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
