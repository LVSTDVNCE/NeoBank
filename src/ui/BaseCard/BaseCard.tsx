import { FC, ReactNode } from 'react';
import styles from './BaseCard.module.scss';

type TBaseCardProps = {
	children?: ReactNode;
	classNameProps: string;
};

export const BaseCard: FC<TBaseCardProps> = ({ children, classNameProps }) => {
	return <article className={styles[classNameProps]}>{children}</article>;
};
