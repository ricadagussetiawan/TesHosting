import { Box, Heading } from '@chakra-ui/react'


const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Heading variant="page-title">
        &copy; {new Date().getFullYear()} Ricad Agus Setiawan .  All Rights Reserved.
          </Heading>
    </Box>
  )
}

export default Footer
