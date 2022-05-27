import { Container, HStack, Image, Text, useDisclosure } from '@chakra-ui/react'
import { IoCart, IoMenu } from 'react-icons/io5'

//images
import logo from '../../assets/images/logo.png'
import { DrawerComponent } from './Drawer.component'
import { CartDrawerComponent } from './CartDrawer.component'
import { DrawerController } from '../../controllers/Header/Drawer.controller'
import { CartDrawerController } from '../../controllers/Header/CartDrawer.controller'
import { Link } from 'react-router-dom'
export const HeaderComponent = (total: any) => {
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
      maxWidth="100vw"
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

        <Link to="/">
          <Image src={logo} width={75} height={75} />
        </Link>
        <Container w={65} h={55} display="flex" flexDir="column" alignItems="flex-start" textAlign="right">
          <Text alignSelf="flex-end">{ total.total }</Text>
          <IoCart size={25} color="#7C7979" onClick={onOpenCartDrawer} />
        </Container>
      </HStack>

      <DrawerController isOpen={isOpenDrawer} onCloseDrawer={onCloseDrawer} />
      <CartDrawerController
        open={isOpenCartDrawer}
        onClose={onCloseCartDrawer}
      />
    </Container>
  )
}
