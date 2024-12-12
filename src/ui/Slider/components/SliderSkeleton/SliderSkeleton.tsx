import { SkeletonLoader } from '@ui';
import styles from './SliderSkeleton.module.scss';

export const SliderSkeleton = () => {
	return (
		<article className={styles.slider__slide}>
			<SkeletonLoader width='256px' height='120px' />
			<SkeletonLoader width='256px' height='110px' />
			<SkeletonLoader width='256px' height='96px' />
		</article>
	);
};
