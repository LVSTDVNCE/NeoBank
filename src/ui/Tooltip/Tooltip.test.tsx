import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';

describe('Tooltip component', () => {
	test('renders children inside tooltip wrapper', () => {
		render(
			<Tooltip text='Tooltip text'>
				<button>Hover me</button>
			</Tooltip>
		);

		expect(screen.getByText('Hover me')).toBeInTheDocument();
	});

	test('shows tooltip text on hover', async () => {
		const { container } = render(
			<Tooltip text='Tooltip text'>
				<button>Hover me</button>
			</Tooltip>
		);

		const user = userEvent.setup();
		const button = screen.getByText('Hover me');

		expect(screen.queryByText(/Tooltip text/i)).not.toBeInTheDocument();

		console.log(container.innerHTML);

		await user.hover(button);

		console.log(container.innerHTML);

		const tooltip = screen.queryByText(/Tooltip text/i);
		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toBeVisible();

		await user.unhover(button);

		expect(tooltip).not.toBeVisible();
	});
});
