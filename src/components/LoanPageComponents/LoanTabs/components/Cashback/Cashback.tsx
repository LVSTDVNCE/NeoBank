import { CASHBACK } from './Cashback.const';
import styles from './Cashback.module.scss';

export const Cashback = () => {
	return (
		<div className={styles.Cashback}>
			{CASHBACK.map(card => (
				<article className={styles.card} key={card.for}>
					<p className={styles.card__para}>{card.for}</p>
					<h3 className={styles.card__title}>{card.percent}</h3>
				</article>
			))}
		</div>
	);
};
