import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from './Tabs';
import '@testing-library/jest-dom';

describe('Tabs component', () => {
	const tabs = [
		{ label: 'Tab 1', content: () => <div>Content 1</div> },
		{ label: 'Tab 2', content: () => <div>Content 2</div> },
	];

	test('renders the first tab by default', () => {
		render(<Tabs tabs={tabs} />);

		expect(screen.getByText('Tab 1')).toBeInTheDocument();
		expect(screen.getByText('Content 1')).toBeInTheDocument();
		expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
	});

	test('renders all tab buttons', () => {
		render(<Tabs tabs={tabs} />);

		expect(screen.getByText('Tab 1')).toBeInTheDocument();
		expect(screen.getByText('Tab 2')).toBeInTheDocument();
	});

	test('changes active tab on button click', () => {
		render(<Tabs tabs={tabs} />);

		const tab2Button = screen.getByText('Tab 2');
		fireEvent.click(tab2Button);

		expect(screen.getByText('Content 2')).toBeInTheDocument();
		expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
	});

	test('applies active class to the selected tab', () => {
		render(<Tabs tabs={tabs} />);

		const tab1Button = screen.getByText('Tab 1');
		const tab2Button = screen.getByText('Tab 2');

		expect(tab1Button.className).toMatch(/activeTabBtn/);
		expect(tab2Button.className).toMatch(/TabBtn/);

		fireEvent.click(tab2Button);

		expect(tab1Button.className).toMatch(/TabBtn/);
		expect(tab2Button.className).toMatch(/activeTabBtn/);
	});
});
