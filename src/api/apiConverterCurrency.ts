import axios from 'axios'
import { CurrencyRate } from '../types/types'

const apiKey = '2e624f12d9152b4c6f9ecbab'
const baseCurrency = 'RUB'
const currencies = ['USD', 'EUR', 'CAD', 'CNY', 'MUR', 'SGD']
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`

export async function fetchExchangeRates(): Promise<CurrencyRate[]> {
	try {
		const response = await axios.get(apiUrl)
		const rates = currencies.map(currency => ({
			currency,
			rate: response.data.conversion_rates[currency],
		}))
		return rates
	} catch (error) {
		console.error('Error fetching exchange rates:', error)
		return []
	}
}
