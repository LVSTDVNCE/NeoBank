import { baseApi } from '@api/baseApi';
import { IOffersProps } from 'types';

export const SelectLoanOffers = async (selectedOffer: IOffersProps) => {
	try {
		await baseApi('http://localhost:8080/application/apply', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			data: selectedOffer,
		});
	} catch (error) {
		console.error('Error applying for the loan:', error);
		throw error;
	}
};
