import styles from './CheckBox.module.scss';

type TCheckBoxProps = {
	text?: string;
	checked?: boolean;
	onChange?: () => void;
};

export const CheckBox = ({ text, checked, onChange }: TCheckBoxProps) => {
	return (
		<div className={styles.checkbox__wrapper}>
			<input checked={checked} type='checkbox' onChange={onChange} />
			<p className={styles.checkbox__text}>{text}</p>
		</div>
	);
};
