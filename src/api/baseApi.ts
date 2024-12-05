import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const baseApi = async <T>(
	url: string,
	config?: AxiosRequestConfig
): Promise<T> => {
	try {
		const response: AxiosResponse<T> = await axios(url, config);
		return response.data;
	} catch (error) {
		console.error('API error:', error);
		throw error;
	}
};
