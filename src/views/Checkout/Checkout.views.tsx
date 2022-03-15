import { CheckoutController } from '../../controllers/Checkout/Checkout.controller'
import { FooterController } from '../../controllers/Footer/Footer.controller'
import { HeaderController } from '../../controllers/Header/Header.controller'

export const Checkout = () => {
  return (
    <>
      <HeaderController />
      <CheckoutController />
      <FooterController />
    </>
  )
}
