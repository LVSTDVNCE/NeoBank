import Spinner from '@assets/icons/Spinner.svg';
import styles from './Loader.module.scss';

export const Loader = () => {
	return <img className={styles.loader} src={Spinner} alt='spinner' />;
};
