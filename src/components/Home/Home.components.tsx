import { Container, Spinner } from '@chakra-ui/react'
import { ItemCardController } from '../../controllers/Item/ItemCard.controller'
import { BannerHome } from './BannerHome'
import { Product } from '../../interfaces/interfaces'
import productReducer from '../../store/reducers/product.reducer'
import State from '../../store/reducers/interface.reducer'

export interface HomeProps {
  productList: Product[]
  productReducer: State
}

export const HomeComponents = ({ productList, productReducer }: HomeProps) => {
  return (
    <Container minHeight="100vh" minWidth="100vw" backgroundColor="#f1f1f1">
      {productReducer.fetching ? (
        <Spinner size="lg" position="absolute" top="35%" left="50%" />
      ) : (
        <>
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
            {productList?.map((product: Product) => {
              return (
                <ItemCardController
                  title={product.name}
                  stock={product.stock}
                  pic={product.pic}
                  price={product.price}
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
