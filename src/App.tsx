import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize.ts';

import {PATH} from './common/enums/enums.ts';
import {ChromeExtension} from './components/chromeExtension/chromeExtension.tsx';
import {PriceComparison} from './components/priceComparison/priceComparison.tsx';
import {Blog} from './components/blog/blog.tsx';
import {Header} from './components/header/header.tsx';
import {Footer} from './components/footer/footer.tsx';

import s from './App.module.scss';

export interface IsMobileType {
    isMobile: boolean,
}

export const App = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width && windowSize.width <= 1152) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [windowSize.width]);

    return (
        <>
            <div className={s.wrapper}>
                <Header isMobile={isMobile}/>
                <Routes>
                    <Route path={PATH.CHROMEEXTENSION} element={<ChromeExtension isMobile={isMobile}/>}/>
                    <Route path={PATH.PRICECOMPARISON} element={<PriceComparison/>}/>
                    <Route path={PATH.BLOG} element={<Blog/>}/>
                </Routes>
                <Footer isMobile={isMobile}/>
            </div>
        </>
    );
};
