import { INewsArticleProps } from 'types';
import { baseApi } from '@api/baseApi';

type TNewsResponseProps = {
	status: string;
	articles: INewsArticleProps[];
};

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async (
	country: string = 'us',
	category: string = 'business'
): Promise<INewsArticleProps[]> => {
	const url = `${NEWS_API_URL}?country=${country}&category=${category}&apiKey=${API_KEY}`;

	try {
		const response = await baseApi<TNewsResponseProps>(url);

		if (response.statusCode === 200) {
			const articles = response.data.articles;

			const results = await Promise.allSettled(
				articles.map(article => {
					return new Promise<INewsArticleProps>((resolve, reject) => {
						if (
							article.urlToImage &&
							article.title &&
							article.description &&
							article.url
						) {
							resolve(article);
						} else {
							reject(
								new Error(
									`Missing required fields for article: ${article.title}`
								)
							);
						}
					});
				})
			);

			const filteredArticles = results
				.filter(result => result.status === 'fulfilled')
				.map(
					result => (result as PromiseFulfilledResult<INewsArticleProps>).value
				);

			return filteredArticles;
		} else {
			console.error(
				'Error fetching news: Invalid response status',
				response.statusCode
			);
			return [];
		}
	} catch (error) {
		console.error('Error fetching news:', error);
		return [];
	}
};
