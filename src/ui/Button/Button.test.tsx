import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button component', () => {
	test('renders button with text', () => {
		render(<Button text='Click me' />);

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toBeInTheDocument();
	});

	test('renders button with children', () => {
		render(
			<Button>
				<span>Child Element</span>
			</Button>
		);

		const childElement = screen.getByText('Child Element');
		expect(childElement).toBeInTheDocument();
	});

	test('calls onClick when clicked', () => {
		const handleClick = vitest.fn();
		render(<Button text='Click me' onClick={handleClick} />);

		const button = screen.getByRole('button', { name: /click me/i });
		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('button is disabled when disabled prop is passed', () => {
		render(<Button text='Disabled' disabled />);

		const button = screen.getByRole('button', { name: /disabled/i });
		expect(button).toBeDisabled();
	});
});
