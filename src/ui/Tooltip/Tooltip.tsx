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
			<div className={isHover ? styles.tooltipVisible : styles.tooltip}>
				{text}
			</div>
		</div>
	);
};
