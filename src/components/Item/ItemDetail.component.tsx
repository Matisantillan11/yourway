import { Box, Container, Image, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,Select, Spinner, Text, Button } from '@chakra-ui/react'
import { Fragment } from 'react'
import { FooterController } from '../../controllers/Footer/Footer.controller'
import { HeaderController } from '../../controllers/Header/Header.controller'
import { useCurrencyFormater } from '../../hooks/useCurrencyFormater'
import { Product } from '../../interfaces/interfaces'

export interface ItemDetailProps {
  product: Product
  status: boolean
}

export const ItemDetailComponent = ({ product, status}: ItemDetailProps) => {
  const currentPrice = useCurrencyFormater(product?.price)

  return (
    <Fragment>
      {
        status ? (
          <Container width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <Spinner size="lg" />
          </Container>
        ) : (
            <Fragment>
              <HeaderController />
              
              <Container padding="15vh" minWidth="100vw" background="#f1f1f1" display="flex" justifyContent="center" alignItems="center">
                <Container display="flex" flexDir="column" justifyContent="center" alignItems="center" w="500px" h="500px" margin={5}>
                  <Image src={product.pic} alt={product.name}/>
                  <Text fontSize="14px" fontWeight="400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut fuga officiis a consequuntur labore debitis voluptatem atque blanditiis excepturi deleniti, ab fugiat iste saepe dolores sit earum eligendi non error praesentium inventore repudiandae veniam! Nemo pariatur rerum dolorem impedit voluptatibus numquam accusantium enim officiis! Exercitationem est distinctio fugiat eius optio?</Text>
                </Container>
                <Container display="flex" flexDir="column" w="500px" h="500px" margin={5} padding="35px">
                  <Text fontSize="24px" fontWeight="bold" marginY="15px">{product?.name}</Text>
                  <Text fontSize="18px" fontWeight="500" marginY="10px">{currentPrice}</Text>
                  <Box marginY="15px">
                    <Text fontSize="12px" fontWeight="200">Talle</Text>
                    <Select borderColor="gray.500">
                      <option>XXXS</option>
                      <option>XXS</option>
                      <option>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                      <option>XXXL</option>
                    </Select>
                 </Box>

                 <Box marginY="15px">
                    <Text fontSize="12px" fontWeight="200">Cantidad</Text>
                    <NumberInput defaultValue={1} min={1} max={product.stock} w="75px" borderColor="gray.500">
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                    </NumberInput>
                 </Box>
                 
                 <Button  background='#3866a3' color="white" fontWeight="500">Agregar al carrito</Button>
                </Container>
              </Container>
              <FooterController />
            
            </Fragment>
          
        )
      }
    </Fragment>
  )
}
