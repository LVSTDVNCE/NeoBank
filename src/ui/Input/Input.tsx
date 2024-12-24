import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IPrescoringFormProps } from 'types';
import { ErrorMessage, Label } from '@ui';
import error from '@assets/icons/Error_icon.png';
import success from '@assets/icons/Success-icon.png';
import styles from './Input.module.scss';

type TInputProps = {
	id: string;
	label: string;
	star?: string;
	type?: string;
	placeholder?: string;
	rules?: object;
	errors?: FieldErrors<IPrescoringFormProps>;
	register: UseFormRegister<IPrescoringFormProps>;
	isSubmitted?: boolean;
};

export const Input = ({
	id,
	label,
	star,
	type = 'text',
	placeholder,
	rules,
	errors,
	register,
	isSubmitted,
}: TInputProps) => {
	const hasError = !!errors?.[id as keyof IPrescoringFormProps];

	const inputClass = `${styles.input} ${
		hasError ? styles.error : styles.success
	}`;

	return (
		<div className={styles.inputWrapper}>
			<Label htmlFor={id} text={label} star={star} />
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				{...register(id as keyof IPrescoringFormProps, rules)}
				className={inputClass}
			/>
			{hasError && (
				<ErrorMessage
					stylesProps='loan-form-input'
					text={errors[id as keyof IPrescoringFormProps]?.message as string}
				/>
			)}
			{isSubmitted && (
				<img
					src={hasError ? error : success}
					alt={hasError ? error : success}
					className={styles.iconMessage}
				/>
			)}
		</div>
	);
};
