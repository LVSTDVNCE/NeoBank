import { baseApi } from '@api/baseApi';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TStatus = {
	status: string;
};

type TApplication = {
	id: number;
	status: string;
	setId: (state: number) => void;
	fetchStatus: (id: string) => void;
};

export const useApplicationStore = create<TApplication>()(
	persist(
		set => ({
			id: 0,
			setId: newId => set({ id: newId }),
			status: '',
			fetchStatus: async (id: string) => {
				try {
					const response: TStatus = await baseApi(
						`http://localhost:8080/admin/application/${id}`,
						{
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);
					set({ status: response.status });
				} catch (error) {
					console.log(error);
					set({ status: '' });
				}
			},
		}),
		{
			name: 'application-storage',
		}
	)
);
