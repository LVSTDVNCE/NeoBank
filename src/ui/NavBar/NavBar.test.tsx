import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';

describe('NavBar component', () => {
	const mockNavBarItems = [
		{ id: 1, link: '/home', text: 'Home' },
		{ id: 2, link: '/about', text: 'About' },
		{ id: 3, link: '/contact', text: 'Contact' },
	];

	const renderWithRouter = (component: JSX.Element) => {
		return render(<BrowserRouter>{component}</BrowserRouter>);
	};

	test('renders navigation items correctly', () => {
		renderWithRouter(<NavBar NavBarItems={mockNavBarItems} />);

		mockNavBarItems.forEach(item => {
			expect(screen.getByText(item.text)).toBeInTheDocument();
			expect(screen.getByText(item.text)).toHaveAttribute('href', item.link);
		});
	});

	test('applies active class to active link', () => {
		renderWithRouter(<NavBar NavBarItems={mockNavBarItems} />);

		const homeLink = screen.getByText('Home');
		expect(homeLink).not.toHaveClass('active');
	});
});
