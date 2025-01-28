import { useCallback, useEffect, useRef, useState } from 'react';

const useHover = <T extends HTMLElement>() => {
	const [isHover, setIsHover] = useState(false);
	const ref = useRef<T | null>(null);

	const onMouseEnter = useCallback(() => {
		setIsHover(true);
	}, []);

	const onMouseLeave = useCallback(() => {
		setIsHover(false);
	}, []);

	useEffect(() => {
		const element = ref.current;

		if (element) {
			element?.addEventListener('mouseenter', onMouseEnter);
			element?.addEventListener('mouseleave', onMouseLeave);

			return () => {
				element?.removeEventListener('mouseenter', onMouseEnter);
				element?.removeEventListener('mouseleave', onMouseLeave);
			};
		}
	}, [onMouseEnter, onMouseLeave]);

	return { isHover, bind: { onMouseEnter, onMouseLeave } };
};

export { useHover };
