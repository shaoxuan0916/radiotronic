import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import Header from './Header'

import Footer from '../../components/Footer'

interface Props {}

const BaseLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  )
}

export default BaseLayout
