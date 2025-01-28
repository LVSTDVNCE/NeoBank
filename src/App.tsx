import { AppRouter } from '@routes';
import { useEffect } from 'react';
import { useApplicationStore } from './store/LoanStepStore';

export function App() {
	const { fetchStatus, id, status } = useApplicationStore();

	useEffect(() => {
		if (id === 0) {
			return;
		} else {
			fetchStatus(id.toString());
		}
	}, []);
	console.log('id:', id, 'status:', status);
	return <AppRouter />;
}
