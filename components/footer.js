import { Box } from '@chakra-ui/react'


const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" as="h2" variant="page-title">

        &copy; {new Date().getFullYear()} Ricad Agus Setiawan .  All Rights Reserved.
          
    </Box>
  )
}

export default Footer
