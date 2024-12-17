import { Home, Loan, NotFound } from '@pages/index';

export enum RoutePaths {
	HOME = '/',
	LOAN = '/loan',
	NOT_FOUND = '*',
}

export const ROUTES = [
	{
		path: RoutePaths.HOME,
		Component: Home,
	},
	{
		path: RoutePaths.LOAN,
		Component: Loan,
	},
	{
		path: RoutePaths.NOT_FOUND,
		Component: NotFound,
	},
];
