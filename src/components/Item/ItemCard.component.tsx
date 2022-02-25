import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'

export const ItemCardComponent = () => {
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
      <Container width={300} height={240} margin={0}>
        <Image
          margin={0}
          width={300}
          height={240}
          src="https://firebasestorage.googleapis.com/v0/b/yourway-project.appspot.com/o/remera_fede.png?alt=media&token=485cec85-848f-43c5-a7ef-2e0e38e77936"
        />
      </Container>

      <Text textAlign="center">Item Title</Text>

      <HStack>
        <Button>-</Button>
        <Input
          type="number"
          width={20}
          defaultValue={1}
          textAlign="center"
          readOnly
        />
        <Button>+</Button>
      </HStack>

      <Button marginY={5} w={180}>
        Agregar al carrito
      </Button>
    </Box>
  )
}
