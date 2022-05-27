import React, { useContext, useEffect, useMemo } from 'react'
import { CartDrawerComponent } from '../../components/Header/CartDrawer.component'
import { AppContext } from '../../context/globalContext'
import { useCurrencyFormater } from '../../hooks/useCurrencyFormater'

export interface CartDrawerProps {
  open: any
  onClose: any
}
export const CartDrawerController = ({ open, onClose }: CartDrawerProps) => {
  const { state, removeFromCart } = useContext(AppContext)
  
  const cart = useMemo(() => {
    if(state.cart.length > 0) return state.cart
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
