import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Text,
  HStack,
  Button,
  useDisclosure,
  VStack,
  Avatar,
} from '@chakra-ui/react'
import { IoClose, IoHome, IoShirt } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { LoginModalController } from '../../controllers/Modal/LoginModal.controller'

export const DrawerComponent = ({
  onCloseDrawer,
  isOpenDrawer,
  user,
  closeSession,
  ModalOpen,
}: any) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const openModal = () => {
    onCloseDrawer()
    onOpen()
  }

  return (
    <>
      <Drawer placement="left" onClose={onCloseDrawer} isOpen={isOpenDrawer}>
        <DrawerOverlay />
        <DrawerContent background="#333">
          <DrawerHeader>
            <IoClose size={35} color="#7C7979" onClick={onCloseDrawer} />
          </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {user && (
              <VStack position="absolute" top="55px" marginBottom="175px">
                <Avatar
                  width="100px"
                  height="100px"
                  src="https://bit.ly/broken-link"
                />
                <Text color="white">{user.name + ' ' + user.lastname}</Text>
              </VStack>
            )}

            <Button
              onClick={user ? closeSession : openModal}
              background="transparent"
              _hover={{ background: 'transparent' }}
              marginY={20}
            >
              <Text color="#f1f1f1">
                {user !== null ? 'Cerrar Sesión' : 'Ingresar'}
              </Text>
            </Button>
            <Button
              onClick={onOpen}
              background="transparent"
              _hover={{ background: 'transparent' }}
              marginY={20}
            >
              <Link to="/">
                <HStack>
                  <Text color="#f1f1f1">Inicio</Text>
                  <IoHome size={20} color="#f1f1f1" />
                </HStack>
              </Link>
            </Button>
            <Button
              onClick={onOpen}
              background="transparent"
              _hover={{ background: 'transparent' }}
              marginY={20}
            >
              <HStack>
                <Text color="#f1f1f1">Productos</Text>
                <IoShirt size={20} color="#f1f1f1" />
              </HStack>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <LoginModalController isOpen={isOpen} onClose={onClose} />
    </>
  )
}
