import {
	Features,
	ChooseTheCard,
	ConverterCurrency,
	WorldMap,
	Subscribe,
	CurrentNews,
} from '@components/index';

export const Home = () => {
	return (
		<>
			<ChooseTheCard />
			<Features />
			<ConverterCurrency />
			<WorldMap />
			<CurrentNews />
			<Subscribe />
		</>
	);
};
