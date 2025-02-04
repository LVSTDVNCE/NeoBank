import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu';
import styles from './BurgerMenu.module.scss';
import '@testing-library/jest-dom';

describe('BurgerMenu component', () => {
	test('renders button with burger icon initially', () => {
		render(
			<MemoryRouter>
				<BurgerMenu />
			</MemoryRouter>
		);

		const burgerButton = screen.getByRole('button', { name: /burgerMenu/i });
		expect(burgerButton).toBeInTheDocument();
	});

	test('opens menu when burger button is clicked', () => {
		render(
			<MemoryRouter>
				<BurgerMenu />
			</MemoryRouter>
		);

		const burgerButton = screen.getByRole('button', { name: /burgerMenu/i });
		fireEvent.click(burgerButton);

		const menu = screen.getByTestId('burger-menu');
		expect(menu).toHaveClass(styles.open);
	});

	test('closes menu when burger button is clicked again', () => {
		render(
			<MemoryRouter>
				<BurgerMenu />
			</MemoryRouter>
		);

		const burgerButton = screen.getByRole('button', { name: /burgerMenu/i });
		fireEvent.click(burgerButton);
		fireEvent.click(burgerButton);

		const menu = screen.getByTestId('burger-menu');
		expect(menu).not.toHaveClass(styles.open);
	});

	test('renders NavBar and Online Bank button inside menu', () => {
		render(
			<MemoryRouter>
				<BurgerMenu />
			</MemoryRouter>
		);

		const burgerButton = screen.getByRole('button', { name: /burgerMenu/i });
		fireEvent.click(burgerButton);

		const navBar = screen.getByRole('navigation');
		expect(navBar).toBeInTheDocument();

		const onlineBankButton = screen.getByText(/Online Bank/i);
		expect(onlineBankButton).toBeInTheDocument();
	});
});
