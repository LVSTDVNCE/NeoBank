import axios from 'axios';
import { CurrencyRate } from 'types';
import { apiUrl, currencies } from '@constants/converterCurrency';

export async function fetchExchangeRates(): Promise<CurrencyRate[]> {
	try {
		const response = await axios.get(apiUrl);
		const rates = currencies.map(currency => ({
			currency,
			rate: response.data.conversion_rates[currency],
		}));
		return rates;
	} catch (error) {
		console.error('Error fetching exchange rates:', error);
		return [];
	}
}
