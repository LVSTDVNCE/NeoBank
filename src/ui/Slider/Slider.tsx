import { useState } from 'react';
import { Button } from '@ui';
import { INewsArticleProps } from 'types';
import styles from './Slider.module.scss';
import left from '@assets/icons/slideLeft.png';
import right from '@assets/icons/slideRight.png';

type TSliderProps = {
	slides: INewsArticleProps[];
};

export const Slider = ({ slides }: TSliderProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slideWidth = 400;

	const nextSlide = () => {
		if (currentSlide < slides.length - 1) {
			setCurrentSlide(prevSlide => prevSlide + 1);
		}
	};

	const prevSlide = () => {
		if (currentSlide > 0) {
			setCurrentSlide(prevSlide => prevSlide - 1);
		}
	};

	const sliderButtonsConfig = [
		{
			id: 1,
			onClick: prevSlide,
			disabled: currentSlide === 0,
			icon: left,
		},
		{
			id: 2,
			onClick: nextSlide,
			disabled: currentSlide === slides.length - 1,
			icon: right,
		},
	];

	return (
		<section className={styles.slider}>
			<div className={styles.slider__slidesContainer}>
				<div
					className={styles.slider__slidesWrapper}
					style={{
						transform: `translateX(-${currentSlide * slideWidth}px)`,
					}}
				>
					{slides.map((slide, index) => (
						<article className={styles.slider__slide} key={index}>
							<a
								href={slide.url}
								target='_blank'
								className={styles.slider__link}
							>
								<img
									src={slide.urlToImage || 'placeholder.png'}
									alt={slide.title}
									className={styles.slider__img}
								/>
								<h4 className={styles.slider__heading}>{slide.title}</h4>
								<p className={styles.slider__para}>{slide.description}</p>
							</a>
						</article>
					))}
				</div>
			</div>
			<div className={styles.slider__buttonWrapper}>
				{sliderButtonsConfig.map(button => (
					<Button
						key={button.id}
						stylesProps='newsButton'
						onClick={button.onClick}
						disabled={button.disabled}
					>
						<img src={button.icon} alt='arrow-icon' />
					</Button>
				))}
			</div>
		</section>
	);
};
