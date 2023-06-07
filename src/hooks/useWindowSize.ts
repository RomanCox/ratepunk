import {useState, useEffect} from 'react';

interface WindowSizeType {
    width: number,
    height: number,
}

const useWindowSize = () => {
	const getWindowSize = (): WindowSizeType => ({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const [windowSize, setWindowSize] = useState<WindowSizeType>(getWindowSize());

	useEffect(() => {
		const resizeHandler = () => { setWindowSize(getWindowSize()); };
		window.addEventListener('resize', resizeHandler);
		resizeHandler();
		return () => { window.removeEventListener('resize', resizeHandler); };
	}, []);
	return windowSize;
};

export default useWindowSize;