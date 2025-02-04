import { ReactNode, FC } from 'react';
import { useHover } from 'src/hooks/useHover';
import styles from './Tooltip.module.scss';

type TTooltipProps = {
	text: string;
	children: ReactNode;
};

export const Tooltip: FC<TTooltipProps> = ({ text, children }) => {
	const { isHover, bind } = useHover<HTMLDivElement>();

	return (
		<div className={styles.tooltipWrapper} {...bind}>
			{children}
			{isHover && <div className={styles.tooltipVisible}>{text}</div>}
		</div>
	);
};
