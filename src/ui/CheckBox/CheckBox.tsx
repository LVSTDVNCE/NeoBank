import styles from './CheckBox.module.scss';

type TCheckBoxProps = {
	text?: string;
	checked?: boolean;
	onChange?: () => void;
};

export const CheckBox = ({ text, checked, onChange }: TCheckBoxProps) => {
	return (
		<div className={styles.checkbox__wrapper}>
			<input
				id='checkbox'
				checked={checked}
				type='checkbox'
				onChange={onChange}
				data-testid='checkbox'
			/>
			<label htmlFor='checkbox' className={styles.checkbox__text}>
				{text}
			</label>
		</div>
	);
};
