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
import { ItemCartController } from '../../controllers/Item/ItemCart.controller'

export const CheckoutInfoComponent = () => {
  return (
    <Container
      backgroundColor="white"
      borderRadius="11px"
      padding="20px 15px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
    >
      <ItemCartController />
      <HStack position="absolute" right={10} w={100}>
        <Text fontWeight="bold">$2500</Text>
        <IoTrash size={25} />
      </HStack>
    </Container>
  )
}
