import { render, screen } from '@testing-library/react';
import { Slider } from './Slider';
import { INewsArticleProps } from 'types';

beforeAll(() => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: vi.fn().mockImplementation(query => ({
			matches: query.includes('max-width: 600px') ? false : true,
			media: query,
			onchange: null,
			addListener: vi.fn(),
			removeListener: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn(),
		})),
	});
});

const mockSlides: INewsArticleProps[] = [
	{
		title: 'Slide 1',
		description: 'Description 1',
		url: '',
		urlToImage: 'img1.jpg',
	},
	{
		title: 'Slide 2',
		description: 'Description 2',
		url: '',
		urlToImage: 'img2.jpg',
	},
	{
		title: 'Slide 3',
		description: 'Description 3',
		url: '',
		urlToImage: 'img3.jpg',
	},
];

describe('Slider Component', () => {
	// test('renders loading skeletons when isLoading is true', () => {
	// 	render(<Slider slides={[]} isLoading={true} />);
	// 	expect(screen.getAllByTestId('slider-skeleton')).toHaveLength(4);
	// });

	test('renders slides when isLoading is false', () => {
		render(<Slider slides={mockSlides} isLoading={false} />);
		expect(screen.getByText('Slide 1')).toBeInTheDocument();
		expect(screen.getByText('Slide 2')).toBeInTheDocument();
		expect(screen.getByText('Slide 3')).toBeInTheDocument();
	});

	// test('disables previous button on first slide', () => {
	// 	render(<Slider slides={mockSlides} isLoading={false} />);
	// 	const prevButton = screen.getByRole('button', { name: /left/i });
	// 	expect(prevButton).toBeDisabled();
	// });

	// test('navigates to next slide on next button click', () => {
	// 	render(<Slider slides={mockSlides} isLoading={false} />);
	// 	const nextButton = screen.getByRole('button', { name: /Next slide/i });

	// 	fireEvent.click(nextButton);
	// 	expect(screen.getByText('Slide 2')).toBeVisible();
	// });

	// test('disables previous button on first slide', () => {
	// 	render(<Slider slides={mockSlides} isLoading={false} />);
	// 	const prevButton = screen.getByRole('button', { name: /Previous slide/i });
	// 	expect(prevButton).toBeDisabled();
	// });

	// test('handles swipe gestures correctly', () => {
	// 	render(<Slider slides={mockSlides} isLoading={false} />);
	// 	const slider = screen.getByTestId('slider');

	// 	fireEvent.touchStart(slider, { touches: [{ clientX: 200 }] });
	// 	fireEvent.touchMove(slider, { touches: [{ clientX: 100 }] });
	// 	fireEvent.touchEnd(slider);

	// 	expect(screen.getByText('Slide 2')).toBeVisible();
	// });
});
