import styles from './Divider.module.scss';

type TDividerProps = {
	styleProps: string;
};

export const Divider = ({ styleProps }: TDividerProps) => {
	return <div className={`${styles.Divider}  ${[styleProps]}`} />;
};
