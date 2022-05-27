import React, { useContext, useEffect, useMemo } from 'react'
import { CartDrawerComponent } from '../../components/Header/CartDrawer.component'
import { AppContext } from '../../context/globalContext'
import { useCurrencyFormater } from '../../hooks/useCurrencyFormater'
import { CartItemContext } from '../../interfaces/cart.interface'

export interface CartDrawerProps {
  open: any
  onClose: any
}
export const CartDrawerController = ({ open, onClose }: CartDrawerProps) => {
  const { state, removeFromCart, clearCart } = useContext(AppContext)
  const persistedCart: any = localStorage.getItem('cart')
  const parsedCart: CartItemContext[] = JSON.parse(persistedCart)

  useEffect(() => {
    if(state.cart.length) localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state])

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

  const onDelete = (id: string) => {
    removeFromCart(id)
  }

  const deleteCart = () => {
    localStorage.removeItem('cart')
    clearCart()
  }
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

  return (
    <CartDrawerComponent open={open} onClose={onClose} cart={cart} onDelete={onDelete} deleteCart={deleteCart} totalPrice={finalPrice}  />
  )
}
