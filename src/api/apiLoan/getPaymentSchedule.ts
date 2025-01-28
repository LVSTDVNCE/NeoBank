import { baseApi } from '@api/baseApi';
import { IPaymentScheduleProps } from 'types';

export const getPaymentSchedule = async (id: string) => {
	try {
		const response: IPaymentScheduleProps = await baseApi(
			`http://localhost:8080/admin/application/${id}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};
