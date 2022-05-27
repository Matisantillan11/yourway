import { Container, Spinner, Text } from '@chakra-ui/react'
import { ItemCardController } from '../../controllers/Item/ItemCard.controller'
import { BannerHome } from './BannerHome'
import { Product } from '../../interfaces/interfaces'
import State from '../../store/reducers/interface.reducer'


export interface HomeProps {
  productList: Product[]
  productReducer: State
}

export const HomeComponents = ({ productList, productReducer }: HomeProps) => {
  return (
    <Container minHeight="100vh" maxWidth="100vw" backgroundColor="#f1f1f1" overflow='hidden' textAlign="center">
      {productReducer.fetching ? (
        <Spinner size="lg" position="absolute" top="35%" left="50%" />
      ) : (
        <>
          <BannerHome />
          <Text fontSize={25} fontWeight="bold" alignSelf="center" marginY="25px">Nuestros productos</Text>
          <Container
            minHeight="50vh"
            minWidth="100vw"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            padding={5}
          >
            {productList?.map((product: Product) => {
              return (
                <ItemCardController
                  title={product.name}
                  stock={product.stock}
                  pic={product.pic}
                  price={product.price}
                  id={product._id}
                  key={product._id}
                />
              )
            })}
          </Container>
        </>
      )}
    </Container>
  )
}
