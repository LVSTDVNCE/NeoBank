import { baseApi } from '@api/baseApi';

type TSign = {
	status: number;
};

export const signDocument = async (id: string) => {
	try {
		const response: TSign = await baseApi(
			`http://localhost:8080/document/${id}/sign`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		return response;
	} catch (error) {
		console.error('Error signing document:', error);
		throw error;
	}
};
