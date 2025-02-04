import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';
import '@testing-library/jest-dom';

describe('Divider component', () => {
	test('renders without crashing', () => {
		render(<Divider styleProps='custom-style' />);
		const divider = screen.getByTestId('divider');

		expect(divider).toBeInTheDocument();
	});

	test('applies custom style class', () => {
		render(<Divider styleProps='custom-style' />);
		const divider = screen.getByTestId('divider');

		expect(divider).toHaveClass('custom-style');
	});
});
