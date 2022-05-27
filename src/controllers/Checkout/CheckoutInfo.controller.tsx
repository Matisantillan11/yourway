import React, { useContext, useEffect, useMemo } from 'react'
import { CheckoutInfoComponent } from '../../components/Checkout/CheckoutInfo.component'
import { AppContext } from '../../context/globalContext'
import { useCurrencyFormater } from '../../hooks/useCurrencyFormater'
import { CartItemContext } from '../../interfaces/cart.interface'

export const CheckoutInfoController = () => {
  const { state } = useContext(AppContext)

  useEffect(() => window.scrollTo(0,0), [])

  const cart = useMemo(() => {
    if(state.cart.length > 0) return state.cart.sort((firstCart: CartItemContext, secondCar: CartItemContext) => {
      if(firstCart.quantity < secondCar.quantity) return 1
      if(secondCar.quantity < firstCart.quantity) return -1
      return 0
    })
    return []
  }, [state.cart])

  const totalPrice = useCurrencyFormater(state.totalPrice)

  return <CheckoutInfoComponent cart={cart} totalPrice={totalPrice}/>
}
