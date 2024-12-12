import { useEffect, useState } from 'react';

type TUseFetchProps<T> = {
	asyncFunction: () => Promise<T>;
	intervalMs?: number;
	immediate?: boolean;
};

export const useFetch = <T>({
	asyncFunction,
	intervalMs = 0,
	immediate = true,
}: TUseFetchProps<T>): {
	data: T | null;
	isLoading: boolean;
	error: string | null;
} => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(immediate);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const result = await asyncFunction();
				setData(result);
				setError(null);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error');
			} finally {
				setIsLoading(false);
			}
		};

		if (immediate) {
			fetchData();
		}

		if (intervalMs > 0) {
			const intervalId = setInterval(fetchData, intervalMs);
			return clearInterval(intervalId);
		}
	}, [asyncFunction, intervalMs, immediate]);

	return { data, isLoading, error };
};
