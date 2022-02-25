import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  HStack,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { IoClose, IoHome, IoShirt } from 'react-icons/io5'
import { LoginModalComponent } from '../Modal/LoginModal.component'

export const DrawerComponent = ({ onCloseDrawer, open, ModalOpen }: any) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <Drawer placement="left" onClose={onCloseDrawer} isOpen={open}>
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
            <Button
              onClick={onOpen}
              background="transparent"
              _hover={{ background: 'transparent' }}
              marginY={20}
            >
              <Text color="#f1f1f1">Ingresar</Text>
            </Button>
            <Button
              onClick={onOpen}
              background="transparent"
              _hover={{ background: 'transparent' }}
              marginY={20}
            >
              <HStack>
                <Text color="#f1f1f1">Inicio</Text>
                <IoHome size={20} color="#f1f1f1" />
              </HStack>
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
      <LoginModalComponent open={isOpen} onClose={onClose} />
    </>
  )
}
