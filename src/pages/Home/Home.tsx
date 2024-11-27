import { SectionCards } from '@components/HomePageComponents'
import { SectionFeatures } from '@components/HomePageComponents'
import { ConverterCurrency } from '@components/HomePageComponents'
import { SectionWorld } from '@components/HomePageComponents'
import { SectionSubscribe } from '@components/HomePageComponents'

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
