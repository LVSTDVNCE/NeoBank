import { ReactNode, FC } from 'react';
import styles from './Table.module.scss';

type TTableProps = {
	children: ReactNode;
	styleProps: string;
};

export const Table: FC<TTableProps> = ({ children, styleProps }) => {
	return <table className={`${styles.table} ${styleProps}`}>{children}</table>;
};
