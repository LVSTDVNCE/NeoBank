import {
	Features,
	ChooseTheCard,
	ConverterCurrency,
	WorldMap,
	Subscribe,
	CurrentNews,
} from '@components/index';

const Home = () => {
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

export default Home;
