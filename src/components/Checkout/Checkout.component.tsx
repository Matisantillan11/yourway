import {
  Button,
  Container,
  HStack,
  Input,
  Select,
  Text,
} from '@chakra-ui/react'
import Card from 'react-credit-card-flipping'
import { CheckoutInfoController } from '../../controllers/Checkout/CheckoutInfo.controller'

interface CheckoutProps {
  cardNumber: string
  name: string
  expireMonth: string
  expireYear: string
  cvv: string
  cardFocusCVV: boolean
  setCardNumber: any
  setName: any
  setExpireMonth: any
  setExpireYear: any
  setCvv: any
  setCardFocusCVV: any
}

export const CheckoutComponent = ({
  cardNumber,
  name,
  expireMonth,
  expireYear,
  cvv,
  cardFocusCVV,
  setCvv,
  setCardFocusCVV,
}: CheckoutProps) => {
  return (
    <>
      <Container
        minHeight="100vh"
        minWidth="100vw"
        backgroundColor="#f1f1f1"
        padding="0"
        display="flex"
        paddingTop="150px"
      >
        <Container backgroundColor="#F2F2F2">
          <Container
            backgroundColor="white"
            borderTopRadius="11px"
            padding="20px 15px"
          >
            <Text
              display="flex"
              textAlign="center"
              justifyContent="center"
              color="#781A29"
              marginBottom="20px"
              fontSize="20px"
              borderBottom="2px solid #781A29"
            >
              Ingresá los datos de tu tarjeta de débito o crédito
            </Text>
            <Input
              fontSize="15px"
              variant="flushed"
              placeholder="E-mail"
              type="email"
              /*  onChange={(e) => setEmail(e.target.value)} */
              _placeholder={{ color: 'black' }}
              borderColor="black"
              focusBorderColor="#f6b4cf"
            />
            <Input
              fontSize="15px"
              variant="flushed"
              /* value={cardNumber}
              onChange={(e) => guessPaymentMethod(e.target.value)} */
              placeholder="Número de la tarjeta"
              type="number"
              _placeholder={{ color: 'black' }}
              borderColor="black"
              focusBorderColor="#f6b4cf"
            />
            <Input
              fontSize="15px"
              variant="flushed"
              /* value={name}
              onChange={(e) => setName(e.target.value)} */
              placeholder="Nombre y Apellido"
              _placeholder={{ color: 'black' }}
              borderColor="black"
              focusBorderColor="#f6b4cf"
            />
            <HStack marginTop="5px">
              <Input
                fontSize="15px"
                variant="flushed"
                placeholder="Mes"
                /*  value={cardExpireMonth}
                onChange={(e) => setCardExpireMonth(e.target.value)} */
                type="number"
                _placeholder={{ color: 'black' }}
                borderColor="black"
                focusBorderColor="#f6b4cf"
              />
              <Input
                fontSize="15px"
                variant="flushed"
                placeholder="Año"
                /*  value={cardExpireYear}
                onChange={(e) => setCardExpireYear(e.target.value)} */
                type="number"
                _placeholder={{ color: 'black' }}
                borderColor="black"
                focusBorderColor="#f6b4cf"
              />
            </HStack>
            <Input
              fontSize="15px"
              variant="flushed"
              placeholder="DNI (titular tarjeta)"
              type="number"
              /* onChange={(e) => setDoc(e.target.value)} */
              _placeholder={{ color: 'black' }}
              borderColor="black"
              focusBorderColor="#f6b4cf"
            />
            <Input
              fontSize="15px"
              variant="flushed"
              placeholder="Código de seguridad"
              type="number"
              _placeholder={{ color: 'black' }}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              onFocus={() => setCardFocusCVV(true)}
              onBlur={() => setCardFocusCVV(false)}
              borderColor="black"
              focusBorderColor="#f6b4cf"
            />

            <Select
              variant="flushed"
              id="installments"
              color="#333"
              size="md"
              borderColor="black"
              focusBorderColor="#f6b4cf"
              /* onChange={(e) => setInstallment(e.target.value)} */
            >
              <option>Cuotas</option>
              {/* {installmentList.length !== 0 ? (
                <>
                  {installmentList.map(
                    (installment: {
                      recommended_message: string
                      installments: number
                    }) => {
                      return (
                        <option
                          onClick={this.setNumberInstallments}
                          key={installment.installments}
                          value={installment.installments}
                        >
                          {installment.recommended_message}
                        </option>
                      )
                    }
                  )}
                </>
              ) : null} */}
            </Select>
          </Container>
          <Container
            backgroundColor="white;"
            borderBottomRadius="11px"
            paddingTop="20px"
          >
            <Container marginY="30px">
              {/* <Card
                number={cardNumber}
                name={name}
                expiry={expireMonth + '/' + expireYear}
                cvv={cvv}
                flipCard={cardFocusCVV}
                brand="visa"
              /> */}
            </Container>
            <Button
              /*  disabled={disabled}
                onClick={handlePay} */
              width="100%"
              marginY="19px"
              borderRadius="45px"
              fontSize="19px"
              fontWeight="700"
              color="#333"
              bgGradient="linear(
                to-r,
                #f6b4cf 0%,
                #fff7a4 40%,
                #98d1ef 100%
              )"
            >
              PAGAR
            </Button>
          </Container>
        </Container>
        <Container position="relative">
          <CheckoutInfoController />
        </Container>
      </Container>
    </>
  )
}
