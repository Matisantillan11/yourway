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
} from '@chakra-ui/react'
import { IoClose, IoHome, IoShirt } from 'react-icons/io5'

export const DrawerComponent = ({ onClose, open }: any) => {
  console.log({ open })
  return (
    <Drawer placement="left" onClose={onClose} isOpen={open}>
      <DrawerOverlay />
      <DrawerContent background="#333">
        <DrawerHeader>
          <IoClose size={35} color="#7C7979" onClick={onClose} />
        </DrawerHeader>
        <DrawerBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="#f1f1f1" marginY={20}>
            Ingresar
          </Text>
          <HStack>
            <Text color="#f1f1f1" marginY={20}>
              Inicio
            </Text>
            <IoHome size={20} color="#f1f1f1" />
          </HStack>
          <HStack>
            <Text color="#f1f1f1" marginY={20}>
              Productos
            </Text>
            <IoShirt size={20} color="#f1f1f1" />
          </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
