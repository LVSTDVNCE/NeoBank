import { baseApi } from '@api/baseApi';
import { ICurrencyRateProps } from 'types';
import { apiUrl, currencies } from '@constants/fetchExchangeRates';

export const fetchExchangeRates = async (): Promise<ICurrencyRateProps[]> => {
	try {
		const data = await baseApi<{ conversion_rates: Record<string, number> }>(
			apiUrl
		);

		const ratePromises = currencies.map(currency =>
			Promise.resolve({
				currency,
				rate: data.conversion_rates[currency],
			})
		);

		const results = await Promise.allSettled(ratePromises);

		const rates: ICurrencyRateProps[] = results
			.filter(result => result.status === 'fulfilled')
			.map(
				(result: PromiseFulfilledResult<ICurrencyRateProps>) => result.value
			);

		return rates;
	} catch (error) {
		console.error('Error fetching exchange rates:', error);
		return [];
	}
};
