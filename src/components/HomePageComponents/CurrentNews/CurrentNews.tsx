import { useFetch } from 'src/hooks/useFetch';
import { Slider } from '@ui';
import { fetchNews } from '@api/apiHome/fetchNews';
import { updateRequest } from '@helpers/updateRequest';
import { INewsArticleProps } from 'types';
import styles from './CurrentNews.module.scss';

export const CurrentNews = () => {
	const {
		data: news,
		isLoading,
		error,
	} = useFetch<INewsArticleProps[]>({
		asyncFunction: fetchNews,
		intervalMs: updateRequest(1000, 60, 15),
	});

	return (
		<section className={styles.news}>
			<h3 className={styles.news__heading}>
				Current news from the world of finance
			</h3>
			<p className={styles.news__para}>
				We update the news feed every 15 minutes. You can learn more by clicking
				on the news you are interested in.
			</p>
			{error ? (
				<p className={styles.news__error}>Failed to load news: {error}</p>
			) : (
				<Slider slides={news || []} isLoading={isLoading} />
			)}
		</section>
	);
};
