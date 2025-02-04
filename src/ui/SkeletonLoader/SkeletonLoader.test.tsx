import { render } from '@testing-library/react';
import { SkeletonLoader } from './SkeletonLoader';
import '@testing-library/jest-dom';

describe('SkeletonLoader component', () => {
	test('renders with default width and height', () => {
		const { container } = render(<SkeletonLoader />);

		expect(container.firstChild).toHaveStyle({ width: '100%', height: '40px' });
	});

	test('renders with custom width and height', () => {
		const { container } = render(
			<SkeletonLoader width='200px' height='50px' />
		);

		expect(container.firstChild).toHaveStyle({
			width: '200px',
			height: '50px',
		});
	});
});
