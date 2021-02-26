import React, { PropsWithChildren } from 'react';

import '../styles/global.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const App: React.FC<PropsWithChildren<any>> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
