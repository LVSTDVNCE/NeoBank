import { render, screen, fireEvent } from '@testing-library/react';
import { CheckBox } from './CheckBox';
import '@testing-library/jest-dom';

describe('CheckBox component', () => {
	test('renders checkbox with label', () => {
		render(<CheckBox text='Accept terms' />);

		const checkbox = screen.getByTestId('checkbox');
		const label = screen.getByText('Accept terms');

		expect(checkbox).toBeInTheDocument();
		expect(label).toBeInTheDocument();
	});

	test('checkbox is checked when passed checked=true', () => {
		render(<CheckBox checked text='Accept terms' />);
		const checkbox = screen.getByTestId('checkbox');

		expect(checkbox).toBeChecked();
	});

	test('calls onChange when clicked', () => {
		const handleChange = vitest.fn();
		render(<CheckBox onChange={handleChange} text='Accept terms' />);

		const checkbox = screen.getByTestId('checkbox');
		fireEvent.click(checkbox);

		expect(handleChange).toHaveBeenCalledTimes(1);
	});
});
