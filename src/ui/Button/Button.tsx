import { ReactElement, FC } from 'react';
import styles from './Button.module.scss';

type TButtonProps = {
	text: string;
	children?: ReactElement;
	stylesProps?: string;
};

export const Button: FC<TButtonProps> = ({ text, children, stylesProps }) => {
	return (
		<button className={stylesProps ? `${styles[stylesProps]}` : styles.button}>
			{children}
			{text}
		</button>
	);
};
