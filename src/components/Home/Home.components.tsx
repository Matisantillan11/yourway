import { Container } from '@chakra-ui/react'
import { ItemCardController } from '../../controllers/Item/ItemCard.controller'
import { BannerHome } from './BannerHome'
export const HomeComponents = () => {
  return (
    <Container minHeight="100vh" minWidth="100vw" backgroundColor="#f1f1f1">
      <BannerHome />
      <Container
        minHeight="50vh"
        minWidth="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        padding={5}
      >
        <ItemCardController />
        <ItemCardController />
        <ItemCardController />
        <ItemCardController />
        <ItemCardController />
        <ItemCardController />
        <ItemCardController />
        <ItemCardController />
        <ItemCardController />
        <ItemCardController />
      </Container>
    </Container>
  )
}
