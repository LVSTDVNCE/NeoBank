import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';
import '@testing-library/jest-dom';

describe('Form component', () => {
	test('renders form with children', () => {
		render(
			<Form onSubmit={() => {}}>
				<button type='submit'>Submit</button>
			</Form>
		);

		const buttonElement = screen.getByText(/Submit/i);
		expect(buttonElement).toBeInTheDocument();
	});

	test('calls onSubmit when submitted', () => {
		const handleSubmit = vitest.fn();

		render(
			<Form onSubmit={handleSubmit}>
				<button type='submit'>Submit</button>
			</Form>
		);

		const buttonElement = screen.getByText(/Submit/i);
		fireEvent.click(buttonElement);

		expect(handleSubmit).toHaveBeenCalledTimes(1);
	});
});
