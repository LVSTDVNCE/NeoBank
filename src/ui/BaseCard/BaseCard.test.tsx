import { render, screen } from '@testing-library/react';
import { BaseCard } from './BaseCard';
import styles from './BaseCard.module.scss';
import '@testing-library/jest-dom';

describe('BaseCard component', () => {
	test('renders children correctly', () => {
		render(<BaseCard classNameProps='customClass'>Test Content</BaseCard>);

		const card = screen.getByText('Test Content');
		expect(card).toBeInTheDocument();
	});

	test('applies the correct class from styles', () => {
		render(<BaseCard classNameProps='customClass'>Test</BaseCard>);

		const card = screen.getByText('Test');
		expect(card).toHaveClass(styles.customClass);
	});
});
