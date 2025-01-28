import styles from './StepMessage.module.scss';

type TStepMessageProps = {
	heading: string;
	paragraph: string;
};

export const StepMessage = ({ heading, paragraph }: TStepMessageProps) => {
	return (
		<section className={styles.message}>
			<h2 className={styles.message__heading}>{heading}</h2>
			<p className={styles.message__paragraph}>{paragraph}</p>
		</section>
	);
};
