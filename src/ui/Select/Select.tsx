import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IPrescoringFormProps } from 'types';
import { Label } from '@ui';
import styles from './Select.module.scss';

type TSelectProps = {
	id: string;
	label: string;
	star?: string;
	options: { value: number | string; label: string }[];
	register: UseFormRegister<IPrescoringFormProps>;
	rules?: object;
	errors?: FieldErrors<IPrescoringFormProps>;
};

export const Select = ({
	id,
	label,
	star,
	options,
	register,
	rules,
	errors,
}: TSelectProps) => (
	<div className={styles.selectWrapper}>
		<Label htmlFor={id} text={label} star={star} />
		<select
			className={styles.select}
			id={id}
			{...register(id as keyof IPrescoringFormProps, rules)}
		>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
		{errors && errors[id as keyof IPrescoringFormProps] && (
			<p>{errors[id as keyof IPrescoringFormProps]?.message as string}</p>
		)}
	</div>
);
