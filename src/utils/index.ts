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

  // Calculate position relative to viewport (for fixed positioning)
  let top = openUpward
    ? triggerRect.top - menuHeight - offset
    : triggerRect.bottom + offset;

  let left = triggerRect.left;

  // Adjust horizontal position to stay within viewport
  if (left + menuWidth > viewportWidth - 8) {
    left = Math.max(8, viewportWidth - menuWidth - 8);
  }
  if (left < 8) {
    left = 8;
  }

  // Adjust vertical position to stay within viewport
  if (top + menuHeight > viewportHeight - 8) {
    top = Math.max(8, viewportHeight - menuHeight - 8);
  }
  if (top < 8) {
    top = 8;
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
