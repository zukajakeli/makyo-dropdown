import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from '../components/Dropdown';
import { DropdownOption } from '../types';

const mockOptions: DropdownOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

describe('Dropdown', () => {
  const defaultProps = {
    options: mockOptions,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with placeholder', () => {
    render(<Dropdown {...defaultProps} placeholder='Select fruit' />);
    expect(screen.getByText('Select fruit')).toBeInTheDocument();
  });

  test('opens dropdown when clicked', () => {
    render(<Dropdown {...defaultProps} />);
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  test('selects option when clicked', () => {
    const onChange = jest.fn();
    render(<Dropdown {...defaultProps} onChange={onChange} />);

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const option = screen.getByText('Apple');
    fireEvent.click(option);

    expect(onChange).toHaveBeenCalledWith('apple');
  });

  test('supports multiple selection', () => {
    const onChange = jest.fn();
    render(<Dropdown {...defaultProps} onChange={onChange} multiple />);

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const option1 = screen.getByText('Apple');
    const option2 = screen.getByText('Banana');

    fireEvent.click(option1);
    expect(onChange).toHaveBeenCalledWith(['apple']);

    fireEvent.click(option2);
    expect(onChange).toHaveBeenCalledWith(['apple', 'banana']);
  });

  test('shows search input when searchable', () => {
    render(<Dropdown {...defaultProps} searchable />);

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  test('filters options when searching', () => {
    render(<Dropdown {...defaultProps} searchable />);

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'app' } });

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Banana')).not.toBeInTheDocument();
    expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
  });

  test('shows no results message when no options match search', () => {
    render(<Dropdown {...defaultProps} searchable />);

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'xyz' } });

    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  test('closes dropdown when clicking outside', () => {
    render(
      <div>
        <Dropdown {...defaultProps} />
        <div data-testid='outside'>Outside element</div>
      </div>
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    expect(screen.getByText('Apple')).toBeInTheDocument();

    const outside = screen.getByTestId('outside');
    fireEvent.mouseDown(outside);

    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
  });

  test('supports keyboard navigation', () => {
    const onChange = jest.fn();
    render(<Dropdown {...defaultProps} onChange={onChange} />);

    const trigger = screen.getByRole('button');

    // Open with Enter
    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(screen.getByText('Apple')).toBeInTheDocument();

    // Navigate down and select
    fireEvent.keyDown(trigger, { key: 'ArrowDown' });
    fireEvent.keyDown(trigger, { key: 'Enter' });

    expect(onChange).toHaveBeenCalledWith('apple');
  });

  test('renders with custom className', () => {
    const { container } = render(
      <Dropdown {...defaultProps} className='custom-dropdown' />
    );

    expect(container.firstChild).toHaveClass('custom-dropdown');
  });

  test('shows loading state', () => {
    render(
      <Dropdown {...defaultProps} loading loadingText='Loading data...' />
    );

    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });

  test('disables dropdown when disabled prop is true', () => {
    render(<Dropdown {...defaultProps} disabled />);

    const trigger = screen.getByRole('button');
    expect(trigger).toBeDisabled();
  });
});
