import { INewsArticleProps } from 'types';
import { BaseCard } from '@ui';
import styles from './SliderCard.module.scss';
import NewsMockImg from '@assets/images/jpg/NewsMockImg.jpg';

export const SliderCard = ({ slide }: { slide: INewsArticleProps }) => {
	return (
		<BaseCard classNameProps='slider__slide'>
			<a href={slide.url} target='_blank' className={styles.slider__link}>
				<img
					src={slide.urlToImage || NewsMockImg}
					alt={slide.title}
					className={styles.slider__img}
				/>
				<h4 className={styles.slider__heading}>{slide.title}</h4>
				<p className={styles.slider__para}>{slide.description}</p>
			</a>
		</BaseCard>
	);
};
