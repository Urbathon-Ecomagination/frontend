import React from 'react';
import type { AppProps } from 'next/app';
import '@styles/global.scss';

import '@assets/fonts/montserrat.css';
import '@assets/fonts/open-sans.css';

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
