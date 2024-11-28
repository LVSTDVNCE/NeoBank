import { Button } from '@ui';
import { cards } from '@constants/SectionCards';
import styles from './ChooseTheCard.module.scss';

export const ChooseTheCard = () => {
	return (
		<section className={styles.sectionCards}>
			<div>
				<h1 className={styles.sectionCards__heading}>
					Choose the design you like and apply for card right now
				</h1>
				<Button text={'Choose the card'} />
			</div>
			<div className={styles.sectionCards__cards}>
				{cards.map(card => (
					<img key={card.id} src={card.src} alt={card.alt} />
				))}
			</div>
		</section>
	);
};
