import { Container, Box, useColorModeValue } from '@chakra-ui/react';
import ThemeToggleButton from './theme-toggle-button';

const NavBar = (props: any) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      {/* @ts-ignore */}
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        {/* @ts-ignore */}
        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
