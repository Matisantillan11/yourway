import { Container, Image, Text, VStack } from '@chakra-ui/react'
//images
import logo from '../../assets/images/logo.png'
export const FooterComponent = () => {
  return (
    <Container minWidth="100vw" height="40vh" backgroundColor="#333">
      <VStack>
        <Image src={logo} width={100} height={100} />

        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="#f1f1f1" marginY={2} textAlign="center">
            Inicio
          </Text>
          <Text color="#f1f1f1" marginY={2} textAlign="center">
            Productos
          </Text>
          <Text color="#f1f1f1" marginY={2} textAlign="center">
            Sobre Nosotros
          </Text>
          <Text color="#f1f1f1" marginY={2} textAlign="center">
            Contactanos
          </Text>
        </Container>

        <Text color="#F1F1F1" fontSize={12} position="absolute" bottom={5}>
          In develop by @matisantillan11. Copyright © 2021
        </Text>
      </VStack>
    </Container>
  )
}
