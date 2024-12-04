import { useState } from 'react';
import styles from './CurrentNews.module.scss';
import { Button } from '@ui';
import left from '@assets/icons/slideLeft.png';
import right from '@assets/icons/slideRight.png';

interface Slide {
	id: number;
	content: string;
}

const slides: Slide[] = [
	{ id: 1, content: 'Слайд 1' },
	{ id: 2, content: 'Слайд 2' },
	{ id: 3, content: 'Слайд 3' },
	{ id: 4, content: 'Слайд 4' },
	{ id: 5, content: 'Слайд 5' },
	{ id: 6, content: 'Слайд 6' },
	{ id: 7, content: 'Слайд 7' },
	{ id: 8, content: 'Слайд 8' },
	{ id: 9, content: 'Слайд 9' },
	{ id: 10, content: 'Слайд 10' },
];

export const CurrentNews = () => {
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

	return (
		<section className={styles.news}>
			<h3 className={styles.news__heading}>
				Current news from the world of finance
			</h3>
			<p className={styles.news__para}>
				We update the news feed every 15 minutes. You can learn more by clicking
				on the news you are interested in.
			</p>
			<div className={styles.news__slider}>
				<div className={styles.news__slidesContainer}>
					<div
						className={styles.news__slidesWrapper}
						style={{
							transform: `translateX(-${currentSlide * slideWidth}px)`,
						}}
					>
						{slides.map(slide => (
							<div className={styles.news__slide} key={slide.id}>
								{slide.content}
							</div>
						))}
					</div>
				</div>
			</div>
			<Button
				stylesProps='newsButton'
				onClick={prevSlide}
				disabled={currentSlide === 0}
			>
				<img src={left} alt='' />
			</Button>
			<Button
				stylesProps='newsButton'
				onClick={nextSlide}
				disabled={currentSlide === slides.length - 1}
			>
				<img src={right} alt='' />
			</Button>
		</section>
	);
};
