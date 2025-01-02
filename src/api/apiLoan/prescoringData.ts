import { baseApi } from '@api/baseApi';
import { IOffersProps, IPrescoringFormProps } from 'types';

export const prescoringData = async (processedData: IPrescoringFormProps) => {
	try {
		const response: IOffersProps[] = await baseApi(
			'http://localhost:8080/application',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: processedData,
			}
		);
		return response;
	} catch (error) {
		console.error('Error submitting form:', error);
	}
};
