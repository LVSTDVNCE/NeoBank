import { baseApi } from '@api/baseApi';
import { ISubscribeFormProps } from 'types';

export const subscribeToNews = async (data: ISubscribeFormProps) => {
	try {
		await baseApi('http://localhost:8080/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			data,
		});
		return true;
	} catch (error) {
		console.error('Failed to subscribe:', error);
		return false;
	}
};
