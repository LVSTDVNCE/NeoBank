import { ReactNode, FC } from 'react';
import styles from './Button.module.scss';

type TButtonProps = {
	text?: string;
	children?: ReactNode;
	stylesProps?: string;
	onClick?: () => void;
	disabled?: boolean;
	ariaLabel?: string;
};

export const Button: FC<TButtonProps> = ({
	text,
	children,
	stylesProps,
	onClick,
	disabled,
	ariaLabel,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={stylesProps ? styles[stylesProps] : styles.button}
			aria-label={ariaLabel}
		>
			{children}
			{text}
		</button>
	);
};
