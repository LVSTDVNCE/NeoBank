import { INewsArticleProps } from 'types';
import styles from './SliderCard.module.scss';

export const SliderCard = ({ slide }: { slide: INewsArticleProps }) => {
	return (
		<article className={styles.slider__slide}>
			<a href={slide.url} target='_blank' className={styles.slider__link}>
				<img
					src={slide.urlToImage || 'placeholder.png'}
					alt={slide.title}
					className={styles.slider__img}
				/>
				<h4 className={styles.slider__heading}>{slide.title}</h4>
				<p className={styles.slider__para}>{slide.description}</p>
			</a>
		</article>
	);
};
