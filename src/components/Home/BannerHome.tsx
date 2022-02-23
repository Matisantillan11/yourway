import { Box, Text, VStack } from '@chakra-ui/react'
import bannerHome from '../../assets/images/bannerHome.jpg'

export const BannerHome = () => {
  return (
    <Box
      height="90vh"
      minWidth="100vh"
      backgroundColor="red"
      backgroundSize="cover"
      backgroundImage={bannerHome}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <VStack
        justify="flex-start"
        align="flex-start"
        paddingY="15%"
        paddingX="5%"
      >
        <Text color="#f1f1f1" fontSize={35} marginBottom={-5}>
          Bienvenidx a nuestra tienda
        </Text>
        <Text color="#f1f1f1" fontSize={35}>
          Personaliza tu prenda y agregale tu propio estilo
        </Text>
      </VStack>
    </Box>
  )
}
