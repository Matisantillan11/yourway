import {
  Button,
  HStack,
  VStack,
  Text,
  Input,
  Image,
  Container,
} from '@chakra-ui/react'
import { IoTrash } from 'react-icons/io5'
import { CartDrawerProps } from '../../controllers/Header/CartDrawer.controller'
import { ItemCartController } from '../../controllers/Item/ItemCart.controller'
import { CartItemContext } from '../../interfaces/cart.interface'

export interface CheckoutInfoComponentInterface {
  cart: CartItemContext[],
  totalPrice: string
}

export const CheckoutInfoComponent = ({cart, totalPrice}: CheckoutInfoComponentInterface) => {
  console.log({cart})
  return (
    <Container
      backgroundColor="white"
      borderRadius="11px"
      padding="20px 15px"
      display="flex"
      minH='250px'
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      {cart.length > 0 ? cart?.map((item: CartItemContext) =>(
        <ItemCartController title={item.product.name} pic={item.product.pic} price={item.product.price} quantity={item.quantity}/>
      )) : <Text marginLeft={'15px'}> No agregaste productos al carrito</Text>}
      <Container
      display="flex"
      padding="20px 15px"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginTop={25}>
        <Text marginLeft="20px"fontWeight="bold">Total </Text>
        <Text fontWeight="bold">{totalPrice}</Text>
      </Container>
    </Container>
  )
}
