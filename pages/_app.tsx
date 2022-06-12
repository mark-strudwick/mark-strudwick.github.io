import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../components/fonts';
import Layout from '../components/layout';
import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
