import { Button } from '@ui';
import { AboutPlatinumList } from './components/AboutPlatinumList/AboutPlatinumList';
import PlatinumCard from '@assets/images/png/PlatinumCard.png';
import styles from './AboutPlatinum.module.scss';

type TAboutPlatinumProps = {
	goToForm: () => void;
};

export const AboutPlatinum = ({ goToForm }: TAboutPlatinumProps) => {
	return (
		<section className={styles.AboutPlatinum}>
			<div className={styles.AboutPlatinum__wrapper}>
				<h1 className={styles.AboutPlatinum__heading}>
					Platinum digital credit card
				</h1>
				<p className={styles.AboutPlatinum__para}>
					Our best credit card. Suitable for everyday spending and shopping.
					Cash withdrawals and transfers without commission and interest.
				</p>
				<AboutPlatinumList />
				<Button text='Apply for Card' onClick={goToForm} />
			</div>
			<img
				className={styles.AboutPlatinum__img}
				src={PlatinumCard}
				alt='Platinum digital credit card'
			/>
		</section>
	);
};
