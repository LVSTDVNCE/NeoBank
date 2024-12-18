import { ReactNode, useState, FC } from 'react';
import styles from './Tooltip.module.scss';

type TTooltipProps = {
	text: string;
	children: ReactNode;
};

export const Tooltip: FC<TTooltipProps> = ({ text, children }) => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			className={styles.tooltipWrapper}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
		>
			{children}
			{visible && <div className={styles.tooltip}>{text}</div>}
		</div>
	);
};
