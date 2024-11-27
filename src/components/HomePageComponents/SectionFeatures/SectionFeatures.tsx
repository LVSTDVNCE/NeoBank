import styles from './SectionFeatures.module.scss'
import developer from '@assets/images/png/developer.png'
import { features } from '@constants/SectionFeatures'

export const SectionFeatures = () => {
	return (
		<section className={styles.sectionFeatures}>
			<img src={developer} alt='developer' />
			<article className={styles.sectionFeatures__AboutFeatures}>
				<h3 className={styles.sectionFeatures__heading}>
					We Provide Many Features You Can Use
				</h3>
				<p className={styles.sectionFeatures__para}>
					You can explore the features that we provide with fun and have their
					own functions each feature
				</p>
				<ul className={styles.sectionFeatures__list}>
					{features.map(item => (
						<li key={item.id}>{item.text}</li>
					))}
				</ul>
			</article>
		</section>
	)
}
