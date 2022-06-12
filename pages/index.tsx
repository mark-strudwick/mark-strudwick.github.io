import { NextPage } from 'next';
import { Link, Container, Heading, Box, Button, List, ListItem, Icon, useColorModeValue } from '@chakra-ui/react';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Section from '../components/section';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mt={4}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Software Enginereer based in the UK!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mark Strudwick
          </Heading>
          <p>Software Engineer</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I currently work as a Full-Stack Engineer, but building and designing backend services is my true passion. I
          love to architect new services from the ground-up using the latest cloud technologies (Serverless).
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2020</BioYear>
          Graduated in Computer Science, at Portsmouth University.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Full-Stack Software Developer at TableTop
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Software Developer at Transalis
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Full-Stack Software Engineer at Rest Less
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>Gaming, Motorsport (MotoGP &gt; F1), Technology</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mark-strudwick" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                @mark-strudwick
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/mark-strudwick/" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                @mark-strudwick
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Home;
