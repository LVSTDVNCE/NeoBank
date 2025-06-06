export interface ICurrencyRateProps {
	currency: string;
	rate: number;
}

export interface INewsArticleProps {
	title: string;
	description: string | null;
	url: string;
	urlToImage: string | null;
}

export interface IPrescoringFormProps {
	amount: number;
	term: number;
	firstName: string;
	lastName: string;
	middleName?: string | null;
	email: string;
	birthdate: string | Date;
	passportSeries: string;
	passportNumber: string;
}

export interface ISubscribeFormProps {
	email: string;
}

export interface IOffersProps {
	applicationId: number;
	isInsuranceEnabled: boolean;
	isSalaryClient: boolean;
	monthlyPayment: number;
	rate: number;
	requestedAmount: number;
	term: number;
	totalAmount: number;
}

type TEmploymentProps = {
	employmentStatus: string;
	employerINN: string;
	salary: number;
	position: string;
	workExperienceTotal: number;
	workExperienceCurrent: number;
};

export interface ILoanSecondStepProps {
	gender: string;
	maritalStatus: string;
	dependentAmount: number;
	passportIssueDate: string | Date;
	passportIssueBranch: string;
	employment: TEmploymentProps;
}

export interface IPaymentScheduleRowProps {
	number: number;
	date: string;
	totalPayment: number;
	interestPayment: number;
	debtPayment: number;
	remainingDebt: number;
}

export interface IPaymentScheduleProps {
	credit: {
		paymentSchedule: IPaymentScheduleRowProps[];
	};
}
