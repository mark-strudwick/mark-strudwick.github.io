import Head from 'next/head';
import { motion } from 'framer-motion';
import { Box, Container } from '@chakra-ui/react';
import NavBar from './navbar';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children, router }: { children: any; [x: string]: any }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="homepage" />
        <meta name="author" content="Mark Strudwick" />
        <meta property="og:site_name" content="markstrudwick" />
        <meta property="og:type" content="website" />
        <title>Home</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <motion.article
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          {children}
        </motion.article>
      </Container>
    </Box>
  );
};

export default Layout;
