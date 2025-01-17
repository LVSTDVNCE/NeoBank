import { baseApi } from '@api/baseApi';
import { ILoanSecondStepProps } from 'types';

export const finishRegistration = async (
	finishData: ILoanSecondStepProps,
	id: string
) => {
	try {
		const response = await baseApi(
			`http://localhost:8080/application/registration/${id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				data: finishData,
			}
		);
		return response;
	} catch (error) {
		console.error('Error applying for the loan:', error);
	}
};
