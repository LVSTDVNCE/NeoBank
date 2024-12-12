import styles from './WorldMap.module.scss';
import world from '@assets/images/svg/world.svg';

export const WorldMap = () => {
	return (
		<section className={styles.sectionWorld}>
			<h3 className={styles.sectionWorld__heading}>
				You can use our services anywhere in the world
			</h3>
			<figure>
				<figcaption className={styles.sectionWorld__para}>
					Withdraw and transfer money online through our application
				</figcaption>
				<img src={world} alt='world map' />
			</figure>
		</section>
	);
};
