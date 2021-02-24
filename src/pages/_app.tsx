import React, { PropsWithChildren, ReactNode } from 'react';

import '../styles/global.css';

const App: React.FC<PropsWithChildren<any>> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
