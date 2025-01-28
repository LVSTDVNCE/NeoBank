import {
	FieldErrors,
	UseFormRegister,
	FieldValues,
	Path,
	get,
} from 'react-hook-form';
import { ErrorMessage, Label } from '@ui';
import error from '@assets/icons/Error_icon.png';
import success from '@assets/icons/Success-icon.png';
import styles from './Input.module.scss';

type TInputProps<T extends FieldValues> = {
	id: Path<T>;
	label?: string;
	star?: string;
	type?: string;
	placeholder?: string;
	rules?: object;
	errors?: FieldErrors<T>;
	register: UseFormRegister<T>;
	isSubmitted?: boolean;
	styleProps?: string;
};

export const Input = <T extends FieldValues>({
	id,
	label,
	star,
	type = 'text',
	placeholder,
	rules,
	errors,
	register,
	isSubmitted,
	styleProps,
}: TInputProps<T>) => {
	const hasError = !!get(errors, id);
	const errorMessage = get(errors, `${id}.message`) as string;

	const inputClass = `${styles.input} ${
		hasError ? styles.error : styles.success
	}`;

	return (
		<div className={styles.inputWrapper}>
			{label && <Label htmlFor={id as string} text={label} star={star} />}
			<input
				id={id as string}
				type={type}
				placeholder={placeholder}
				{...register(id, rules)}
				className={`${inputClass} ${styleProps}`}
			/>
			{hasError && (
				<ErrorMessage
					stylesProps='loan-form-input'
					text={errorMessage ?? 'The field must contain only letters'}
				/>
			)}
			{isSubmitted && (
				<img
					src={hasError ? error : success}
					alt={hasError ? 'Error' : 'Success'}
					className={styles.iconMessage}
				/>
			)}
		</div>
	);
};
