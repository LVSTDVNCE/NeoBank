import { Accordion } from '@ui';
import { ISSUING, USING_CARD } from './FAQ.const';
import styles from './FAQ.module.scss';

export const FAQ = () => {
	return (
		<div className={styles.faq}>
			<h3 className={styles.faq__heading}>Issuing and receiving a card</h3>
			<Accordion items={ISSUING} />
			<h3 className={styles.faq__heading}>Using a credit card</h3>
			<Accordion items={USING_CARD} />
		</div>
	);
};
