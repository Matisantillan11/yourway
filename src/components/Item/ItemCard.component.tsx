import { Suspense, lazy } from 'react'
import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Input,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { Product } from '../../interfaces/interfaces'

const ImageCart = lazy(() => import('./ImageCart.component'))
export interface ItemCardProps {
  title: string
  stock: number
  pic: string
  price: number
  id: string
  quantitySelected: number
  addQuantity: () => void
  substractQuantity: () => void
  redirectToDetails: () => void
  addToCart: (payload: any, quantity: number) => void
}



export const ItemCardComponent = ({
  id,
  title,
  pic,
  stock,
  price,
  quantitySelected,
  addQuantity,
  substractQuantity,
  redirectToDetails,
  addToCart
}: ItemCardProps) => {
  return (
    <Box
      boxShadow="md"
      p="6"
      rounded="md"
      w={300}
      h={380}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      margin={5}
      borderRadius={13.8}
    >
      <Suspense fallback={<Spinner size="lg"/>}>
        <ImageCart redirectToDetails={redirectToDetails} pic={pic} />
      </Suspense>

      <Text textAlign="center" fontWeight="bold">
        {title}
      </Text>
      <Text textAlign="center">${price}</Text>

      <HStack>
        <Button
          border="2px solid #3866a3"
          disabled={quantitySelected > 1 ? false : true}
          onClick={substractQuantity}
        >
          -
        </Button>
        <Input
          readOnly
          type="number"
          width={20}
          max={stock}
          min={1}
          value={quantitySelected}
          textAlign="center"
        />
        <Button
          border="2px solid #3866a3"
          disabled={quantitySelected < stock ? false : true}
          onClick={addQuantity}
        >
          +
        </Button>
      </HStack>

      <Button
        border="2px solid #3866a3"
        _hover={{
          color: '#f1f1f1',
          right: 0,
          backgroundColor: '#3866a3',
        }}
        _before={{
          zIndex: -1,
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: '100%',
          background: '#3866a3',
          color: '#f1f1f1',
          transition: '0.3s ease-in',
        }}
        marginY={5}
        paddingY={2.5}
        w={180}
        onClick={() => addToCart({  
          _id: id,
          name: title,
          pic,
          stock,
          price 
        },
        quantitySelected)}
      >
        Agregar al carrito
      </Button>
    </Box>
  )
}
