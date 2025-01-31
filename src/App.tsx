import { AppRouter } from '@routes';
import { useEffect } from 'react';
import { useApplicationStore } from './store/ApplicationStore';

export function App() {
	const { fetchStatus, id, status } = useApplicationStore();

	useEffect(() => {
		if (id !== 0) {
			fetchStatus(id.toString());
		}
	}, [status, id, fetchStatus]);
	console.log('id:', id, 'status:', status);
	return <AppRouter />;
}
