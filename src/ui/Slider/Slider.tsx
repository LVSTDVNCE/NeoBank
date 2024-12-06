import { useState, useRef, useEffect } from 'react';
import { Button, SkeletonLoader } from '@ui';
import { INewsArticleProps } from 'types';
import styles from './Slider.module.scss';
import left from '@assets/icons/slideLeft.png';
import right from '@assets/icons/slideRight.png';

type TSliderProps = {
	slides: INewsArticleProps[];
	isLoading: boolean;
};

export const Slider = ({ slides, isLoading }: TSliderProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slideWidth, setSlideWidth] = useState(400);
	const touchStartX = useRef<number | null>(null);
	const touchEndX = useRef<number | null>(null);

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

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (touchStartX.current === null || touchEndX.current === null) return;

		const deltaX = touchStartX.current - touchEndX.current;

		const swipeThreshold = 50;

		if (deltaX > swipeThreshold) {
			nextSlide();
		} else if (deltaX < -swipeThreshold) {
			prevSlide();
		}

		touchStartX.current = null;
		touchEndX.current = null;
	};

	const updateSlideWidth = () => {
		if (window.matchMedia('(max-width: 600px)').matches) {
			setSlideWidth(300);
		} else if (window.matchMedia('(max-width: 900px)').matches) {
			setSlideWidth(360);
		} else {
			setSlideWidth(400);
		}
	};

	useEffect(() => {
		updateSlideWidth();

		const mediaQuerySmall = window.matchMedia('(max-width: 600px)');
		const mediaQueryMedium = window.matchMedia('(max-width: 900px)');

		const handleMediaChange = () => updateSlideWidth();

		mediaQuerySmall.addEventListener('change', handleMediaChange);
		mediaQueryMedium.addEventListener('change', handleMediaChange);

		return () => {
			mediaQuerySmall.removeEventListener('change', handleMediaChange);
			mediaQueryMedium.removeEventListener('change', handleMediaChange);
		};
	}, []);

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
		<section
			className={styles.slider}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<div className={styles.slider__slidesContainer}>
				<div
					className={styles.slider__slidesWrapper}
					style={{
						transform: `translateX(-${currentSlide * slideWidth}px)`,
					}}
				>
					{isLoading
						? [1, 2, 3, 4].map(slide => (
								<article className={styles.slider__slide} key={slide}>
									<SkeletonLoader width='256px' height='120px' />
									<SkeletonLoader width='256px' height='110px' />
									<SkeletonLoader width='256px' height='96px' />
								</article>
						  ))
						: slides.map((slide, index) => (
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
