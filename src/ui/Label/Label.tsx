import styles from './Label.module.scss';

type TLabelProps = {
	text?: string;
	htmlFor: string;
	star?: string;
};

export const Label = ({ text, htmlFor, star }: TLabelProps) => {
	return (
		<label className={styles.label} htmlFor={htmlFor}>
			{text} <span>{star}</span>
		</label>
	);
};
