import { Divider } from '@ui';
import { HOW_GET_CARD } from './HowGetCard.const';
import styles from './HowGetCard.module.scss';

export const HowGetCard = () => {
	return (
		<section className={styles.howTo}>
			<h3 className={styles.howTo__heading}>How to get a card</h3>
			<ul className={styles.howTo__list}>
				{HOW_GET_CARD.map(item => (
					<li className={styles.howTo__item} key={item.step}>
						<div className={styles.howTo__wrapper}>
							<span className={styles.howTo__step}>{item.step}</span>
							<Divider
								color='rgba(128, 128, 128, .2)'
								height='2px'
								margin='3px 0 0 0'
							/>
						</div>
						<p className={styles.howTo__para}>{item.text}</p>
					</li>
				))}
			</ul>
		</section>
	);
};
