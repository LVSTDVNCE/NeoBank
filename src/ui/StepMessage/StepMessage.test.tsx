import { render, screen } from '@testing-library/react';
import { StepMessage } from './StepMessage';
import '@testing-library/jest-dom';

describe('StepMessage component', () => {
	test('renders heading and paragraph correctly', () => {
		render(<StepMessage heading='Test Heading' paragraph='Test Paragraph' />);

		expect(screen.getByText('Test Heading')).toBeInTheDocument();
		expect(screen.getByText('Test Paragraph')).toBeInTheDocument();
	});
});
