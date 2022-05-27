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
  textDecoration,
} from '@chakra-ui/react'
import { IoClose, IoHome, IoShirt, IoTrash } from 'react-icons/io5'
import { CartItemComponent } from '../Cart/CartItem.component'

export const CartDrawerComponent = ({ onClose, open, cart, onDelete, deleteCart, totalPrice }: any) => {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={open}>
      <DrawerContent
        height="90vh"
        minWidth="35vw"
        marginTop="10vh"
        background="#f1f1f1"
      >
        <DrawerHeader>
          <HStack justifyContent="space-between" alignItems="center">
            <Text alignSelf="left">
              Lista de productos
            </Text>

            <Text textDecoration="underline" fontWeight="light" fontSize="12px"
              onClick={deleteCart}
              _hover={{
                cursor:"pointer",
                color:"red",
                textDecorationColor: 'red'
              }}
            >
              Borrar carrito
            </Text>
          </HStack>
        </DrawerHeader>
        <DrawerBody
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {
            cart.length > 0 ? cart?.map((cartItem: any) => <CartItemComponent
              onDelete={onDelete} 
              id={cartItem.id}
              key={cartItem.id}
              image={cartItem.product.pic}
              title={cartItem.product.title}
              quantity={cartItem.quantity}
              price={cartItem.product.price}
            />) : (<Text>No agregaste productos al carrito.</Text>)
          }
        </DrawerBody>

        <DrawerFooter
          flexDir="column"
          justifyContent="center"
          alignItems="flex-start"
          marginBottom={10}
        >
          <Text>
            Precio total: <strong>{totalPrice}</strong>
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
