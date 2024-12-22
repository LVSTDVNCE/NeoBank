import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IPrescoringFormProps } from 'types';
import { Label } from '@ui';
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
}: TInputProps) => (
	<div className={styles.inputWrapper}>
		<Label htmlFor={id} text={label} star={star} />
		<input
			id={id}
			type={type}
			placeholder={placeholder}
			{...register(id as keyof IPrescoringFormProps, rules)}
			className={styles.input}
		/>
		{errors && errors[id as keyof IPrescoringFormProps] && (
			<p>{errors[id as keyof IPrescoringFormProps]?.message as string}</p>
		)}
	</div>
);
