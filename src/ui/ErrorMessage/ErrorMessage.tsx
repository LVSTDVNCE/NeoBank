import styles from './ErrorMessage.module.scss';

type TErrorMessageProps = {
	text?: string;
	error?: string;
	stylesProps?: string;
};

export const ErrorMessage = ({
	text = 'Failed to load',
	error,
	stylesProps = 'error',
}: TErrorMessageProps) => {
	return (
		<p className={styles[stylesProps]}>
			{text} {error}
		</p>
	);
};
