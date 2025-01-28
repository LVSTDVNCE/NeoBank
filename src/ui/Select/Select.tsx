import {
	FieldErrors,
	FieldValues,
	get,
	Path,
	UseFormRegister,
} from 'react-hook-form';
import { ErrorMessage, Label } from '@ui';
import styles from './Select.module.scss';

type TSelectProps<T extends FieldValues> = {
	id: Path<T>;
	label: string;
	star?: string;
	options: { value: number | string; label: string }[];
	register: UseFormRegister<T>;
	rules?: object;
	errors: FieldErrors<T>;
	isSubmitted?: boolean;
	styleProps?: string;
};

export const Select = <T extends FieldValues>({
	id,
	label,
	star,
	options,
	register,
	rules,
	errors,
	isSubmitted,
	styleProps,
}: TSelectProps<T>) => {
	const hasError = !!get(errors, id);
	const errorMessage = get(errors, `${id}.message`) as string;

	return (
		<div className={styles.selectWrapper}>
			<Label htmlFor={id} text={label} star={star} />
			<select
				className={
					!hasError
						? `${styles.select} ${styleProps}`
						: `${styles.selectIncorrect} ${styleProps}`
				}
				id={id}
				{...register(id, rules)}
			>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{isSubmitted && hasError && (
				<ErrorMessage
					stylesProps='loan-form-input'
					text={errorMessage ?? 'Select one of the options'}
				/>
			)}
		</div>
	);
};
