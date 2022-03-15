import { Button, HStack, Image, Input, Text, VStack } from '@chakra-ui/react'

interface Props {
  quantitySelected: number
  addQuantity: () => void
  substractQuantity: () => void
}
export const ItemCartComponent = ({
  quantitySelected,
  addQuantity,
  substractQuantity,
}: Props) => {
  return (
    <VStack>
      <Image
        width={'100px'}
        height={'80px'}
        src="https://firebasestorage.googleapis.com/v0/b/yourway-project.appspot.com/o/remera_fede.png?alt=media&token=485cec85-848f-43c5-a7ef-2e0e38e77936"
      />

      <Text>Remera Black</Text>
      <HStack>
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
          /* max={stock} */
          value={quantitySelected}
          textAlign="center"
        />
        <Button
          border="2px solid #3866a3"
          width={'30px'}
          height={'30px'}
          /* disabled={quantitySelected < stock ? false : true} */
          onClick={addQuantity}
        >
          +
        </Button>
      </HStack>
    </VStack>
  )
}
