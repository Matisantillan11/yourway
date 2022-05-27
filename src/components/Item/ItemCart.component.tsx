import { Button, HStack, Image, Input, Text, VStack } from '@chakra-ui/react'
import { useCurrencyFormater } from '../../hooks/useCurrencyFormater'

export interface ItemCartProps {
  title: string
  pic: string
  quantity: number
  price: number
  /* 
  quantitySelected: number
  addQuantity: () => void
  substractQuantity: () => void */
}
export const ItemCartComponent = ({
  title,
  pic, 
  quantity,
  price
}: ItemCartProps) => {
  const formatedPrice = useCurrencyFormater(quantity * price)
  const unitPriceFormatted = useCurrencyFormater(price)
  return (
    <HStack
      w="100%"
      padding="20px 15px"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <HStack>
        <Image
          width={'100px'}
          height={'80px'}
          src={pic}
          alt={title}
        />
        <VStack 
        justifyContent="flex-start"
        alignItems="flex-start"
        >
          <Text>{title} ({quantity})</Text>
          <Text fontSize='11px' fontWeight="light">{unitPriceFormatted}/Unidad</Text>
        </VStack>
      </HStack>

      <Text fontWeight="bold">{formatedPrice}</Text>
      {/* <HStack>
        <Button
          border="2px solid #3866a3"
          width={'30px'}
          height={'30px'}
          disabled={quantitySelected > 1 ? false : true}
          onClick={substractQuantity}
        >
          -
        </Button>
        <Input
          type="number"
          fontSize={'12px'}
          width={'40px'}
          height={'30px'}
          isReadOnly
          max={stock}
          value={quantitySelected}
          textAlign="center"
        />
        <Button
          border="2px solid #3866a3"
          width={'30px'}
          height={'30px'}
           disabled={quantitySelected < stock ? false : true}
          onClick={addQuantity}
        >
          +
        </Button>
      </HStack> */}
    </HStack>
  )
}
