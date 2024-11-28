import {
	Features,
	ChooseTheCard,
	ConverterCurrency,
	WorldMap,
	Subscribe,
} from '@components/index';

export const Home = () => {
	return (
		<>
			<ChooseTheCard />
			<Features />
			<ConverterCurrency />
			<WorldMap />
			<Subscribe />
		</>
	);
};
