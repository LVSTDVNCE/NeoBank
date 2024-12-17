import { Button } from '@ui';
import Oops from '@assets/images/png/Oops.png';
import styles from './PageNotFound.module.scss';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<section className={styles.NotFound}>
			<div className={styles.NotFound__wrapper}>
				<h1 className={styles.NotFound__heading}>Oops....</h1>
				<p className={styles.NotFound__title}>Page not found</p>
				<p className={styles.NotFound__para}>
					This Page doesn`t exist or was removed! We suggest you go back.
				</p>
				<Button onClick={goBack} stylesProps='buttonNotFound' text='Go back' />
			</div>
			<img src={Oops} alt='page not found' />
		</section>
	);
};
