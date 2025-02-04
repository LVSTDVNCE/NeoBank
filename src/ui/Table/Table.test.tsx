import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import '@testing-library/jest-dom';

describe('Table component', () => {
	test('renders children correctly', () => {
		render(
			<Table styleProps='custom-class'>
				<tbody>
					<tr>
						<td>Cell 1</td>
						<td>Cell 2</td>
					</tr>
				</tbody>
			</Table>
		);

		expect(screen.getByText('Cell 1')).toBeInTheDocument();
		expect(screen.getByText('Cell 2')).toBeInTheDocument();
	});

	test('applies custom styleProps correctly', () => {
		const { container } = render(<Table styleProps='custom-class'>Test</Table>);
		expect(container.firstChild).toHaveClass('custom-class');
	});
});
