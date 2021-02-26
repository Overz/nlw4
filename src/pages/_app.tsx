import React, { PropsWithChildren } from 'react';
import { ChallangesProvider } from '../contexts/challange-context';

import '../styles/global.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const App: React.FC<PropsWithChildren<any>> = ({ Component, pageProps }) => {
  return (
    <ChallangesProvider>
      <Component {...pageProps} />
    </ChallangesProvider>
  );
};

export default App;
