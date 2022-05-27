import React, { useContext, useEffect, useMemo } from 'react'
import { parseCommandLine } from 'typescript'
import { CheckoutInfoComponent } from '../../components/Checkout/CheckoutInfo.component'
import { AppContext } from '../../context/globalContext'
import { useCurrencyFormater } from '../../hooks/useCurrencyFormater'
import { CartItemContext } from '../../interfaces/cart.interface'

export const CheckoutInfoController = () => {
  const { state } = useContext(AppContext)

  useEffect(() => window.scrollTo(0,0), [])

  const persistedCart: any = localStorage.getItem('cart')
  const parsedCart: CartItemContext[] = JSON.parse(persistedCart)

  const cart = useMemo(() => {
    if(state.cart.length > 0) return state.cart.sort((firstCart: CartItemContext, secondCar: CartItemContext) => {
      if(firstCart.quantity < secondCar.quantity) return 1
      if(secondCar.quantity < firstCart.quantity) return -1
      return 0
    })

  
    if(state.cart.length === 0 && parsedCart.length > 0){
      return parsedCart
    }

    return []
  }, [state.cart, localStorage.getItem('cart')])

  const calculateTotalPrice = () => {
    let totalPrice: number = 0
    if(state.cart.length === 0 && parsedCart.length > 0){
      parsedCart.map((itemCart: CartItemContext) => totalPrice = totalPrice + (itemCart.quantity * itemCart.product.price))[0]
    }

    if(state.cart.length) totalPrice = state.totalPrice

    if(totalPrice !== undefined) return totalPrice
    return 0
  }

  const totalPrice = calculateTotalPrice()
  const finalPrice = useCurrencyFormater(totalPrice)

  return <CheckoutInfoComponent cart={cart} totalPrice={finalPrice}/>
}
