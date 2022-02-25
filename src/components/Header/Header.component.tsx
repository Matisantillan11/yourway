import { Container, HStack, Image, useDisclosure } from '@chakra-ui/react'
import { IoCart, IoMenu } from 'react-icons/io5'

//images
import logo from '../../assets/images/logo.png'
import { DrawerComponent } from './Drawer.component'
import { CartDrawerComponent } from './CartDrawer.component'
export const HeaderComponent = () => {
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure()
  const {
    isOpen: isOpenCartDrawer,
    onOpen: onOpenCartDrawer,
    onClose: onCloseCartDrawer,
  } = useDisclosure()

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
      zIndex={9}
    >
      <HStack
        spacing={'auto'}
        padding={0}
        width={'100%'}
        flexDirection={'row'}
        justifyContent="center"
        alignItems="center"
      >
        <IoMenu size={35} color="#7C7979" onClick={onOpenDrawer} />

        <Image src={logo} width={75} height={75} />

        <IoCart size={25} color="#7C7979" onClick={onOpenCartDrawer} />
      </HStack>

      <DrawerComponent open={isOpenDrawer} onCloseDrawer={onCloseDrawer} />
      <CartDrawerComponent
        open={isOpenCartDrawer}
        onClose={onCloseCartDrawer}
      />
    </Container>
  )
}
