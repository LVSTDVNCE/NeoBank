import { baseApi } from '@api/baseApi';
import { ICurrencyRateProps } from 'types';

const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;
const BASE_CURRENCY = 'RUB';
const CURRENCIES = ['USD', 'EUR', 'CAD', 'CNY', 'MUR', 'SGD'];
const CURRENCY_API_URL = 'https://v6.exchangerate-api.com/v6/';

export const fetchExchangeRates = async (): Promise<ICurrencyRateProps[]> => {
	const url = `${CURRENCY_API_URL}${API_KEY}/latest/${BASE_CURRENCY}`;
	try {
		const data = await baseApi<{ conversion_rates: Record<string, number> }>(
			url
		);

		const ratePromises = CURRENCIES.map(currency =>
			Promise.resolve({
				currency,
				rate: data.data.conversion_rates[currency],
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
