import { useState } from 'react';
import { INewsArticleProps } from 'types';
import { BaseCard } from '@ui';
import NewsMockImg from '@assets/images/jpg/NewsMockImg.jpg';
import styles from './SliderCard.module.scss';

export const SliderCard = ({ slide }: { slide: INewsArticleProps }) => {
	const [imgSrc, setImgSrc] = useState(slide.urlToImage || NewsMockImg);

	const handleError = () => {
		setImgSrc(NewsMockImg);
	};

	return (
		<BaseCard classNameProps='slider__slide'>
			<a href={slide.url} target='_blank' className={styles.slider__link}>
				<img
					src={imgSrc}
					alt={slide.title}
					className={styles.slider__img}
					onError={handleError}
				/>
				<h4 className={styles.slider__heading}>{slide.title}</h4>
				<p className={styles.slider__para}>{slide.description}</p>
			</a>
		</BaseCard>
	);
};
