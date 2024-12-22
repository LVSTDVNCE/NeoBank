import { ReactNode, FC } from 'react';
import styles from './Form.module.scss';

type TFormProps = {
	children: ReactNode;
	onSubmit: () => void;
};

export const Form: FC<TFormProps> = ({ children, onSubmit }) => {
	return (
		<form onSubmit={onSubmit} className={styles.form}>
			{children}
		</form>
	);
};
