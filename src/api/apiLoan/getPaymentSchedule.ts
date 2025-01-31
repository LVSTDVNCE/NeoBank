import { baseApi } from '@api/baseApi';
import { IPaymentScheduleProps } from 'types';

type TResponse = {
	data: IPaymentScheduleProps;
};

export const getPaymentSchedule = async (id: string) => {
	try {
		const response: TResponse = await baseApi(
			`http://localhost:8080/admin/application/${id}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
