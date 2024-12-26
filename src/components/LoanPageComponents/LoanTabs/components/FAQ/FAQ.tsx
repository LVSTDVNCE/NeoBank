import { Accordion } from '@ui';
import { ISSUING, USING_CARD } from './FAQ.const';
import styles from './FAQ.module.scss';

const FAQ_ITEMS = [
	{
		heading: 'Issuing and receiving a card',
		accordion: ISSUING,
	},
	{
		heading: 'Using a credit card',
		accordion: USING_CARD,
	},
];

export const FAQ = () => {
	return (
		<div className={styles.faq}>
			{FAQ_ITEMS.map(items => (
				<section key={items.heading}>
					<h3 className={styles.faq__heading}>{items.heading}</h3>
					<Accordion items={items.accordion} />
				</section>
			))}
		</div>
	);
};
