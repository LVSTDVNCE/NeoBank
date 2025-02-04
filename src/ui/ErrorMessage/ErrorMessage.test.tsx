import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';
import '@testing-library/jest-dom';

describe('ErrorMessage component', () => {
	test('renders default error message', () => {
		render(<ErrorMessage />);

		expect(screen.getByText(/Failed to load/i)).toBeInTheDocument();
	});

	test('renders custom error message', () => {
		render(<ErrorMessage text='Something went wrong' />);

		expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
	});

	test('renders error message with error details', () => {
		render(<ErrorMessage text='Error:' error='Network issue' />);

		expect(screen.getByText(/Error: Network issue/i)).toBeInTheDocument();
	});
});
