import { render, screen } from '@testing-library/react';
import { Label } from './Label';
import '@testing-library/jest-dom';

describe('Label component', () => {
	test('renders label with text and star', () => {
		render(<Label text='Username' htmlFor='username' star='*' />);

		const labelElement = screen.getByText(/Username/i);
		expect(labelElement).toBeInTheDocument();
		expect(labelElement).toHaveTextContent('Username *');
	});

	test('renders label without star', () => {
		render(<Label text='Email' htmlFor='email' />);

		const labelElement = screen.getByText(/Email/i);
		expect(labelElement).toBeInTheDocument();
		expect(labelElement).toHaveTextContent('Email');
	});

	test('renders label with correct htmlFor attribute', () => {
		const { container } = render(<Label text='Password' htmlFor='password' />);

		const labelElement = container.querySelector('label');
		expect(labelElement).toHaveAttribute('for', 'password');
	});
});
