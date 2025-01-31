import { baseApi } from '@api/baseApi';

export const cancelApplication = async (id: string) => {
	try {
		await baseApi(`http://localhost:8080/application/${id}/deny`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.error(error);
	}
};
