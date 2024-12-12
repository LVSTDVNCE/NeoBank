import styles from './Features.module.scss';
import developer from '@assets/images/png/developer.png';
import { FEATURES } from './Features.const';

export const Features = () => {
	return (
		<section className={styles.sectionFeatures}>
			<img src={developer} alt='developer' />
			<div>
				<h3 className={styles.sectionFeatures__heading}>
					We Provide Many Features You Can Use
				</h3>
				<article className={styles.sectionFeatures__AboutFeatures}>
					<p className={styles.sectionFeatures__para}>
						You can explore the features that we provide with fun and have their
						own functions each feature
					</p>
					<ul className={styles.sectionFeatures__list}>
						{FEATURES.map(item => (
							<li key={item.id}>{item.text}</li>
						))}
					</ul>
				</article>
			</div>
		</section>
	);
};
