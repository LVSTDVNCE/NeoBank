type TDividerProps = {
	color?: string;
	margin?: string;
	display?: string;
	height?: string;
	width?: string;
};

export const Divider = ({
	color = '#000',
	margin = '0px',
	display,
	height = '1px',
	width = '100%',
}: TDividerProps) => {
	const dividerStyle = {
		backgroundColor: color,
		margin: margin,
		display: display,
		height: height,
		width: width,
	};

	return <div style={dividerStyle} />;
};
