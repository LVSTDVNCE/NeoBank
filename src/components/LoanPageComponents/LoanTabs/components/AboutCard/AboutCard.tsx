import { ABOUT_CARDS } from './AboutCard.const';
import styles from './AboutCard.module.scss';

export const AboutCard = () => {
	return (
		<div className={styles.AboutCard}>
			{ABOUT_CARDS.map(card => (
				<article className={styles.card} key={card.para}>
					<img className={styles.card__img} src={card.img} alt={card.para} />
					<h3 className={styles.card__title}>{card.title}</h3>
					<p className={styles.card__para}>{card.para}</p>
				</article>
			))}
		</div>
	);
};
