import { AppProps } from "next/app";
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;

// const App = ({ Component, pageProps }: AppProps) => {
//   return (
//     <Component {...pageProps} />
//   );
// };

// export default App;
