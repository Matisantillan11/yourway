import { Container, HStack, Image, useDisclosure } from '@chakra-ui/react'
import { IoCart } from 'react-icons/io5'
import { Hamburguer } from './Hamburguer'

//images
import logo from '../../assets/images/logo.png'
import { LoginModalComponent } from '../Modal/LoginModal.component'

export const HeaderComponent = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

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

        <Image src={logo} width={75} height={75} onClick={() => onOpen()} />

        <IoCart size={25} />
      </HStack>

      <LoginModalComponent open={isOpen} onClose={onClose} />
    </Container>
  )
}
