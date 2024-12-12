import { ErrorMessage, Loader } from '@ui';

export const CurrencyStatus = ({
	isLoading,
	error,
}: {
	isLoading: boolean;
	error: string | null;
}) => {
	if (isLoading) return <Loader />;
	if (error)
		return <ErrorMessage text='Error loading exchange rates:' error={error} />;
	return null;
};
