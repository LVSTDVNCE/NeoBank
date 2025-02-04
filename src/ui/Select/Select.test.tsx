import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { Select } from './Select';
import { vi } from 'vitest';
import styles from './Select.module.scss';

const options = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
];

const renderSelect = (props = {}) => {
	const Wrapper = ({ children }: { children: React.ReactNode }) => {
		const methods = useForm({
			defaultValues: { testSelect: '' },
		});

		return <FormProvider {...methods}>{children}</FormProvider>;
	};

	return render(
		<Wrapper>
			<Select
				id='testSelect'
				label='Test Select'
				register={vi.fn()}
				options={options}
				errors={{}}
				{...props}
			/>
		</Wrapper>
	);
};

describe('Select Component', () => {
	test('renders select with correct label and options', () => {
		renderSelect();

		expect(screen.getByLabelText('Test Select')).toBeInTheDocument();

		options.forEach(option => {
			expect(screen.getByText(option.label)).toBeInTheDocument();
		});
	});

	test('shows error message when validation fails', () => {
		renderSelect({
			errors: { testSelect: { message: 'Required field' } },
			isSubmitted: true,
		});

		expect(screen.getByText('Required field')).toBeInTheDocument();
	});

	test('selecting an option updates the value', () => {
		renderSelect();

		const select = screen.getByRole('combobox');
		fireEvent.change(select, { target: { value: 'option2' } });

		expect((select as HTMLSelectElement).value).toBe('option2');
	});

	test('applies error class when there is a validation error', () => {
		renderSelect({ errors: { testSelect: { message: 'Error' } } });

		const select = screen.getByRole('combobox');
		expect(select).toHaveClass(styles.selectIncorrect);
	});

	test('does not apply error class when input is valid', () => {
		renderSelect();

		const select = screen.getByRole('combobox');
		expect(select).not.toHaveClass(styles.selectIncorrect);
	});
});
