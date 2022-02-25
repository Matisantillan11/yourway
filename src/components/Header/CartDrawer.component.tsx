import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Image,
  HStack,
  Container,
  Button,
} from '@chakra-ui/react'
import { IoClose, IoHome, IoShirt, IoTrash } from 'react-icons/io5'

export const CartDrawerComponent = ({ onClose, open }: any) => {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={open}>
      <DrawerContent
        height="90vh"
        minWidth="35vw"
        marginTop="10vh"
        background="#f1f1f1"
      >
        <DrawerHeader>
          <Text marginTop={5} alignSelf="left">
            Lista de productos
          </Text>
        </DrawerHeader>
        <DrawerBody
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <HStack width="100%">
            <Image
              width={'100px'}
              height={'80px'}
              src="https://firebasestorage.googleapis.com/v0/b/yourway-project.appspot.com/o/remera_fede.png?alt=media&token=485cec85-848f-43c5-a7ef-2e0e38e77936"
            />

            <Text>Remera Black</Text>
            <Text>X2</Text>

            <HStack position="absolute" right={10} w={100}>
              <Text fontWeight="bold">$2500</Text>
              <IoTrash size={25} />
            </HStack>
          </HStack>
        </DrawerBody>

        <DrawerFooter
          flexDir="column"
          justifyContent="center"
          alignItems="flex-start"
          marginBottom={10}
        >
          <Text>
            Precio total: <strong>$2500</strong>
          </Text>

          <Button
            backgroundColor="#333"
            color="white"
            marginX="auto"
            width="60%"
            marginY={5}
          >
            Continuar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
