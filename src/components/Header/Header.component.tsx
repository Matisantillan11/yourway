import { Container, HStack, Image } from '@chakra-ui/react'
import { IoCart } from 'react-icons/io5'
import { Hamburguer } from './Hamburguer'

//images
import logo from '../../assets/images/logo.png'

export const HeaderComponent = () => {
  return (
    <Container
      minWidth="100vw"
      minHeight="10vh"
      position="fixed"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#f1f1f1"
    >
      <HStack
        spacing={'auto'}
        padding={0}
        width={'100%'}
        flexDirection={'row'}
        justifyContent="center"
        alignItems="center"
      >
        <Hamburguer />

        <Image src={logo} width={75} height={75} />

        <IoCart size={25} />
      </HStack>
    </Container>
  )
}
