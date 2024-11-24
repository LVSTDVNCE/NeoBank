import Button from '../../../ui/Button/Button'
import styles from './SectionCards.module.scss'
import card1 from './../../../assets/images/png/card1.png'
import card2 from './../../../assets/images/png/card2.png'
import card3 from './../../../assets/images/png/card3.png'
import card4 from './../../../assets/images/png/card4.png'

export const SectionCards = () => {
	return (
		<section className={styles.sectionCards}>
			<div>
				<h1 className={styles.sectionCards__heading}>
					Choose the design you like
					<br /> and apply for card right
					<br /> now
				</h1>
				<Button text={'Choose the card'} />
			</div>
			<div className={styles.sectionCards__cards}>
				<img src={card1} alt='card-1' />
				<img src={card2} alt='card-2' />
				<img src={card3} alt='card-3' />
				<img src={card4} alt='card-4' />
			</div>
		</section>
	)
}
