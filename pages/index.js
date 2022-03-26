import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  List,
  Link,
  Icon,
  ListItem,
  useColorModeValue,
  
} from '@chakra-ui/react'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article.js'
import {
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoTiktok,
  IoLogoPlaystation,
  IoLogoPinterest
} from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'


function Page() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Im From Indonesian , In DKI Jakarta
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-tittle">
              Ricad Agus Setiawan
            </Heading>
            <p>( Developer / Designer UI/UX )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/takuya.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-tittle">
            Work
          </Heading>
          <Paragraph>
            Ricad is a freelance and a full-stack developer based in Jakarta with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out with his camera. Currently, he is
            living off of his own product called{' '}
            <NextLink href="/works/inkdrop">
              <Link>Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-tittle">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Jakarta , Indonesia .
          </BioSection>

          <BioSection>
            <BioYear>2022</BioYear>
            Completed the Master&apos;s Program in the Graduate School Of
            informatics Science at STIE & STMIK Jayakarta
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music,{' '}
            <Link href="" target="_blank">
              Drawing
            </Link>
            , Playing Drums,{' '}
            <Link href="" target="_blank">
              Photography
            </Link>
              <Link href="https://r.honeygain.me/ICHAC9FB8D" target="_blank">
              , GET 5$ Click Here
            </Link>
            , Google Machine Learning
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-tittle">
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/icat108" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @icat108
                </Button>
              </Link>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Link
                href="https://api.whatsapp.com/send?phone=6281292931896"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoWhatsapp} />}
                >
                  +62 812 xxxx xxx
                </Button>
              </Link>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Link href="https://www.tiktok.com/@ytaccount70" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTiktok} />}
                >
                  Tiktok
                </Button>
              </Link>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Link
                href="https://www.playstation.com/en-us/ps5/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoPlaystation} />}
                >
                  Playstation
                </Button>
              </Link>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Link
                href="https://id.pinterest.com/ichacnakval/_saved/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoPinterest} />}
                >
                  Pinterest
                </Button>
              </Link>
            </ListItem>
          </List>

          

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>

        </Section>
      </Container>
    </Layout>
      
  )
}
              
export default Page
export { getServerSideProps } from '../components/chakra'
