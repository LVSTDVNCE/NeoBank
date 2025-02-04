import { render, screen } from '@testing-library/react';
import { Accordion } from './Accordion';

const items = [
	{ id: '1', question: 'Question 1', answer: 'Answer 1' },
	{ id: '2', question: 'Question 2', answer: 'Answer 2' },
];

describe('Accordion Component', () => {
	test('renders the accordion with items', () => {
		render(<Accordion items={items} />);
		expect(screen.getByText('Question 1')).toBeInTheDocument();
		expect(screen.getByText('Question 2')).toBeInTheDocument();
	});
});
