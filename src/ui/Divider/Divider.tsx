import styles from './Divider.module.scss';

type TDividerProps = {
	color?: string;
	margin?: string;
	display?: string;
};

export const Divider = ({
	color = '#000',
	margin = '0px',
	display,
}: TDividerProps) => {
	const dividerStyle = {
		backgroundColor: color,
		margin: margin,
		display: display,
	};

	return <div className={styles.divider} style={dividerStyle} />;
};
