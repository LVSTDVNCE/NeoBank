import { baseApi } from '@api/baseApi';

export const agreeWithSchedule = async (id: string) => {
	try {
		await baseApi(`http://localhost:8080/document/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.error(error);
	}
};
