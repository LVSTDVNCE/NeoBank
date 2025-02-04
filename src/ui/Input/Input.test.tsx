import { render, screen, fireEvent } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { Input } from './Input';

const renderInput = (props = {}) => {
	const Wrapper = ({ children }: { children: React.ReactNode }) => {
		const methods = useForm({
			defaultValues: { testInput: '' },
		});

		return <FormProvider {...methods}>{children}</FormProvider>;
	};

	return render(
		<Wrapper>
			<Input id='testInput' register={vitest.fn()} {...props} />
		</Wrapper>
	);
};

describe('Input Component', () => {
	test('renders input with correct attributes', () => {
		renderInput({ label: 'Test Label', placeholder: 'Enter text' });

		const input = screen.getByPlaceholderText('Enter text');
		expect(input).toBeInTheDocument();
		expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
	});

	test('displays an error message when validation fails', async () => {
		renderInput({ errors: { testInput: { message: 'Required field' } } });

		expect(screen.getByText('Required field')).toBeInTheDocument();
	});

	test('shows success icon when input is valid after submission', () => {
		renderInput({ isSubmitted: true });

		const successIcon = screen.getByAltText('Success');
		expect(successIcon).toBeInTheDocument();
	});

	test('shows error icon when input has validation error after submission', () => {
		renderInput({
			isSubmitted: true,
			errors: { testInput: { message: 'Invalid input' } },
		});

		const errorIcon = screen.getByAltText('Error');
		expect(errorIcon).toBeInTheDocument();
	});

	test('calls register function on input change', () => {
		const registerMock = vitest.fn();
		renderInput({ register: registerMock });

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'Test value' } });

		expect(input).toHaveValue('Test value');
	});
});
