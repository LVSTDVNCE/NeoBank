import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const baseApi = async <T>(
	url: string,
	config?: AxiosRequestConfig
): Promise<{ data: T; statusCode: number }> => {
	try {
		const response: AxiosResponse<T> = await axios(url, config);
		return { data: response.data, statusCode: response.status };
	} catch (error) {
		console.error('API error:', error);
		throw error;
	}
};
