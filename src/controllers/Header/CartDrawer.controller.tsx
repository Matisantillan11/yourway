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
  const { state, removeFromCart } = useContext(AppContext)
  
  useEffect(() => {
    if(state.cart) localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state])

  const cart = useMemo(() => {
    if(state.cart.length > 0) return state.cart.sort((firstCart: CartItemContext, secondCar: CartItemContext) => {
      if(firstCart.quantity < secondCar.quantity) return 1
      if(secondCar.quantity < firstCart.quantity) return -1
      return 0
    })
    return []
  }, [state.cart])

  const onDelete = (id: string) => {
    removeFromCart(id)
  }

  const totalPrice = useCurrencyFormater(state.totalPrice)

  return (
    <CartDrawerComponent open={open} onClose={onClose} cart={cart} onDelete={onDelete} totalPrice={totalPrice} />
  )
}
