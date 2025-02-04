import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';
import { Button } from '@ui';
import '@testing-library/jest-dom';

describe('Modal component', () => {
	beforeEach(() => {
		// Создаем контейнер для портала
		const modalRoot = document.createElement('div');
		modalRoot.setAttribute('id', 'modal-root');
		document.body.appendChild(modalRoot);
	});

	afterEach(() => {
		// Удаляем контейнер после каждого теста
		const modalRoot = document.getElementById('modal-root');
		if (modalRoot) {
			document.body.removeChild(modalRoot);
		}
	});

	test('renders when isOpen is true', () => {
		render(
			<Modal isOpen={true} onClose={() => {}} text='Test Modal'>
				<Button text='Confirm' />
			</Modal>
		);

		expect(screen.getByText('Deny application')).toBeInTheDocument();
		expect(screen.getByText('Test Modal')).toBeInTheDocument();
		expect(screen.getByText('Confirm')).toBeInTheDocument();
	});

	test('does not render when isOpen is false', () => {
		render(
			<Modal isOpen={false} onClose={() => {}} text='Test Modal'>
				<Button text='Confirm' />
			</Modal>
		);

		expect(screen.queryByText('Deny application')).not.toBeInTheDocument();
		expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
		expect(screen.queryByText('Confirm')).not.toBeInTheDocument();
	});

	test('calls onClose when close button is clicked', () => {
		const onCloseMock = vitest.fn();

		render(
			<Modal isOpen={true} onClose={onCloseMock} text='Test Modal'>
				<Button text='Confirm' />
			</Modal>
		);

		const closeButton = screen.getByRole('button', { name: /close/i });
		fireEvent.click(closeButton);

		expect(onCloseMock).toHaveBeenCalledTimes(1);
	});
});
