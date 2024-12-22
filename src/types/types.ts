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
	middleName: string | null;
	email: string;
	birthdate: string | Date;
	passportSeries: string;
	passportNumber: string;
}
