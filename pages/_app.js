import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import Footer from '../components/footer.js'
// import { AnimatePresence } from 'framer-motion'
const { AnimatePresence } = require('framer-motion');
// const { motion } = require("framer-motion");

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Fonts />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
          
    <Footer />
      </Layout>
    </ChakraProvider>
  )
}
export default Website
