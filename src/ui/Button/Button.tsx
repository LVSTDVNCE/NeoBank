import { ReactElement, FC } from 'react';
import styles from './Button.module.scss';

type TButtonProps = {
	text?: string;
	children?: ReactElement;
	stylesProps?: string;
	onClick?: () => void;
	disabled?: boolean;
};

export const Button: FC<TButtonProps> = ({
	text,
	children,
	stylesProps,
	onClick,
	disabled,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={stylesProps ? `${styles[stylesProps]}` : styles.button}
		>
			{children}
			{text}
		</button>
	);
};
