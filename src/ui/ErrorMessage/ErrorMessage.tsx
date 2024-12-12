import styles from './ErrorMessage.module.scss';

type TErrorMessageProps = {
	text?: string;
	error?: string;
};

export const ErrorMessage = ({
	text = 'Failed to load',
	error,
}: TErrorMessageProps) => {
	return (
		<p className={styles.error}>
			{text} {error}
		</p>
	);
};
