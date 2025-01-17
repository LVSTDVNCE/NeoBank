import { Button, Divider } from '@ui';
import { useState } from 'react';
import styles from './Tabs.module.scss';

type TTabsProps = {
	tabs: { label: string; content: () => JSX.Element }[];
};

export const Tabs = ({ tabs }: TTabsProps) => {
	const [activeTab, setActiveTab] = useState(0);
	const TAB_COMPONENT = tabs[activeTab].content;

	return (
		<section>
			<div>
				<div className={styles.ButtonWrapper}>
					{tabs.map((tab, index) => (
						<Button
							key={tab.label}
							onClick={() => setActiveTab(index)}
							stylesProps={activeTab === index ? 'activeTabBtn' : 'TabBtn'}
							text={tab.label}
						/>
					))}
				</div>
				<Divider styleProps={styles.TabsDivider} />
			</div>
			<TAB_COMPONENT />
		</section>
	);
};
