import Head from 'next/head'
//import dynamic from 'next/dynamic'
import NavBar from '../navbar'
// import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="akjsdakjdhkjahda1231987613218736aksdhaksjdhaud" href="akjsdakjdhkjahda1231987613218736aksdhaksjdhaud.ico" />
        <link rel="shortcut icon" href="/akjsdakjdhkjahda1231987613218736aksdhaksjdhaud.ico" type="image/x-icon" />
        <title>Ricad Agus Setiawan - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {/* <NoSsr> */}
          <VoxelDog />
        {/* </NoSsr> */}
        {children}
      </Container>
    </Box>
  )
}

export default Main
