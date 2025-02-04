import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { INewsArticleProps } from 'types';
import { ButtonsGroup, SliderCard, SliderSkeleton } from './components';
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

	const nextSlide = useCallback(() => {
		if (currentSlide < slides.length - 1) {
			setCurrentSlide(prevSlide => prevSlide + 1);
		}
	}, [currentSlide, slides.length]);

	const prevSlide = useCallback(() => {
		if (currentSlide > 0) {
			setCurrentSlide(prevSlide => prevSlide - 1);
		}
	}, [currentSlide]);

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

	const COUNT_SKELETON_CARDS = [1, 2, 3, 4];

	const SLIDER_BUTTONS_CONFIG = useMemo(
		() => [
			{
				id: 1,
				onClick: prevSlide,
				disabled: currentSlide === 0,
				icon: left,
				label: 'Previous slide',
			},
			{
				id: 2,
				onClick: nextSlide,
				disabled:
					window.innerWidth >= 1180
						? currentSlide === slides.length - 3
						: window.innerWidth >= 600
						? currentSlide === slides.length - 2
						: currentSlide === slides.length - 1,
				icon: right,
				label: 'Next slide',
			},
		],
		[currentSlide, nextSlide, prevSlide, slides.length]
	);

	return (
		<section
			className={styles.slider}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			data-testid='slider'
		>
			<div className={styles.slider__slidesContainer}>
				<div
					className={styles.slider__slidesWrapper}
					style={{
						transform: `translateX(-${currentSlide * slideWidth}px)`,
					}}
				>
					{isLoading
						? COUNT_SKELETON_CARDS.map(slide => <SliderSkeleton key={slide} />)
						: slides.map(slide => (
								<SliderCard slide={slide} key={slide.title} />
						  ))}
				</div>
			</div>
			<ButtonsGroup config={SLIDER_BUTTONS_CONFIG} />
		</section>
	);
};
