import { ReactNode, FC } from 'react';

type TTableProps = {
	children: ReactNode;
	styleProps: string;
};

export const Table: FC<TTableProps> = ({ children, styleProps }) => {
	return <table className={`${styleProps}`}>{children}</table>;
};
