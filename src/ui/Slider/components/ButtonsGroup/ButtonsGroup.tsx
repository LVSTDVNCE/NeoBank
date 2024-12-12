import { Button } from '@ui';
import styles from './ButtonsGroup.module.scss';

type TButtonsGroupProps = {
	id: number;
	onClick: () => void;
	disabled: boolean;
	icon: string;
};

export const ButtonsGroup = ({ config }: { config: TButtonsGroupProps[] }) => {
	return (
		<div className={styles.slider__buttonWrapper}>
			{config.map(button => (
				<Button
					key={button.id}
					stylesProps='newsButton'
					onClick={button.onClick}
					disabled={button.disabled}
				>
					<img src={button.icon} alt='arrow-icon' />
				</Button>
			))}
		</div>
	);
};
