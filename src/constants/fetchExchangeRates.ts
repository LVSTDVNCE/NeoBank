const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;
const baseCurrency = 'RUB';
const currencies = ['USD', 'EUR', 'CAD', 'CNY', 'MUR', 'SGD'];
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

export { currencies, apiUrl };
