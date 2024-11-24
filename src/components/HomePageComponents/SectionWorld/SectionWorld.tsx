import styles from './SectionWorld.module.scss'
import world from './../../../assets/images/svg/world.svg'

export const SectionWorld = () => {
	return (
		<section className={styles.sectionWorld}>
			<h3 className={styles.sectionWorld__heading}>
				You can use our services anywhere in the world
			</h3>
			<p className={styles.sectionWorld__para}>
				Withdraw and transfer money online through our application
			</p>
			<img src={world} alt='world map' />
		</section>
	)
}
