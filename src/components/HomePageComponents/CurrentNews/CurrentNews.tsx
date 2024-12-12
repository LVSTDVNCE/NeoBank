import { useFetch } from 'src/hooks/useFetch';
import { ErrorMessage, Slider } from '@ui';
import { apiHome } from '@api/apiHome';
import { updateRequest } from '@helpers/updateRequest';
import { INewsArticleProps } from 'types';
import styles from './CurrentNews.module.scss';

export const CurrentNews = () => {
	const MS = 1000,
		SECONDS = 60,
		MINUTES = 15;

	const {
		data: news,
		isLoading,
		error,
	} = useFetch<INewsArticleProps[]>({
		asyncFunction: apiHome.fetchNews,
		intervalMs: updateRequest(MS, SECONDS, MINUTES),
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
				<ErrorMessage text='Failed to load news:' error={error} />
			) : (
				<Slider slides={news || []} isLoading={isLoading} />
			)}
		</section>
	);
};
