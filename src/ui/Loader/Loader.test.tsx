import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';
import '@testing-library/jest-dom';

describe('Loader component', () => {
	test('renders the loader image', () => {
		render(<Loader />);

		const loaderImage = screen.getByAltText('spinner');
		expect(loaderImage).toBeInTheDocument();
	});
});
