import { baseApi } from '@api/baseApi';

type TConfirmCode = {
	status: number;
};

export const confirmCode = async (code: string, applicationId: string) => {
	try {
		const response: TConfirmCode = await baseApi(
			`http://localhost:8080/document/${applicationId}/sign/code`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: code,
			}
		);

		if (response.status == 200) {
			return {
				status: response.status,
			};
		}
	} catch (error) {
		console.log(error);
	}
};
