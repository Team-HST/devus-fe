import React, { useEffect, useState } from 'react';
import type { AppProps, AppContext } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import '../styles/globals.scss';
// import '../styles/main/main.scss';
interface AppInitProps extends AppProps {
  isSSRMobile: boolean;
  mode: string;
}

const queryClient = new QueryClient();

function DevUs({ Component, pageProps, isSSRMobile, mode }: AppInitProps) {
  const [isMobile, setIsMobile] = useState(isSSRMobile);

  useEffect(() => {
    if (mode === 'CSR') {
      setIsMobile(navigator.userAgent.indexOf('Mobi') > -1);
    }
  }, [mode]);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...{ ...pageProps, isMobile }} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

DevUs.getInitialProps = async ({ ctx: { req } }: AppContext) => {
  let isSSRMobile = false;
  let mode = 'SSR';
  // mobile 유무 체크
  if (req && req.headers['user-agent']) {
    isSSRMobile = req.headers['user-agent'].indexOf('Mobi') > -1;
  } else {
    mode = 'CSR';
  }

  return { isSSRMobile, mode };
};

export default DevUs;
