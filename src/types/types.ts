export interface ICurrencyRateProps {
	currency: string;
	rate: number;
}

export interface INavBarProps {
	id: number;
	link: string;
	text: string;
}

export interface INewsArticleProps {
	title: string;
	description: string | null;
	url: string;
	urlToImage: string | null;
}
