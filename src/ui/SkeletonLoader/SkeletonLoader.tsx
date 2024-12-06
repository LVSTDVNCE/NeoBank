import styles from './SkeletonLoader.module.scss';

type TSkeletonProps = {
	width?: string;
	height?: string;
};

export const SkeletonLoader = ({
	width = '100%',
	height = '40px',
}: TSkeletonProps) => {
	return (
		<div
			style={{ width: width, height: height }}
			className={styles.skeleton}
		></div>
	);
};
