import { baseApi } from '@api/baseApi';

export const signDocument = async (id: string) => {
	try {
		const response = await baseApi(
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
		console.error(error);
	}
};
