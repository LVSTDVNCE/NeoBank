import {
	Home,
	Loan,
	NotFound,
	LoanApplicationId,
	LoanDocument,
	LoanSign,
	LoanCode,
} from '@pages/index';

export enum RoutePaths {
	HOME = '/',
	NOT_FOUND = '*',
	LOAN = '/loan',
	LOAN_APP_ID = '/loan/:id',
	LOAN_APP_ID_DOCUMENT = '/loan/:id/document',
	LOAN_APP_ID_DOCUMENT_SIGN = '/loan/:id/document/sign',
	LOAN_APP_ID_CODE = '/loan/:id/code',
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
	{
		path: RoutePaths.LOAN_APP_ID,
		Component: LoanApplicationId,
	},
	{
		path: RoutePaths.LOAN_APP_ID_DOCUMENT,
		Component: LoanDocument,
	},
	{
		path: RoutePaths.LOAN_APP_ID_DOCUMENT_SIGN,
		Component: LoanSign,
	},
	{
		path: RoutePaths.LOAN_APP_ID_CODE,
		Component: LoanCode,
	},
];
