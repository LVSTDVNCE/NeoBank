import { SectionCards } from '../../components/HomePageComponents/SectionCards/SectionCards'
import { SectionFeatures } from '../../components/HomePageComponents/SectionFeatures/SectionFeatures'
import { ConverterCurrency } from './../../components/HomePageComponents/ConverterCurrency/ConverterCurrency'
import { SectionWorld } from '../../components/HomePageComponents/SectionWorld/SectionWorld'
import { SectionSubscribe } from '../../components/HomePageComponents/SectionSubscribe/SectionSubscribe'

export const Home = () => {
	return (
		<>
			<SectionCards />
			<SectionFeatures />
			<ConverterCurrency />
			<SectionWorld />
			<SectionSubscribe />
		</>
	)
}
